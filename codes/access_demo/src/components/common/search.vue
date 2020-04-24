<template>
    <div class="search">
        <label><span>开始日期:</span><input class="query-date form-control" type="date"></label>
        <label><input class="query-btn btn btn-info" type="button" value="查询"></label>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    .search {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin: 20px 0;
    }
    .search span {
        display: inline-block;
        width: 85px;
        height: 40px;
        font-size: 16px;
        font-weight: bolder;
        margin-left: 10px;
    }
    .search label {
        margin: 0;
    }
    .search .query-date {
        display: inline-block;
        width: 180px;
        height: 40px;
    }

    .search .query-btn {
        margin-left: 9px;
        background-color: #0064C8;
        border: 1px solid #0064C8;
        /*    */
    }
    .search .query-btn {
        /*outline: none !important;*/
        /*background-color: red;*/
    }
    .search .query-btn.active {
        outline: none !important;
    }
</style>