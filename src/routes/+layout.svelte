<script lang="ts">
    import type { TopAppBarComponentDev } from "@smui/top-app-bar";
    import Button, { Label } from "@smui/button";
    import TopAppBar, {
        Row,
        Section,
        Title,
        AutoAdjust,
    } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import Drawer, {
        AppContent,
        Content,
        Title as DrawerTitle,
        Header,
        Subtitle,
        Scrim,
    } from "@smui/drawer";
    import List, { Item, Text, Graphic } from "@smui/list";
    import { ThemeManager } from "../theme/theme";
    import {
        currentPath,
        isLoading,
        isDrawerOpened,
        isLightTheme,
    } from "$lib/model/store";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import PageTransition from "$lib/components/page-transition.svelte";
    import LinearProgress from "@smui/linear-progress";
    import Splash from "$lib/components/splash.svelte";
    import SvelteTypedJs from "svelte-typed-js";
    import type { PageData } from "./$types";
    import { PathId } from "$lib/model/constant";
    import { LandScapeDetecter } from "$lib/model/landscape";

    export let data: PageData;

    let isLandscapeSnap = false;
    let topAppBar: TopAppBarComponentDev;
    let hasAppMounted = false;

    onMount(async () => {
        let path = new URL(location.href).pathname;

        hasAppMounted = true;
        updateSize();

        currentPath.set(path);
        console.log(path);
        ThemeManager.init();

        // callback windows width event
        window.addEventListener("resize", updateSize);
    });

    // eslint-disable-next-line no-inner-declarations
    function updateSize(): void {
        isLandscapeSnap = LandScapeDetecter.isLandscape();
        $isDrawerOpened = LandScapeDetecter.isLandscape();
    }

    // eslint-disable-next-line no-inner-declarations
    async function runTransition(route: string) {
        $isDrawerOpened = isLandscapeSnap;
        if (route !== $currentPath && !$isLoading) {
            isLoading.set(true);
            currentPath.set(route);
            void goto(route);
        }
    }
</script>

{#if hasAppMounted}
    <TopAppBar bind:this={topAppBar} variant="fixed">
        <Row>
            <Section>
                <IconButton
                    class="material-icons"
                    on:click={() => ($isDrawerOpened = !$isDrawerOpened)}
                    >menu</IconButton
                >
                <Title>mdnj2b</Title>
            </Section>
            <Section align="end" toolbar>
                <Button on:click={ThemeManager.toggleTheme}>
                    <Label>{$isLightTheme ? "Dark" : "Light"}</Label>
                </Button>
            </Section>
        </Row>
        {#if !isLandscapeSnap}
            <div class="progress-mobile">
                {#if $isLoading}
                    <LinearProgress class="progress-bar-mobile" indeterminate />
                {/if}
            </div>
        {/if}
    </TopAppBar>

    <AutoAdjust {topAppBar}>
        <div class="drawer-container">
            <Drawer
                variant="modal"
                bind:open={$isDrawerOpened}
                style="padding: 10px;"
                fixed={isLandscapeSnap}
            >
                <Header>
                    <img
                        src="img/logo/icon.png"
                        alt="logo"
                        width="150"
                        style="
                            padding-top:20px;
                            display: block;
                            margin-left: auto;
                            margin-right: auto"
                    />
                    <div class="typing-container">
                        <SvelteTypedJs
                            strings={["ポチポチ vs カタカタ"]}
                            loop={false}
                            startDelay="500"
                            typeSpeed="9.8"
                            showCursor={false}
                        >
                            <DrawerTitle>
                                <span class="typing" />
                            </DrawerTitle>
                        </SvelteTypedJs>
                    </div>
                    <div class="typing-container">
                        <SvelteTypedJs
                            strings={["フリック入力とローマ字入力対決"]}
                            loop={false}
                            startDelay="700"
                            typeSpeed="9.8"
                            showCursor={false}
                        >
                            <Subtitle>
                                <span class="typing" />
                            </Subtitle>
                        </SvelteTypedJs>
                    </div>
                </Header>
                {#if isLandscapeSnap}
                    <div class="progress">
                        {#if $isLoading}
                            <LinearProgress
                                class="progress-bar"
                                indeterminate
                            />
                        {/if}
                    </div>
                {/if}

                <Content>
                    <List>
                        <Item
                            href="javascript:void(0)"
                            on:click={() => runTransition(PathId.HOME)}
                            activated={$currentPath == PathId.HOME}
                        >
                            <Graphic class="material-icons" aria-hidden="true"
                                >home</Graphic
                            >
                            <Text>ホーム</Text>
                        </Item>
                        <Item
                            href="javascript:void(0)"
                            on:click={() => runTransition(PathId.TRAILER)}
                            activated={$currentPath == PathId.TRAILER}
                        >
                            <Graphic class="material-icons" aria-hidden="true"
                                >movie</Graphic
                            >
                            <Text>トレーラー</Text>
                        </Item>
                        <Item
                            href="javascript:void(0)"
                            on:click={() => runTransition(PathId.RANKING)}
                            activated={$currentPath == PathId.RANKING}
                        >
                            <Graphic class="material-icons" aria-hidden="true"
                                >assessment</Graphic
                            >
                            <Text>リアルタイム順位表</Text>
                        </Item>
                    </List>
                </Content>
                <div class="share">
                    <div class="qrcode">
                        <img src="img/qrcode.svg" height="70" alt="" /><br />
                    </div>
                    周りの子に<br />
                    きょーゆーするのだ！
                </div>
                {#if isLandscapeSnap}
                    <div class="bottom-space" style="padding-bottom: 65px; " />
                {/if}
            </Drawer>
            {#if !isLandscapeSnap}
                <Scrim fixed={false} />
            {/if}
            <AppContent class="app-content">
                <PageTransition {data}>
                    <slot />
                </PageTransition>
            </AppContent>
        </div>
    </AutoAdjust>
{:else}
    <Splash />
{/if}

<style>
    * :global(.app-content) {
        flex: auto;
        overflow: auto;
        overflow-x: hidden;
        position: relative;
        flex-grow: 1;
    }

    .progress {
        padding-top: 8px;
        min-height: 4px;
    }
    .progress-mobile {
        margin-top: -5.5px;
        min-height: 4px;
    }
    .drawer-container {
        position: relative;
        display: flex;
        height: 91vh;
    }

    .share {
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        color: var(--m3-on-tertiary);
        background-color: var(--m3-tertiary);
    }

    .typing-container {
        font-size: medium;
    }
</style>
