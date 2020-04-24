<template>
    <div class="search">
        <div class="select-date">
            <label><span>日期:</span><input class="query-date form-control" type="date"></label>
<!--            <label><input class="query-btn btn btn-info" type="button" value="查询"></label>-->
        </div>
        <div class="select-type btn-group">
            <span class="statement">类型:</span>
            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                接入
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">接入</a>
                <a class="dropdown-item" href="#">发布</a>
                <!--<div class="dropdown-divider"></div>-->
            </div>
        </div>

        <div class="query-btn">
            <label><input class="btn btn-info" type="button" value="查询"></label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    label {
        margin: 0;
    }

    .search {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin: 20px 0;
    }

    /*日期*/
    .search .select-date {
        float: left;
    }

    .search .select-date span {
        display: inline-block;
        width: 50px;
        height: 40px;
        font-size: 16px;
        font-weight: bolder;
        margin-left: 10px;
    }

    .search .select-date .query-date {
        display: inline-block;
        width: 180px;
        height: 40px;
    }


    /*类型*/
    .search .select-type {
         float: left;
    }
    .search .select-type .statement {
        display: inline-block;
        width: 50px;
        margin-left:20px;
        font-weight: bolder;
    }
    .search .select-type .btn-info {
        border-radius: 0.25rem;
        background-color: #ffffff;
        color: #212529;
        border: 1px solid #ced4da;
    }
    .search .select-type .dropdown-menu{
        /*width: 90px !important;  !* width 改不了*!*/
    }
    .search .select-type .dropdown-menu a {
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
    }
    .search .select-type .dropdown-menu a:hover {
        background-color: #0064C8;
        color: #ffffff;
    }

      /*查询*/
    .search .query-btn {
       float: left;
        height: 40px;
        margin-left: 20px;
    }
    .search .query-btn input {
        background-color: #0064C8;
        border: 1px solid #0064C8;
        /*vertical-align: top;*/
    }

</style>