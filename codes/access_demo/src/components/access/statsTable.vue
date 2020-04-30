<template>
    <div class="stats-table table-responsive">
        <date-search ref="search"/>
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
                    <th>已接入</th>
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
                <tr v-for="(item, index) in accessStatsObj.statsList" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.accessReceiveTotal }}</td>
                    <td>{{ item.accessSuccessTotal }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <!--暂无数据-->
        <noData v-if="isShow"/>

        <!--页脚-->
        <foo ref="foo" :currentPage="currentPage" :total="accessStatsObj.total" :totalPage="accessStatsObj.totalPage"/>
    </div>
</template>

<script>
    import dateSearch from "../common/dateSearch.vue"
    import noData from "../common/noData.vue"
    import foo from "../common/foo.vue"

    export default {
        name: "accessTable",
        components: {
            dateSearch,
            noData,
            foo
        },
        data() {
            return {
                currentPage: 1,
                accessStatsObj: {},
                isShow: false
            }
        },
        mounted() {
            this.getAccessStats();

            // 监听子组件时间查询事件
            this.$refs.search.$on("dateSearch", this.dateSearch);
            // 监听子组件分页查询事件
            this.$refs.foo.$on("changePage", this.changePage)
        },

        methods: {
            async getAccessStats(startDate="", currentPage=1) {
                // 清除屏幕数据, 状态重置
                this.accessStatsObj = {};
                this.isShow = false;
                //
                let params = {};
                if (startDate) {
                    // 根据日期查询只有单页数据
                    this.currentPage = 1;
                    params = {startDate: startDate}
                } else {
                    params = {currentPage: currentPage};
                }
                const res = await this._services.getAccessStats(params);
                let {code, data} = res;
                // code 校验
                if (parseInt(code, 10) !== 200) {
                    // this.tools.message(res.message);
                    return;
                }
                // data 校验
                if (data.statsList.length === 0) {
                    // console.log(data.statsList);
                    this.isShow = true;
                    return
                }
                //
                this.accessStatsObj = data;
            },

            // 根据日期查询
            dateSearch(newStartDate) {
                // this.getAccessStats({startDate=newStartDate});
                this.getAccessStats(newStartDate, this.currentPage);
            },
            // 页码改变
            changePage(newPage) {
                // 改变当前页
                this.currentPage = newPage;
                // 请求数据
                this.getAccessStats("", newPage);
            }
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
