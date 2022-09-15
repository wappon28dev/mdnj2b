<script lang="ts">
    import { currentScoreData, isLandscape, isLoading } from "$lib/model/store";
    import { onMount } from "svelte";
    import DataTable, {
        Head,
        Body,
        Row,
        Cell,
        Label,
        SortValue,
    } from "@smui/data-table";
    import IconButton from "@smui/icon-button";
    import Tab, { Icon, Label as TabLabel } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import { getSnapshot, type ScoreData } from "$lib/firebase/db_repository";

    let tabs = [
        {
            icon: "select_all",
            label: "ポチ&カタ",
        },
        {
            icon: "smartphone",
            label: "ポチポチ",
        },
        {
            icon: "keyboard",
            label: "カタカタ",
        },
    ];

    let active = tabs[0];
    const hasFinished = false;

    onMount(() => {
        getSnapshot();
    });

    let sort: keyof ScoreData = "rank";
    let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";

    function handleSort() {
        $currentScoreData.sort((a, b) => {
            const [aVal, bVal] = [a[sort], b[sort]][
                sortDirection === "ascending" ? "slice" : "reverse"
            ]();
            if (typeof aVal === "string" && typeof bVal === "string") {
                return aVal.localeCompare(bVal);
            }
            return Number(aVal) - Number(bVal);
        });
        $currentScoreData = $currentScoreData;
    }
</script>

<div class="wide-title">
    <h4>リアルタイム順位表</h4>
</div>
<div class="main">
    <div class="grid">
        <div class="item description">
            <p>
                ポチポチ vs カタカタの企画での得点をリアルタイムで更新します<br
                />
                ページを更新しなくても得点が自動で取得して最新の状態になります！<br
                />
            </p>
        </div>
        {#if !hasFinished}
            <div class="item num">
                <p>11:10にスコア確定予定</p>
            </div>
        {:else}
            <div class="item expired">
                <p>11:10にスコア確定済み</p>
            </div>
        {/if}

        <div class="item description">
            <p>
                それぞれの部門で上位3人だった方は,<br />
                409教室 J2B に来て景品をお受け取りください！
            </p>
        </div>
    </div>
</div>
<div>
    <TabBar {tabs} let:tab bind:active>
        <Tab {tab}>
            {#if $isLandscape}
                <Icon class="material-icons">{tab.icon}</Icon>
            {/if}
            <TabLabel>{tab.label}</TabLabel>
        </Tab>
    </TabBar>
</div>
<div class="table">
    <DataTable
        sortable
        bind:sort
        bind:sortDirection
        on:SMUIDataTable:sorted={handleSort}
        table$aria-label="User list"
        style="width: 100%;"
    >
        <Head>
            <Row>
                <Cell numeric columnId="rank">
                    <IconButton class="material-icons">arrow_upward</IconButton>
                    <Label>{!hasFinished ? "暫定順位" : "確定順位"}</Label>
                </Cell>
                <Cell columnId="nickName" style="width: 100%;">
                    <Label>ニックネーム</Label>
                    <IconButton class="material-icons">arrow_upward</IconButton>
                </Cell>
                <Cell columnId="score">
                    <Label>得点</Label>
                    <IconButton class="material-icons">arrow_upward</IconButton>
                </Cell>
                <Cell columnId="class">
                    <Label>クラス + 番号</Label>
                    <IconButton class="material-icons">arrow_upward</IconButton>
                </Cell>
                <Cell columnId="isKata">種別</Cell>
            </Row>
        </Head>
        <Body>
            {#each $currentScoreData as rankedScoreData, index}
                {#if (active === tabs[1] && !rankedScoreData.isKata) || (active === tabs[2] && rankedScoreData.isKata) || active === tabs[0]}
                    <Row>
                        <Cell numeric>{rankedScoreData.rank}</Cell>
                        <Cell>{rankedScoreData.nickname}</Cell>
                        <Cell>{rankedScoreData.score}</Cell>
                        <Cell
                            >{rankedScoreData.classId +
                                " " +
                                rankedScoreData.charId}</Cell
                        >
                        <Cell
                            >{rankedScoreData.isKata
                                ? "カタカタ"
                                : "ポチポチ"}</Cell
                        >
                    </Row>
                {/if}
            {/each}
        </Body>
    </DataTable>
</div>

<style lang="scss">
    .table {
        padding: 20px;
    }

    .grid {
        display: grid;
        // gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        @media screen and (max-width: 400px) {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }
    .item {
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        &.num {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;
            font-size: large;
            padding: 0 30px 0 30px;

            p {
                line-height: 1.7;
                font-weight: 800;
                font-size: 35px;
                color: var(--m3-primary);
            }
        }
        &.expired {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;
            font-size: large;
            padding: 0 30px 0 30px;

            p {
                line-height: 1.7;
                font-weight: 800;
                font-size: 35px;
                color: var(--m3-error);
            }
        }
    }
</style>
