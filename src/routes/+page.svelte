<script lang="ts">
    import Button, { Icon, Label } from "@smui/button";
    import { currentPath, isLoading } from "$lib/model/store";
    import { onMount } from "svelte";
    import Home from "./contents/_home.svelte";
    import { animateScroll } from "svelte-scrollto-element";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<svelte:head>
    <title>ポチポチvsカタカタ - mdnj2b</title>
</svelte:head>

<div id="home">
    <Home />
</div>

<style>
</style>
