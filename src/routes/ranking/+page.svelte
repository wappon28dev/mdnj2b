<script lang="ts">
    import { currentScoreData, isLoading } from "$lib/model/store";
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
    import type { ScoreData } from "$lib/firebase/db_repository";

    onMount(() => {
        isLoading.set(false);
    });

    let sort: keyof ScoreData = "score";
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
                <Label>順位</Label>
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
        {#each $currentScoreData as scoreData, index}
            <Row>
                <Cell numeric>{index + 1}</Cell>
                <Cell>{scoreData.nickname}</Cell>
                <Cell>{scoreData.score}</Cell>
                <Cell>{scoreData.classId + " " + scoreData.charId}</Cell>
                <Cell>{scoreData.isKata ? "カタカタ" : "ポチポチ"}</Cell>
            </Row>
        {/each}
    </Body>
</DataTable>
