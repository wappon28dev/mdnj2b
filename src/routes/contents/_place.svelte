<script lang="ts">
    import { isLoading } from "$lib/model/store";
    import Button, { Icon, Label } from "@smui/button";
    import { onMount } from "svelte";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="wide_title">
    <p>場所</p>
</div>
<div class="main">
    {#each Array(10) as _unused, i}
        <p>どーしよ</p>
    {/each}
</div>

<style>
</style>
