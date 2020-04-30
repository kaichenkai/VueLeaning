<template>
    <div class="publish-graph">
<!--        <h4>publishGraph</h4>-->
        <div class="date-search">
            <date-search ref="search" />
        </div>

        <div class="line-chart">
            <line-chart :startDate="startDate" ref="chart" />
        </div>
    </div>
</template>

<script>
    import lineChart from "./lineChart"
    import dateSearch from "../common/dateSearch"
    // import noData from "../common/noData"

    export default {
        name: "accessGraph",
        components: {
            lineChart,
            dateSearch
        },
        data() {
            return {
                startDate: "",
            }
        },

        mounted() {
            // 监听时间查询事件
            this.$refs.search.$on("dateSearch", this.dateSearch);
            // 监听有无图表数据
            // this.$refs.chart.$on("noData", this.noData)
        },
        methods: {
            dateSearch(startDate){
                this.startDate = startDate
            }
        }
    }
</script>

<style scoped>
    .publish-graph {
        width: 100%;
        height: calc(100% - 68px); /* 占满100% - 标题高度 */

        position: relative;
    }

    .publish-graph .date-search {
        width: 100%;
        height: 42px;
        /*margin: 0 2% 20px;*/
        margin: 0 0 20px;
    }

    .publish-graph .line-chart {
        width: 100%;
        height: 80%;
        border-radius: 15px;
        background: #212733;
        box-shadow: 0 2px 15px rgba(25, 25, 25, 0.27);
        /*margin: 0 10px;*/
    }
</style>
