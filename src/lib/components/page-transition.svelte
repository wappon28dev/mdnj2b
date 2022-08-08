<script lang="ts">
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let pathname = "";
  let animations = false;

  onMount(
    () =>
      (animations = !window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches)
  );
</script>

{#key pathname}
  {#if animations}
    <div
      in:fly={{ y: -5, duration: 250, delay: 300 }}
      out:fly={{ y: 5, duration: 250 }}
    >
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
{/key}
