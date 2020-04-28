<template>
    <div class="date-search">
        <div class="search-left">
            <label><span>开始日期:</span><input v-model="startDate" class="date form-control" type="date"></label>
            <label><input class="query btn btn-info" type="button" value="查询" @click="dateSearch(startDate)"></label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "date-search",
        data() {
            return {
                startDate: ""
            }
        },
        methods: {
            // 自定义事件日期查询
            dateSearch(startDate) {
                startDate = startDate.trim();
                //
                this.$emit("dateSearch", startDate)
            }
        }
    }
</script>

<style scoped>
    .date-search {
        width: 100%;
        height: 42px;
        line-height: 42px;
        margin-bottom: 20px;
    }

    /*左边*/
    .date-search .search-left {
        float: left;
        color: #666666;
    }

    .date-search .search-left span {
        display: inline-block;
        width: 85px;
        height: 42px;
        font-size: 16px;
        font-weight: bolder;
        margin-left: 10px;
    }

    .date-search .search-left label,
    .date-search .search-right label {
        margin: 0;
    }

    .date-search .date {
        display: inline-block;
        width: 180px;
        height: 37px;
    }

    .date-search .search-left .query{
        margin-left: 9px;
        background-color: #6c757d;
        border: 1px solid #6c757d;
    }


    /*右边*/
    /*.search .search-right {*/
    /*    float: right;*/
    /*    width: 500px;*/
    /*    height: 42px;*/
    /*    position: relative;*/
    /*}*/

    /*.search .search-right span {*/
    /*    display: inline-block;*/
    /*    width: 85px;*/
    /*    height: 42px;*/
    /*    font-size: 16px;*/
    /*    font-weight: bolder;*/
    /*    margin-left: 10px;*/
    /*}*/

    /*.search .search-right .content {*/
    /*    width: 300px;*/
    /*    height: 37px;*/
    /*    border: 1px solid #ced4da;*/
    /*    border-radius: 0.25rem;*/
    /*    padding-left: 10px;*/
    /*    color: #666666;*/
    /*}*/
    /*.search .search-right .content:focus {*/
    /*    outline: none;*/
    /*}*/

    /*.search .search-right img {*/
    /*    width: 26px;*/
    /*    height: 26px;*/
    /*    margin-right: 3px;*/
    /*    position: absolute;*/
    /*    right: 110px;*/
    /*    top: 8px;*/
    /*}*/
</style>
