<template>
    <div class="list table-responsive">
        <h3 class="sub-header">接入统计</h3>
        <search />
<!--        <table class="table table-striped">-->
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>日期</th>
                    <th>接收</th>
                    <th>已接入</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
                   <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>        <tr>
                    <td>2020-04-21</td>
                    <td>100000</td>
                    <td>66666</td>
                </tr>
            </tbody>
        </table>

        <!--页脚-->
        <foo />
    </div>
</template>

<script>
    import search from "../common/search.vue"
    import foo from "../common/foo.vue"
    export default {
        name: "accessStats",
        components: {
            search,
            foo
        }
    }
</script>

<style scoped>
    .list .sub-header {
        text-align: center;
        margin: 20px 0;
    }

    .list .table thead {
    }
    .list .table thead th {
    }
    .list .table tbody {
    }

    .list .table tbody tr:last-child td{
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
    }

</style>