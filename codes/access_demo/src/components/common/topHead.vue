<template>
    <div class="top-head clearfix">
        <a href="#" ><h3>AI预审接入服务</h3></a>
    </div>
</template>

<script>
    export default {
        name: "topHead",
        data() {
            return {}
        },
        methods: {
            showIndex(){
                this.$router.push({name: "access"})
            }
        }
    }
</script>

<style scoped>
    .top-head {
        /*固定定位*/
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/

        width: 100%;
        height: 66px;
        background-color: #373f41;
    }

    .top-head a {
        display: inline-block;
        text-decoration: none;
    }

    .top-head h3 {
        margin: 0;
        padding: 0 30px;
        line-height: 66px;
        color: #ffffff;
    }

    /*处理高度塌陷问题*/
    /*.clearfix:before,*/
    /*.clearfix:after {*/
    /*    content: "";*/
    /*    display: table;*/
    /*    clear: both;*/
    /*}*/
</style>
