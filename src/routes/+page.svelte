<script lang="ts">
    import Button, { Icon, Label } from "@smui/button";
    import {
        currentPath,
        firestoreStatus,
        isLoading,
        sampleData,
    } from "$lib/model/store";
    import { onMount } from "svelte";
    import Home from "./contents/_home.svelte";
    import Trailer from "./contents/_trailer.svelte";
    import Place from "./contents/_place.svelte";
    import Rules from "./contents/_rules.svelte";
    import Etc from "./contents/_etc.svelte";
    import { animateScroll } from "svelte-scrollto-element";
    import { isLandscape } from "$lib/model/device";

    onMount(() => {
        isLoading.set(false);
    });

    let status = "";
    firestoreStatus.subscribe((value) => (status = value));
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
<div id="rules">
    <Rules />
</div>
<div id="etc">
    <Etc />
</div>

<style>
</style>
