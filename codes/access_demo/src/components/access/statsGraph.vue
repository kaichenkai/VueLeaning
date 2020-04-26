<template>
    <div class="accessGraph">
<!--        <h4>accessGraph</h4>-->
        <chart-line />
    </div>
</template>

<script>
    import chartLine from "./chartLine"
    export default {
        name: "accessGraph",
        components: {
            chartLine
        }
    }
</script>

<style scoped>
    .accessGraph {
        /*background-color: skyblue;*/
    }

    .accessGraph h4 {
        margin-left: 10px;
    }
</style>
