<script>
    import {Line} from 'vue-chartjs'

    export default {
        name: "lineChart",
        extends: Line,
        data() {
            return {
                publishReceive: null,
                publishSuccess: null
            }
        },
        mounted() {
            this.publishReceive = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
            this.publishSuccess = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

            this.publishReceive.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
            this.publishReceive.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
            this.publishReceive.addColorStop(1, 'rgba(0, 231, 255, 0)');

            this.publishSuccess.addColorStop(0, 'rgba(0, 0, 255, 0.9)')
            this.publishSuccess.addColorStop(0.5, 'rgba(0, 0, 255, 0.25)');
            this.publishSuccess.addColorStop(1, 'rgba(0, 0, 255, 0)');

            this.renderChart({
                labels: ['2020-04-16', '2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21', '2020-04-22', '2020-04-23', '2020-04-24', '2020-04-25'],
                datasets: [
                    {
                        label: 'publish-receive',
                        borderColor: 'rgba(250, 250, 210)',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: 'white',
                        backgroundColor: this.publishReceive,
                        data: [40, 39, 10, 40, 39, 400, 40, 200, 200, 200]
                    }, {
                        label: 'publish-success',
                        // backgroundColor: 'skyblue',
                        borderColor: 'rgb(0, 0, 255)',
                        pointBackgroundColor: 'white',
                        pointBorderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: this.publishSuccess,
                        data: [60, 55, 32, 10, 2, 12, 53, 200, 300, 100]
                    }
                ]
            }, {
                responsive: true,  /*响应式*/
                maintainAspectRatio: false  /*保持长宽比*/
            })
        }
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
    }
</style>
