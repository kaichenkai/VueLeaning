<template>
        <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
            <!--                    <router-link tag="li" to="/heroes">-->
            <!--                        <a>英雄列表</a>-->
            <!--                    </router-link>-->
            <!--                    <router-link tag="li" to="/bar">-->
            <!--                        <a>武器列表</a>-->
            <!--                    </router-link>-->
            <!--                    <router-link tag="li" to="/foo">-->
            <!--                        <a>装备列表</a>-->
            <!--                    </router-link>-->
        </ul>
</template>

<script>
    export default {
        name: "appSlider"
    }
</script>

<style scoped>
    .nav {
        list-style: none;
    }

    .nav li a {
        display: inline-block;
        width: 200px;
        height: 56px;
        line-height: 56px;
        color: purple;
        text-decoration: none;
    }

    .table {
        width: 100%;
        height: 80%;
        text-align: center;
    }
</style>