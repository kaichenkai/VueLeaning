<template>
    <div class="heroes">
<!--        <app-nav />-->
        <appNav />
        <!--bootstrap 响应式布局-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-2 sidebar">
<!--                    侧边栏-->
                    <appSlider />
                </div>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <list />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import appNav from "../components/common/appNav"
    import appSlider from "../components/common/appSlider"
    // import bar from "../components/bar/bar"
    import list from "../components/list/list"

    export default {
        name: "heroes",
        components: {
            appNav,
            appSlider,
            list
        }
    }
</script>


<style scoped>

</style>