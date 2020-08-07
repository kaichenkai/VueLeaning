<script>
    import {Line} from 'vue-chartjs'

    export default {
        name: "lineChart",
        extends: Line,
        props: {
            startDate: {type: String, required: false},
            pageSize: {type: Number, required: false}
        },
        data() {
            return {
                accessReceiveLine: null,
                accessSuccessLine: null,
            }
        },
        mounted() {
            this.drawLine(this.startDate, this.pageSize);
        },
        methods: {
            async drawLine(startDate="", pageSize=0) {
                let params = {};
                if (startDate) {
                    params["startDate"] = startDate
                }
                if (!(pageSize === 0)) {
                    params["pageSize"] = pageSize
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
                    "writeSuccessList": [],
                    "dateList": []
                };
                //
                let {writeSuccessList, dateList} = tempAccessStatsObj;
                data.statsList.forEach((item) => {
                    writeSuccessList.push(item.writeSuccessTotal);
                    dateList.push(item.date)
                });

                // 画图
                this.accessSuccessLine = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

                this.accessSuccessLine.addColorStop(0, 'rgba(60, 179, 113, 0.9)')
                this.accessSuccessLine.addColorStop(0.5, 'rgba(60, 179, 113, 0.25)');
                this.accessSuccessLine.addColorStop(1, 'rgba(60, 179, 113, 0)');

                this.renderChart({
                    // labels: ['2020-04-16', '2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21', '2020-04-22', '2020-04-23', '2020-04-24', '2020-04-25'],
                    labels: tempAccessStatsObj.dateList,
                    datasets: [
                        {
                            label: 'write-success',
                            // backgroundColor: 'skyblue',
                            borderColor: 'rgb(60,179,113)',
                            pointBackgroundColor: 'white',
                            pointBorderColor: 'white',
                            borderWidth: 1,
                            backgroundColor: this.accessSuccessLine,
                            // data: [60, 55, 32, 10, 2, 12, 53, 200, 300, 100]
                            data: tempAccessStatsObj.writeSuccessList
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
                this.drawLine(newStartDate, this.pageSize);
            },
            pageSize(newPageSize) {
                this.drawLine(this.startDate, newPageSize);
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
