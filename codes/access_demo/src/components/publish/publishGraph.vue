<template>
    <div class="publish-graph">
<!--        <h4>publishGraph</h4>-->
        <line-chart />
    </div>
</template>

<script>
    import lineChart from "./lineChart"
    export default {
        name: "accessGraph",
        components: {
            lineChart
        }
    }
</script>

<style scoped>
    .publish-graph {
        width: 90%;
        height: 80%;
        border-radius: 15px;
        background: #212733;
        box-shadow: 0 2px 15px rgba(25, 25, 25, 0.27);
        margin: 82px 5% 0;
    }
</style>
