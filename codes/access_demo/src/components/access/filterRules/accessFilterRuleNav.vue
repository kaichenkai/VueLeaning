<template>
    <div class="accessNav clearfix">
        <h4 class="sub-header">
            <router-link tag="a" :to="{name: 'rule-list'}">过滤规则列表</router-link>
<!--            <span>/</span>-->
<!--            <router-link tag="a" :to="{name: 'rule-add'}">添加</router-link>-->
        </h4>
        <!--视图出口-->
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "accessFilterRuleNav"
    }
</script>

<style scoped>
    .accessNav {
        width: 100%;
        height: 100%;

        position: relative;
    }

    .accessNav .sub-header {
        text-align: center;
        margin: 20px 0;
    }

    .accessNav .sub-header span,
    .accessNav .sub-header a {
        display: inline-block;
        color: #666666;
    }
    .accessNav .sub-header a {
        margin: 0 10px;
        text-decoration: none;
    }
    .accessNav .sub-header a.active {
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
