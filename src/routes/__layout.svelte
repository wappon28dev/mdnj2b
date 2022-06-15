<script lang="ts">
  import type { TopAppBarComponentDev } from "@smui/top-app-bar";
  import Drawer, {
    AppContent,
    Content,
    Title as DrawerTitle,
    Header,
    Subtitle,
  } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text } from "@smui/list";
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";

  let topAppBar: TopAppBarComponentDev;

  let open = true;
  let active = "Gray Kittens";
  function setActive(value: string) {
    active = value;
  }

  let lightTheme =
    typeof window === "undefined" ||
    window.matchMedia("(prefers-color-scheme: light)").matches;
  function switchTheme() {
    lightTheme = !lightTheme;
    let themeLink = document.head.querySelector<HTMLLinkElement>("#theme");
    if (!themeLink) {
      themeLink = document.createElement("link");
      themeLink.rel = "stylesheet";
      themeLink.id = "theme";
    }
    themeLink.href = `/smui${lightTheme ? "" : "-dark"}.css`;
    document.head
      .querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
      ?.insertAdjacentElement("afterend", themeLink);
  }
</script>

<TopAppBar bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={() => (open = !open)}
        >menu</IconButton
      >
      <Title>mdnj2b</Title>
    </Section>
    <Section align="end" toolbar>
      <Button on:click={switchTheme}>
        <Label>{lightTheme ? "Dark" : "Light"}</Label>
      </Button>
    </Section>
  </Row>
</TopAppBar>

<div class="drawer-container">
  <Drawer variant="modal" fixed={false} bind:open>
    <Header>
      <DrawerTitle>Super Drawer</DrawerTitle>
      <Subtitle>It's the best drawer.</Subtitle>
    </Header>
    <Content>
      <List>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Gray Kittens")}
          activated={active === "Gray Kittens"}
        >
          <Text>Gray Kittens</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("A Space Rocket")}
          activated={active === "A Space Rocket"}
        >
          <Text>A Space Rocket</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("100 Pounds of Gravel")}
          activated={active === "100 Pounds of Gravel"}
        >
          <Text>100 Pounds of Gravel</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("All of the Shrimp")}
          activated={active === "All of the Shrimp"}
        >
          <Text>All of the Shrimp</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("A Planet with a Mall")}
          activated={active === "A Planet with a Mall"}
        >
          <Text>A Planet with a Mall</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <AutoAdjust
    {topAppBar}
    style="display: flex; justify-content: space-between;"
  >
    <AppContent class="app-content">
      <main class="main-content">
        <Button on:click={() => (open = !open)}
          ><Label>Toggle Drawer</Label></Button
        >
        <br />
        <pre class="status">Active: {active}</pre>
        <p>{open}</p>
        <slot />
      </main>
    </AppContent>
  </AutoAdjust>
</div>

<style>
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }

  .drawer-container {
    position: relative;
    display: flex;
    height: max-content;
    max-width: 600px;
    min-width: max-content;
    overflow: hidden;
    z-index: 0;
  }
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
