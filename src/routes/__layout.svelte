<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url: { pathname } }) => ({
    props: { pathname },
  });
</script>

<script lang="ts">
  import type { TopAppBarComponentDev } from "@smui/top-app-bar";
  import Button, { Label } from "@smui/button";
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Drawer, {
    AppContent,
    Content,
    Title as DrawerTitle,
    Header,
    Subtitle,
    Scrim,
  } from "@smui/drawer";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { ThemeManager } from "../theme/theme";
  import { currentPath, PathId, isLoading } from "$lib/store";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import PageTransition from "$lib/page-transition.svelte";
  import LinearProgress from "@smui/linear-progress";
  import { isLandscape } from "$lib/device";
  import Splash from "$lib/components/splash.svelte";
  import { animateScroll } from "svelte-scrollto-element";
  import qrcode from "$lib/assets/img/qrcode.svg";

  export let pathname = "";

  let open = false;
  let isLandscapeSnap = false;
  let topAppBar: TopAppBarComponentDev;
  let theme = new ThemeManager();
  let isLightModeStr = theme.isLight ? "Dark" : "Light";
  let isAppLoading = false;

  onMount(async () => {
    open = isLandscape();
    isAppLoading = true;
    isLandscapeSnap = isLandscape();
    const param = new URL(location.href).searchParams.toString();

    if (param !== "") {
      const page = param.replace("p=", "");
      await new Promise((resolve) => setTimeout(resolve, 100));
      setActive(page);
    } else {
      currentPath.set(PathId.HOME);
    }
  });

  async function setActive(route: string) {
    // isLoading.set(true);
    currentPath.set(route);
    animateScroll.scrollTo({
      element: `#${route}` as unknown as HTMLElement,
      offset: isLandscapeSnap ? -65 : -55,
    });
    open = !isLandscapeSnap ? false : true;
    // await new Promise((resolve) => setTimeout(resolve, 1500)); // for debugging

    goto(route == PathId.HOME ? "/" : ` ?p=${route}`);
  }
</script>

{#if isAppLoading}
  <TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        <IconButton class="material-icons" on:click={() => (open = !open)}
          >menu</IconButton
        >
        <Title>ポチポチvsカタカタ</Title>
      </Section>
      <Section align="end" toolbar>
        <Button on:click={theme.toggleTheme}>
          <Label>{isLightModeStr}</Label>
        </Button>
      </Section>
    </Row>
    {#if !isLandscapeSnap}
      <div class="progress-mobile">
        {#if $isLoading}
          <LinearProgress class="progress-bar-mobile" indeterminate />
        {/if}
      </div>
    {/if}
  </TopAppBar>

  <AutoAdjust {topAppBar}>
    <div class="drawer-container">
      <Drawer
        variant="modal"
        bind:open
        style="padding: 10px;"
        fixed={isLandscapeSnap}
      >
        <Header>
          <DrawerTitle>ポチポチvsカタカタ</DrawerTitle>
          <Subtitle>フリック入力とローマ字入力対決</Subtitle>
        </Header>
        {#if isLandscapeSnap}
          <div class="progress">
            {#if $isLoading}
              <LinearProgress class="progress-bar" indeterminate />
            {/if}
          </div>
        {/if}

        <Content>
          <List>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive(PathId.HOME)}
              activated={$currentPath == PathId.HOME}
            >
              <Graphic class="material-icons" aria-hidden="true">home</Graphic>
              <Text>ホーム</Text>
            </Item>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive(PathId.TRAILER)}
              activated={$currentPath == PathId.TRAILER}
            >
              <Graphic class="material-icons" aria-hidden="true">movie</Graphic>
              <Text>トレーラー</Text>
            </Item>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive(PathId.PLACE)}
              activated={$currentPath == PathId.PLACE}
            >
              <Graphic class="material-icons" aria-hidden="true">place</Graphic>
              <Text>場所</Text>
            </Item>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive(PathId.RULES)}
              activated={$currentPath == PathId.RULES}
            >
              <Graphic class="material-icons-outlined" aria-hidden="true"
                >fact_check</Graphic
              >
              <Text>ルール</Text>
            </Item>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive(PathId.ETC)}
              activated={$currentPath == PathId.ETC}
            >
              <Graphic class="material-icons" aria-hidden="true"
                >more_horiz</Graphic
              >
              <Text>その他</Text>
            </Item>
          </List>
        </Content>
        <div class="share"> 周りの子に<br />きょーゆーするのだ！ </div>
        <!-- <div class="test">
          <div class="material-icons" aria-hidden="true">warning</div>
          <p>プログレスバーの確認の為に画面遷移時に1.5秒遅延させてます</p>
        </div> -->
      </Drawer>

      {#if !isLandscapeSnap}
        <Scrim fixed={false} />
      {/if}
      <AppContent class="app-content">
        <main class="main-content">
          <PageTransition {pathname}>
            <slot />
          </PageTransition>
        </main>
      </AppContent>
    </div>
  </AutoAdjust>
{:else}
  <Splash />
{/if}

<style>
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    box-sizing: border-box;
  }

  .progress {
    padding-top: 8px;
    min-height: 4px;
  }
  .progress-mobile {
    margin-top: -5.5px;
    min-height: 4px;
  }

  .share {
    padding: 20px;
    margin-bottom: 65px;
    border-radius: 10px;
    text-align: center;
    color: var(--m3-on-tertiary);
    background-color: var(--m3-tertiary);
  }
</style>
