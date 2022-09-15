<script lang="ts">
    import { isLoading } from "$lib/model/store";
    import { onMount } from "svelte";

    onMount(() => {
        isLoading.set(false);
    });
</script>

<div class="trailer">
    <video
        controls
        autoplay
        preload="metadata"
        src="https://roto-server.f5.si/mdnj2b/trailer.mp4"
    />
</div>

<style lang="scss">
    .trailer {
        display: flex;
        align-items: center;
        video {
            width: 100%;
        }
    }
</style>
