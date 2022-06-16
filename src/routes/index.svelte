<script lang="ts">
  import Drawer, {
    AppContent,
    Content,
    Title as DrawerTitle,
    Header,
    Subtitle,
  } from "@smui/drawer";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import Contents from "./_pochikata.svelte";
  import { scrollId } from "../store";

  let open = true;

  let active = "movie";
  function setActive(value: string) {
    active = value;
    scrollId.set(`#${value}`);
  }
</script>

<AppContent class="app-content">
  <main class="main-content">
    <Contents />
  </main>
</AppContent>

<div class="drawer-container">
  <Drawer style="padding: 10px; min-width: max-content;">
    <Header>
      <DrawerTitle>ポチポチ vs カタカタ</DrawerTitle>
      <Subtitle>フリック入力とローマ字入力対決</Subtitle>
    </Header>
    <Content>
      <List>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("movie")}
          activated={active === "movie"}
        >
          <Graphic class="material-icons" aria-hidden="true">movie</Graphic>
          <Text>紹介動画</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("place")}
          activated={active === "place"}
        >
          <Graphic class="material-icons" aria-hidden="true">place</Graphic>
          <Text>場所</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("time")}
          activated={active === "time"}
        >
          <Graphic class="material-icons" aria-hidden="true">schedule</Graphic>
          <Text>時間</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("rule")}
          activated={active === "rule"}
        >
          <Graphic class="material-icons-outlined" aria-hidden="true"
            >fact_check</Graphic
          >
          <Text>ルール</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("other")}
          activated={active === "other"}
        >
          <Graphic class="material-icons" aria-hidden="true">more_horiz</Graphic
          >
          <Text>その他</Text>
        </Item>
      </List>
    </Content>
  </Drawer>
</div>

<style>
  .drawer-container {
    position: fixed;
    display: flex;
    min-width: max-content;
    left: 10;
    top: 40;
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
    padding-left: 270px;
  }
</style>
