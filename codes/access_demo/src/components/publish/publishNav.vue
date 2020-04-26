<template>
    <div class="publishNav clearfix">
        <h4 class="sub-header">
            <router-link tag="a" :to="{name: 'publish-graph'}">图形</router-link>
            <span>/</span>
            <router-link tag="a" :to="{name: 'publish-table'}">表格</router-link>
            <span>/</span>
            <router-link tag="a" :to="{name: 'publish-log'}">日志</router-link>
        </h4>
        <!--视图出口-->
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "publishNav"
    }
</script>

<style scoped>
    .publishNav {
        width: 100%;
        height: 100%;
    }

    .publishNav .sub-header {
        text-align: center;
        margin: 20px 0;
    }

    .publishNav .sub-header span,
    .publishNav .sub-header a {
        display: inline-block;
        color: #666666;
    }
    .publishNav .sub-header a {
        margin: 0 10px;
        text-decoration: none;
    }
    .publishNav .sub-header a.active {
        color: #333333;
        font-weight: bolder;
        /*background-color: #0064C8;*/
    }

    /*解决高度塌陷问题*/
    .clearfix:before,
    .clearfix:after {
        content: "";  /*填充内容 默认 "" */
        display: table;  /*标签类型*/
        clear: both;
    }
</style>