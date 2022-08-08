<script>
    import Button, { Icon, Label } from "@smui/button";
    import {
        isLandscapeSnap,
        firestoreStatus,
        isLoading,
    } from "$lib/model/store";
    import { onMount } from "svelte";
    import SvelteTypedJs from "svelte-typed-js";

    onMount(async () => {
        isLoading.set(false);
    });

    let status = "";
    firestoreStatus.subscribe((value) => (status = value));
</script>

<div class="wide_title">
    <div class="typing-container">
        <SvelteTypedJs
            strings={["ポチポチ vs カタカタ"]}
            loop={false}
            startDelay="800"
            typeSpeed="9.8"
        >
            <span class="typing" />
        </SvelteTypedJs>
    </div>
</div>

<div class="main">
    {#each Array(10) as _unused, i}
        <p>どーしよ</p>
    {/each}
</div>

<style>
    .typing-container {
        padding: 18px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
