<script lang="ts">
    import type { RecruitData } from "$lib/firebase/db_repository";
    import { recruitDataSnap } from "$lib/model/store";

    import DataTable, {
        Head,
        Body,
        Row,
        Cell,
        Label,
        SortValue,
    } from "@smui/data-table";
    import IconButton from "@smui/icon-button";

    let items: RecruitData[] = [];
    let sort: keyof RecruitData = "endTime";
    let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";

    recruitDataSnap.subscribe((value) => (items = value));

    // if (typeof fetch !== "undefined") {
    //     fetch(
    //         "https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json"
    //     )
    //         .then((response) => response.json())
    //         .then((json) => (items = json));
    // }

    function handleSort() {
        console.log(items);

        items.sort((a, b) => {
            const [aVal, bVal] = [a[sort], b[sort]][
                sortDirection === "ascending" ? "slice" : "reverse"
            ]();
            if (typeof aVal === "string" && typeof bVal === "string") {
                return aVal.localeCompare(bVal);
            }
            return Number(aVal) - Number(bVal);
        });
        console.log(items);

        items = items;
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
            <!--
        Note: whatever you supply to "columnId" is
        appended with "-status-label" and used as an ID
        for the hidden label that describes the sort
        status to screen readers.

        You can localize those labels with the
        "sortAscendingAriaLabel" and
        "sortDescendingAriaLabel" props on the DataTable.
      -->
            <Cell numeric columnId="id">
                <!-- For numeric columns, icon comes first. -->
                <IconButton class="material-icons">arrow_upward</IconButton>
                <Label><strong>ID</strong></Label>
            </Cell>
            <Cell columnId="email" l>
                <Label><strong>募集の状態</strong></Label>
                <IconButton class="material-icons">arrow_upward</IconButton>
            </Cell>
            <Cell columnId="name" style="width: 100%;">
                <Label><strong>Name</strong></Label>
                <!-- For non-numeric columns, icon comes second. -->
                <IconButton class="material-icons">arrow_upward</IconButton>
            </Cell>
            <Cell columnId="username">
                <Label><strong>Username</strong></Label>
                <IconButton class="material-icons">arrow_upward</IconButton>
            </Cell>
            <!-- You can turn off sorting for a column. -->
            <Cell sortable={false}><strong>Website</strong></Cell>
        </Row>
    </Head>
    <Body>
        {#each items as _, index}
            <Row>
                <Cell numeric>{index + 1}</Cell>
                <Cell>{items[index].recruitStatus}</Cell>
                <Cell>{items[index].title}</Cell>
                <Cell>{items[index].author}</Cell>
                <Cell>{items[index].deadline}</Cell>
            </Row>
        {/each}
    </Body>
</DataTable>
