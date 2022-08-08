<script lang="ts">
    import {
        firestoreStatus,
        isLoading,
        recruitDataSnap,
        recruitIdSnap,
    } from "$lib/model/store";
    import {
        getStatus,
        getRecruitData,
        deleteRecruitData,
        type RecruitData,
    } from "$lib/firebase/db_repository";
    import { onMount } from "svelte";
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Fab, { Label as FabLabel, Icon as FabIcon } from "@smui/fab";
    import RecruitDialog from "$lib/components/recruit/register.svelte";
</script>

<LayoutGrid>
    {#each Array($recruitDataSnap.length) as _, i}
        <Cell>
            <Card>
                <PrimaryAction on:click={() => null}>
                    <Media
                        class="card-media-16x9"
                        aspectRatio="16x9"
                        style="background-image: url({$recruitDataSnap[i]
                            .thumbnail});"
                    />
                    <Content class="mdc-typography--body2">
                        <p style="margin: 0;">{$recruitDataSnap[i].title}</p>
                        <h3
                            class="mdc-typography--subtitle2"
                            style="margin: 0 0 10px; color: #888;"
                        >
                            {$recruitDataSnap[i].author}
                        </h3>
                        {$recruitDataSnap[i].detail}
                    </Content>
                </PrimaryAction>
                <Actions>
                    <ActionButtons>
                        <Button on:click={() => null}>
                            <Label>Another</Label>
                        </Button>
                    </ActionButtons>
                    <ActionIcons>
                        <IconButton
                            class="material-icons"
                            on:click={() => null}
                            title="Share">share</IconButton
                        >
                        <IconButton
                            class="material-icons"
                            on:click={() =>
                                deleteRecruitData($recruitIdSnap[i])}
                            title="More options">delete</IconButton
                        >
                    </ActionIcons>
                </Actions>
            </Card>
        </Cell>
    {/each}
</LayoutGrid>
