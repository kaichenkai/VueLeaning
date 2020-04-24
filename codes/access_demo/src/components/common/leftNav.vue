<template>
    <div class="left-nav">
        <ul class="nav nav-sidebar">
<!--            <li><a href="#">接入统计</a></li>-->
<!--            <li><a href="#">发布统计</a></li>-->
<!--            <li><a href="#">日志</a></li>-->
            <router-link tag="li" :to="{name: 'access-stats'}">
                <a>接入统计</a>
            </router-link>
            <router-link tag="li" :to="{name: 'publish-stats'}">
                <a>发布统计</a>
            </router-link>
            <router-link tag="li" :to="{name: 'log'}">
                <a>日志</a>
            </router-link>
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
        background-color:  #e6e6e6;
    }

    .left-nav ul li.active {
        background-color: #0064C8;
    }
    .left-nav ul li.active a {
        color: #ffffff;
        background-color: #0064C8;
    }

    /*.left-nav ul li:hover {*/
    /*    background-color: #0064C8;*/
    /*}*/
    /*.left-nav ul li:hover a{*/
    /*    color: #ffffff;*/
    /*}*/

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
</style>