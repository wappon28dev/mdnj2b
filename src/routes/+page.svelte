<script lang="ts">
    import Button, { Icon, Label } from "@smui/button";
    import { currentPath, isLoading } from "$lib/model/store";
    import { onMount } from "svelte";
    import Home from "./contents/_home.svelte";
    import Trailer from "./contents/_trailer.svelte";
    import Place from "./contents/_place.svelte";
    import Etc from "./contents/_etc.svelte";
    import { animateScroll } from "svelte-scrollto-element";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div id="home">
    <Home />
</div>
<div id="trailer">
    <Trailer />
</div>
<div id="place">
    <Place />
</div>
<div id="etc">
    <Etc />
</div>

<style>
</style>
