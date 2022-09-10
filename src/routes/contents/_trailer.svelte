<script lang="ts">
    import Button, { Icon, Label } from "@smui/button";
    import { isLoading } from "$lib/model/store";
    import { onMount } from "svelte";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="wide_title">
    <p>トレーラー</p>
</div>
<div class="main">
    {#each Array(10) as _}
        <p>どーしよ</p>
    {/each}
</div>

<style>
</style>
