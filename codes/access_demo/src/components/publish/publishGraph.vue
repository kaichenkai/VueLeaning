<template>
    <div class="publish-graph">
<!--        <h4>publishGraph</h4>-->
        <div class="date-search">
            <date-search ref="search" />
        </div>

        <div class="line-chart">
            <line-chart :startDate="startDate" :pageSize="pageSize" ref="chart" />
        </div>

        <div class="week-month btn-group">
            <button ref="week" type="button" class="btn btn-sm btn-outline-secondary" @click="byWeek()">周</button>
            <button ref="month" type="button" class="btn btn-sm btn-outline-secondary select" @click="byMonth()">月</button>
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
                pageSize: 30
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
            },

            // 按周
            byWeek() {
                this.$refs.month.classList.remove("select");
                this.$refs.week.classList.add("select");
                this.pageSize = 7;
            },

            // 按月
            byMonth() {
                this.$refs.week.classList.remove("select");
                this.$refs.month.classList.add("select");
                this.pageSize = 30;
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

    .publish-graph .week-month {
        display: block;

        height: calc(20% - 82px);
        margin: 20px auto 0 !important;
        text-align: center !important;
    }

   .publish-graph .week-month .btn {
       display: inline-block;
       width: 50px;
       height: 30px;
       font-weight: bolder;

       /*取消伸缩布局*/
       flex: none;
   }

   .publish-graph .week-month .btn.select {
       background-color: #6c757d;
       color: #fff;
   }

   .publish-graph .week-month .btn:focus {
       background-color: #6c757d;
       color: #fff;
   }
</style>
