<template>
    <div class="noData">
        <span class="icon-uniE901"></span>
        <p>暂无数据</p>
    </div>
</template>

<script>
    export default {
        name: "noData"
    }
</script>

<style scoped>
    .noData{
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 39px);
        /*background-color: skyblue;*/
    }
    .noData span {
        font-size: 66px;
        color: #999999;
    }
    .noData p {
        margin: 5px 0;
        text-align: center;
        font-size: 14px;
        color: #999999;
    }
</style>