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
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
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

<TopAppBar bind:this={topAppBar} variant="standard">
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

<AutoAdjust {topAppBar} style="display: flex;">
  <Drawer variant="dismissible" bind:open style="padding: 20px">
    <Header>
      <Title>Super Drawer</Title>
      <Subtitle>It's the best drawer.</Subtitle>
    </Header>
    <Content>
      <List>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Inbox")}
          activated={active === "Inbox"}
        >
          <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
          <Text>Inbox</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Star")}
          activated={active === "Star"}
        >
          <Graphic class="material-icons" aria-hidden="true">star</Graphic>
          <Text>Star</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Sent Mail")}
          activated={active === "Sent Mail"}
        >
          <Graphic class="material-icons" aria-hidden="true">send</Graphic>
          <Text>Sent Mail</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Drafts")}
          activated={active === "Drafts"}
        >
          <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
          <Text>Drafts</Text>
        </Item>

        <Separator />
        <Subheader>Labels</Subheader>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Family")}
          activated={active === "Family"}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Family</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Friends")}
          activated={active === "Friends"}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Friends</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Work")}
          activated={active === "Work"}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Work</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content" style="padding: 20px;">
    <Button on:click={() => (open = !open)}>
      <Label>Toggle Drawer</Label>
    </Button>
    <br />
    <pre class="status">Active: {active}</pre>
    <slot />
  </AppContent>
</AutoAdjust>

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

  * :global(.app-content) {
    padding: 20px;
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
  /* .drawer {
    margin: 20px;
  } */
</style>
