<template>
    <div class="stats-log table-responsive">
        <content-search ref="search" />
        <div class="title">
            <table class="table table-hover">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>日期</th>
                    <th class="sub-type">
                        <div class="btn-group">
                            <button ref="logType" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                failed
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#" @click.prevent="changeLogType(2)">success</a>
                                <a class="dropdown-item" href="#" @click.prevent="changeLogType(-5)">failed</a>
                                <!--                            <div class="dropdown-divider"></div>-->
                            </div>
                        </div>
                    </th>
                    <th>内容</th>
                </tr>
                </thead>
            </table>
        </div>
        <!--scroll-->
        <div class="scrollable">
            <table class="table table-hover">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <tbody>
                <tr v-for="(item, index) in logsObj.logList" :key="index">
                    <td>{{ index + 1}}</td>
                    <td>{{ item.createTime }}</td>
                    <td>{{ item.typeDescribe }}</td>
                    <td>{{ item.content }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <!--暂无数据-->
        <noData v-if="isShow"/>

        <!--页脚-->
        <foo ref="foo" :currentPage="currentPage" :total="logsObj.total" :totalPage="logsObj.totalPage" />
    </div>
    <!--        <table class="table table-striped">-->
</template>

<script>
    import contentSearch from "../common/contentSearch.vue"
    import noData from "../common/noData.vue"
    import foo from "../common/foo.vue"

    export default {
        name: "accessLog",
        components: {
            contentSearch,
            noData,
            foo
        },
        data() {
            return {
                currentPage: 1,
                logsObj: {},
                isShow: false,
                logType: -5   // 2 发布完成  -5 发布错误
            }
        },
        mounted(){
            this.getLogList();

            // 监听子组件时间查询事件
            this.$refs.search.$on("dateSearch", this.dateSearch);
            // 监听子组件内容查询事件
            this.$refs.search.$on("contentSearch", this.contentSearch);
            // 监听子组件分页查询事件
            this.$refs.foo.$on("changePage", this.changePage);
        },

        methods: {
            async getLogList(startDate="", content="", currentPage=1) {
                // 清除屏幕数据, 状态重置
                this.logsObj = {};
                this.isShow = false;
                // 改变当前页
                this.currentPage = currentPage;
                //
                let params = {};
                if (startDate) {
                    // 根据日期查询只查单页数据
                    this.currentPage = currentPage; // 改变当前页
                    params = {startDate: startDate, logType: this.logType}
                } else if (content) {
                    // 根据搜索内容查询
                    this.currentPage = currentPage; // 改变当前页
                    params = {content: content, logType: this.logType}
                } else {
                    params = {currentPage: currentPage, logType: this.logType};
                }
                const res = await this._services.getAccessLogs(params);
                let {code, data} = res;
                // code 校验
                if (parseInt(code, 10) !== 200) {
                    // this.tools.message(res.message);
                    return;
                }
                // data 校验
                if (data.logList.length === 0) {
                    this.isShow = true;
                }
                //
                this.logsObj = data;
            },

            // 根据日期查询
            dateSearch(newStartDate) {
                this.getLogList(newStartDate, "");
            },

            // 根据内容查询
            contentSearch(content) {
                this.getLogList("", content)
            },

            // 页码改变
            changePage(newPage) {
                // 请求数据
                this.getLogList("", "", newPage);
            },

            // 日志类型改变
            changeLogType(logType) {
                // console.log(logType);
                if (logType === 2) {
                    // console.log(this.$refs.logType.textContent);
                    this.$refs.logType.textContent = "success";
                } else if (logType === -5) {
                    this.$refs.logType.textContent = "failed";
                }
                this.logType = logType;
                // 重新请求数据
                this.getLogList();
            }
        }
    }
</script>

<style scoped>
    .stats-log {
        width: 100%;
        height: calc(100% - 68px); /* 占满100% - 标题高度 */

        position: relative;
    }

    .stats-log div table {
        margin: 0;
    }

    .stats-log div.title .table th {
        height: 50px;
        padding: 0 12px;
        vertical-align: middle;
    }

    /*子选项*/
    .access-log div.title .table thead th.sub-type {
        padding: 0 12px;
        vertical-align: middle;
    }

    /*修改bootstrap 的样式*/
    .stats-log div.title .table thead th .btn-group {
        height: 36px;
    }

    .stats-log div.title .table thead th .btn-group .dropdown-menu {
        /*width: 90px !important; !* width 改不了*!*/
        /*background-color: red;*/
    }

    .stats-log div.title .table thead th .btn-group .dropdown-menu a {
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
        /*background-color: red;*/
    }

    .stats-log div.title .table thead th .btn-group .dropdown-menu a:hover {
        background-color: #6c757d;
        color: #ffffff;
    }

    /* div.title 处理滚动条*/
    .stats-log div.title {
        width: 100%;
        padding-right: 17px;
    }

    /*滚动条*/
    .stats-log div.scrollable {
        overflow-y: scroll;
        max-height: calc(100% - 221px);
    }

    .stats-log div.scrollable .table tbody {
    }
    .stats-log div.scrollable .table tbody td {
        vertical-align: middle;
    }

    .stats-log div.scrollable .table tbody tr:first-child td {
        border-top: none;
        /*background-color: red;*/
    }

    .stats-log div.scrollable .table tbody tr:last-child td {
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
    }

    /*设定表格宽度比例*/
    colgroup col:nth-child(1) {
        width: 8%;
    }
    colgroup col:nth-child(2) {
        width: 12%;
    }
    colgroup col:nth-child(3) {
        width: 12%;
    }
    colgroup col:nth-child(4) {
        width: 68%;
    }

    /* 日志居中 */
    .stats-log div.title .table thead tr th:nth-child(1),
    .stats-log div.title .table thead tr th:nth-child(2),
    .stats-log div.title .table thead tr th:nth-child(3),
    .stats-log div.scrollable .table tbody tr td:nth-child(1),
    .stats-log div.scrollable .table tbody tr td:nth-child(2),
    .stats-log div.scrollable .table tbody tr td:nth-child(3) {
        text-align: center;
    }

</style>
