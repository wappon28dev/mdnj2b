<script lang="ts">

  import Button, { Label, Icon } from "@smui/button";

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
</script>

<Button on:mousedown={handleClick}>
  <Icon class="material-icons">thumb_up</Icon>
  <Label>Click Me</Label>
</Button>
<p>
  {#if clicked}
    You've clicked the button {clicked} time{clicked === 1 ? "" : "s"}. You can
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a on:click={reset} href="javascript:void(0);">reset it</a>.
  {:else}
    <span>You haven't clicked the button.</span>
  {/if}
</p>
