<script lang="ts">
  import Button, { Label, Icon } from "@smui/button";
  import { animateScroll } from "svelte-scrollto-element";
  import { scrollId } from "../store";

  let open = true;
  let active = "movie";
  let clicked = 0;

  function handleClick(event: CustomEvent | MouseEvent) {
    event = event as MouseEvent;
    if (event.button === 0) {
      clicked++;
    }
  }

  function reset() {
    clicked = 0;
  }

  scrollId.subscribe((snap) => {
    if (snap !== "") {
      animateScroll.scrollTo({
        element: snap as unknown as HTMLElement,
      });
    }
  });
</script>

<div>
  <Button on:click={() => (open = !open)}>
    <Label>Toggle Drawer</Label>
  </Button>
  <br />
  <pre class="status">Active: {active}</pre>
  <slot />

  <Button on:mousedown={handleClick}>
    <Icon class="material-icons">thumb_up</Icon>
    <Label>Click Me</Label>
  </Button>
  <p>
    {#if clicked}
      You've clicked the button {clicked} time{clicked === 1 ? "" : "s"}. You
      can
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a on:click={reset} href="javascript:void(0);">reset it</a>.
    {:else}
      <span>You haven't clicked the button.</span>
    {/if}
  </p>
  <p id="movie">asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p>asdfposad</p>
  <p id="place">asdfposad</p>
</div>
