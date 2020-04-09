<template>
    <div class="heroes">
        <appnav></appnav>
        <div class="container-fluid">
            <div class="row">
                <appslider></appslider>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <!-- <AppList></AppList> -->
                    <!--
<router-view></router-view> 组件标签是给路由看的，默认啥都没有
它不是固定的，它标识路由出口标记
当路由匹配到 path xxx 的时候，会将 router-view 替换到我们在路由表中配置好的组件
-->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import appnav from "../components/common/appnav"
    import appslider from "../components/common/appslider"

    export default {
        name: "heroes",
        components: {
            appnav,
            appslider
        }
    }
</script>


<style scoped>

</style>