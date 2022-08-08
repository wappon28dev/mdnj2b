<script lang="ts">
    import Button, { Icon, Label } from "@smui/button";
    import { firestoreStatus, isLoading, sampleData } from "$lib/model/store";
    import { onMount } from "svelte";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="wide_title">
    <p>ルール</p>
</div>
<div class="main">
    {#each Array(10) as _unused, i}
        <p>どーしよ</p>
    {/each}
</div>

<style>
</style>
