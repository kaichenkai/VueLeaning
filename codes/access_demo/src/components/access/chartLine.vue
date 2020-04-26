<script>
    import {Line} from 'vue-chartjs'

    export default {
        name: "Chart",
        extends: Line,
        mounted() {
            this.renderChart({
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: 'skyblue',
                        data: [40, 30, 50, 20, 60, 30, 20]
                    },
                    {
                        label: 'Data Two',
                        backgroundColor: 'red',
                        data: [40, 20, 50, 10, 50, 20, 10]
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    }
</script>

<style scoped>

</style>
