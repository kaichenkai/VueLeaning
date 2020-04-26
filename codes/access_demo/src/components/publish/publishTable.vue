<template>
    <div class="stats-table table-responsive">
        <dateSearch/>
        <!--        <table class="table table-striped">-->
        <div class="title">
            <table class="table table-hover">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>日期</th>
                    <th>接收</th>
                    <th>已发布</th>
                </tr>
                </thead>
            </table>
        </div>
        <div class="scrollable">
            <table class="table table-hover">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                </tbody>
            </table>
        </div>

        <!--页脚-->
        <foo/>
    </div>
</template>

<script>
    import dateSearch from "../common/dateSearch.vue"
    import foo from "../common/foo.vue"

    export default {
        name: "accessStats",
        components: {
            dateSearch,
            foo
        }
    }
</script>

<style scoped>
    .stats-table {
        width: 100%;
        height: calc(100% - 68px); /* 占满100% - 标题高度 */

        position: relative;
    }
    .stats-table div table {
        margin: 0;
    }

    .stats-table div.title .table th {
        vertical-align: middle;
    }

    /* div.title 处理滚动条*/
    .stats-table div.title {
        width: 100%;
        padding-right: 17px;
    }

    /*滚动条*/
    .stats-table div.scrollable {
        overflow-y: scroll;
        max-height: calc(100% - 221px);
        /*background-color: skyblue;*/
    }

    .stats-table div.title .table thead th {
    }

    .stats-table div.scrollable .table tbody {
    }

    .stats-table div.scrollable .table tbody td {
        vertical-align: middle;
    }

    .stats-table div.scrollable tbody tr:first-child td {
        border-top: none;
        /*background-color: red;*/
    }
    .stats-table div.scrollable tbody tr:last-child td {
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
    }

    /*设定表格宽度比例*/
    colgroup col:nth-child(1) {
        width: 8%;
    }

    colgroup col:nth-child(2) {
        width: 10%;
    }

    colgroup col:nth-child(3) {
        width: 41%;
    }

    colgroup col:nth-child(4) {
        width: 41%;
    }

    /* 日志居中 */
    .stats-table div.title thead tr th:nth-child(1),
    .stats-table div.title thead tr th:nth-child(2),
    .stats-table div.title thead tr th:nth-child(3),
    .stats-table div.title thead tr th:nth-child(4),
    .stats-table div.scrollable tbody tr td:nth-child(1),
    .stats-table div.scrollable tbody tr td:nth-child(2),
    .stats-table div.scrollable tbody tr td:nth-child(3),
    .stats-table div.scrollable tbody tr td:nth-child(4) {
        text-align: center;
    }
</style>
