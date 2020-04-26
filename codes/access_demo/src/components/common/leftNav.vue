<template>
    <div class="left-nav">
        <ul class="nav nav-sidebar">
            <router-link tag="li" :to="{name: 'access'}">
                <span class="icon-uniE900"></span><a>数据接入</a>
            </router-link>
            <router-link tag="li" :to="{name: 'publish'}">
                <span class="icon-uniE900"></span><a>数据发布</a>
            </router-link>
<!--            <router-link tag="li" :to="{name: 'accessLog'}">-->
<!--                <a>日志</a>-->
<!--            </router-link>-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "leftNav"
    }
</script>

<style scoped>
    .left-nav {
        /*margin: 20px;*/
    }

    .left-nav ul {
        list-style: none;
    }
    .left-nav ul li {
        width: 100%;
        height: 46px;
        line-height: 46px;
        text-align: center;
        /*background-color:  #e6e6e6;*/
    }

    /*全局激活样式应用*/
    .left-nav ul li.router-link-active {
        background-color: #0064C8;
    }
    .left-nav ul li.router-link-active a,
    .left-nav ul li.router-link-active .icon-uniE900{
        color: #ffffff;
        background-color: #0064C8;
    }

    .left-nav ul li a {
        display: inline-block;
        width: 120px;
        font-size: 23px;
        text-align: left;
        color: #0064C8;
        text-decoration: none;
    }
    .left-nav ul li a:hover {

    }

    /*调整字体图标*/
    .left-nav ul li .icon-uniE900 {
        font-size: 18px;
        margin: 0 5px;
        color: #0064C8;
    }
</style>