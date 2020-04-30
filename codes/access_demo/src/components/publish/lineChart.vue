<script>
    import {Line} from 'vue-chartjs'

    export default {
        name: "lineChart",
        extends: Line,
        props: {
            startDate: {type: String, required: false}
        },
        data() {
            return {
                publishReceiveLine: null,
                publishSuccessLine: null
            }
        },
        mounted() {
            this.drawLine();
        },
         methods: {
            async drawLine(startDate="") {
                let params = {};
                if (startDate) {
                    params = {startDate: startDate}
                } else {
                    params = {currentDate: 1};
                }
                const res = await this._services.getAccessStats(params);
                let { code, data } = res;
                // code 校验
                if (parseInt(code, 10) !== 200) {
                    // this.tools.message(res.message);
                    return;
                }
                // data 校验
                // if (data.statsList.length === 0) {
                //     // console.log(data.statsList);
                //     // 告诉父组件没有数据, 进行相应展示
                //     this.$emit("noData");
                //     return
                // }

                // 图表顺序排列
                data.statsList.sort((p1, p2) => {
                    return p1.id - p2.id
                });

                // 准备数据容器
                let tempAccessStatsObj = {
                    "receiveList": [],
                    "successList": [],
                    "dateList": []
                };
                //
                let {receiveList, successList, dateList} = tempAccessStatsObj;
                data.statsList.forEach((item) => {
                    receiveList.push(item.publishReceiveTotal);
                    successList.push(item.publishSuccessTotal);
                    dateList.push(item.date)
                });

                // 画图
                this.publishReceiveLine = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
                this.publishSuccessLine = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

                this.publishReceiveLine.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
                this.publishReceiveLine.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
                this.publishReceiveLine.addColorStop(1, 'rgba(0, 231, 255, 0)');

                this.publishSuccessLine.addColorStop(0, 'rgba(0, 0, 255, 0.9)');
                this.publishSuccessLine.addColorStop(0.5, 'rgba(0, 0, 255, 0.25)');
                this.publishSuccessLine.addColorStop(1, 'rgba(0, 0, 255, 0)');

                this.renderChart({
                    // labels: ['2020-04-16', '2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21', '2020-04-22', '2020-04-23', '2020-04-24', '2020-04-25'],
                    labels: tempAccessStatsObj.dateList,
                    datasets: [
                        {
                            label: 'publish-receive',
                            borderColor: 'rgba(0, 231, 255)',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: 'white',
                            backgroundColor: this.publishReceiveLine,
                            // data: [40, 39, 10, 40, 39, 400, 40, 200, 200, 200]
                            data: tempAccessStatsObj.receiveList
                        }, {
                            label: 'publish-success',
                            // backgroundColor: 'skyblue',
                            borderColor: 'rgb(0, 0, 255)',
                            pointBackgroundColor: 'white',
                            pointBorderColor: 'white',
                            borderWidth: 1,
                            backgroundColor: this.publishSuccessLine,
                            // data: [60, 55, 32, 10, 2, 12, 53, 200, 300, 100]
                            data: tempAccessStatsObj.successList
                        }
                    ]
                }, {
                    responsive: true,  /*响应式*/
                    maintainAspectRatio: false  /*保持长宽比*/
                })
            }
        },

        watch: {
            startDate(newStartDate) {
                this.drawLine(newStartDate);
            }
        }
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
    }
</style>
