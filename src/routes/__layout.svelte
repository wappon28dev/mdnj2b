<script lang="ts">
  import Button from "@smui/button";
  import type { TopAppBarComponentDev } from "@smui/top-app-bar";

  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import { Label } from "@smui/common";

  let topAppBar: TopAppBarComponentDev;

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
      <IconButton class="material-icons">menu</IconButton>
      <Title>mdnj2b</Title>
    </Section>
    <Section align="end" toolbar>
      <Button on:click={switchTheme}>
        <Label>{lightTheme ? "Dark" : "Light"}</Label>
      </Button>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar} style="display: flex; justify-content: space-between;">
  <div class="container"><slot /></div>
  <div class="container" />
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
</style>
