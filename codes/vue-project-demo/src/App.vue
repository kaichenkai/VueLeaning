<template>
    <div>
        <router-link :to="{name:'ShoppingCart'}">to test</router-link>
        <router-view></router-view>
    </div>

<!--    <div id="app">-->
<!--        <CustomDirective />-->
<!--    </div>-->
</template>


<script>
    // 引入组件
    // import CustomDirective from "./components/框架基础/01_自定义指令_获取焦点/CustomDirective"

    export default {
        name: 'App',
        data() {
            return {
            }
        }
    }
</script>


<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
