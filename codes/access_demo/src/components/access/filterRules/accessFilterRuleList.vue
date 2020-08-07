<template>
    <div class="rule-list">
        <el-button type="primary" class="add-button" @click="dialogFormVisible = true">新增规则</el-button>
        <!--  -->
        <div class="title">
            <table class="table table-hover">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>厂商编码</th>
                    <th>违法类型</th>
                    <th>设备编号</th>
                    <th>设备类型</th>
                    <th>过滤日期范围</th>
                    <th>过滤时间范围</th>
                    <th>操作</th>
                </tr>
                </thead>
            </table>
        </div>
        <!--scroll-->
        <div class="scrollable">
            <table class="table table-hover">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <tbody>
                <!--                <tr v-for="(item, index) in logsObj.logList" :key="index">-->
                <!--                    <td>{{ index + 1}}</td>-->
                <!--                    <td>{{ item.createTime }}</td>-->
                <!--                    <td>{{ item.typeDescribe }}</td>-->
                <!--                    <td>{{ item.content }}</td>-->
                <!--                </tr>-->
                <tr>
                    <td>1</td>
                    <td>DH</td>
                    <td>0</td>
                    <td>0</td>
                    <td>01|卡口</td>
                    <td>2020-08-05 至 2020-09-05</td>
                    <td>10:10:10 至 12:00:00</td>
                    <td style="padding: 0;">
                        <el-button size="small">修改</el-button>
                        <el-button size="small" type="danger" class="button-common">删除</el-button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>DH</td>
                    <td>+2</td>
                    <td>+2</td>
                    <td>01|卡口</td>
                    <td>2020-08-05 至 2020-09-05</td>
                    <td>15:10:10 至 17:00:00</td>
                    <td style="padding: 0;">
                        <el-button size="small">修改</el-button>
                        <el-button size="small" type="danger" class="button-common">删除</el-button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>DH</td>
                    <td>+1</td>
                    <td>+144</td>
                    <td>02|电警</td>
                    <td>2020-08-05 至 2020-09-05</td>
                    <td>15:10:10 至 17:00:00</td>
                    <td style="padding: 0;">
                        <el-button size="small">修改</el-button>
                        <el-button size="small" type="danger" class="button-common">删除</el-button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <!--暂无数据-->
        <noData v-if="isShow"/>

        <!--页脚-->
        <foo ref="foo" :currentPage="currentPage" :total="logsObj.total" :totalPage="logsObj.totalPage"/>

        <!-- 新增过滤规则对话框-->
        <el-dialog title="新增过滤规则"
                   width="40%"
                   :center="true"
                   :modal-append-to-body="false"
                   :close-on-click-modal="false"
                   :visible.sync="dialogFormVisible">
            <el-form
                    :label-position="labelPosition"
                    :label-width="formLabelWidth"
                    :model="formData"
                    :rules="rules">
                <el-form-item label="厂商编码" prop="manufacturerCode">
                    <el-select v-model="formData.manufacturerCode" placeholder="请选择" class="form-item">
                        <el-option
                                v-for="item in manufacturerCodeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="违法类型代码" prop="illegalCode">
                    <el-select v-model="formData.illegalCodeList"
                               multiple
                               collapse-tags
                               filterable
                               placeholder="请选择" class="form-item">
                        <el-option
                                v-for="item in illegalCodeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设备编码" prop="deviceCode">
                    <el-select v-model="formData.deviceCodeList"
                               multiple
                               collapse-tags
                               filterable
                               placeholder="请选择" class="form-item">
                        <el-option
                                v-for="item in deviceCodeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设备类型代码" prop="deviceType">
                    <!-- collapse-tags-->
                    <el-select v-model="formData.deviceTypeList"
                               multiple
                               placeholder="请选择" class="form-item">
                        <el-option
                                v-for="item in deviceTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="过滤日期范围" prop="filterDateRange">
                    <el-date-picker v-model="formData.filterDateTimeRange"
                                    size="small"
                                    align="left"
                                    type="datetimerange"
                                    range-separator="-"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :clearable="true"
                                    format="yyyy-MM-dd HH:mm:ss"
                                    value-format="timestamp"
                                    :default-time="['00:00:00', '23:59:59']"
                                    :picker-options="pickerOptions"
                                    placeholder="请选择日期范围">
                    </el-date-picker>
                </el-form-item>
                <!--                <el-form-item label="过滤时间范围" prop="filterTimeRange">-->
                <!--                    <el-time-picker-->
                <!--                            is-range-->
                <!--                            v-model="formData.filterTimeRange"-->
                <!--                            range-separator="-"-->
                <!--                            start-placeholder="开始时间"-->
                <!--                            end-placeholder="结束时间"-->
                <!--                            placeholder="选择时间范围">-->
                <!--                    </el-time-picker>-->
                <!--                </el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import noData from "../../common/noData.vue"
    import foo from "../../common/foo.vue"

    export default {
        name: "accessFilterRuleList",
        components: {
            noData,
            foo
        },
        data() {
            return {
                currentPage: 1,
                logsObj: {},
                isShow: false,
                logType: -4,  // # 1 写入平台完成 -1缓存错误(mysql)  -2 读取错误 -3 下载错误 -4 写入平台错误

                //对话框相关
                dialogFormVisible: false,
                formLabelWidth: "100px",
                labelPosition: "right",

                //对话框表单
                //厂商代码
                manufacturerCodeOptions: [{
                    value: 'DH',
                    label: '大华'
                }, {
                    value: 'HK',
                    label: '海康'
                }, {
                    value: 'ZK',
                    label: '中科'
                }],
                //违法类型代码
                illegalCodeOptions: [{
                    value: '13010',
                    label: '13010|机动车逆向行驶的'
                }, {
                    value: '16250',
                    label: '16250|驾驶机动车违反道路交通信号灯通行的'
                }],
                //设备编码
                deviceCodeOptions: [{
                    value: '441802000000010041',
                    label: '441802000000010041'
                }, {
                    value: '441802000000010059',
                    label: '441802000000010059'
                }, {
                    value: '441802000000010060',
                    label: '441802000000010060'
                }],
                //设备类型
                deviceTypeOptions: [{
                    value: '0',
                    label: '卡口'
                }, {
                    value: '1',
                    label: '电警'
                }],
                formData: {
                    manufacturerCode: "",//厂商代码
                    illegalCodeList: [],//违法类型代码
                    deviceCodeList: [],//设备编码
                    deviceTypeList: [],//设备类型
                    //过滤日期时间范围
                    filterDateTimeRange: [],
                    //过滤时间范围
                    // filterTimeRange: [new Date(), new Date()]
                },

                //表单参数约束规则
                rules: {
                    manufacturerCode: [
                        {
                            required: true,
                            message: "请选择厂商编码",
                            trigger: "blur"//当 input 失去焦点时触发
                        }
                    ],
                    illegalCode: [
                        {
                            required: false,
                            message: "请选择违法类型代码",
                            trigger: "blur"
                        }
                    ],
                    // illegalCode: [
                    //     {
                    //         required: false,
                    //         message: "请输入违法编码",
                    //         trigger: "blur"
                    //     },
                    //     {
                    //         pattern: /^[A-Za-z0-9_]{1,20}$/,
                    //         message: "违法编码有误"
                    //     }
                    // ]
                    deviceCode: [
                        {
                            required: false,
                            message: "请选择设备编码",
                            trigger: "blur"
                        }
                    ],
                },

                //日期快捷方式
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
            }
        },
        mounted() {
            // this.getLogList();

            // 监听子组件时间查询事件
            // this.$refs.search.$on("dateSearch", this.dateSearch);
            // 监听子组件内容查询事件
            // this.$refs.search.$on("contentSearch", this.contentSearch);
            // 监听子组件分页查询事件
            this.$refs.foo.$on("changePage", this.changePage);
        },
        methods: {
            async getFilterRuleList() {
                // 清除屏幕数据, 状态重置
                this.logsObj = {};
                this.isShow = false;
                //
                let params = {};
                const res = await this._services.getAccessLogs(params);
                let {code, data} = res;
                // code 校验
                if (parseInt(code, 10) !== 200) {
                    // this.tools.message(res.message);
                    return;
                }
                // data 校验
                if (data.logList.length === 0) {
                    this.isShow = true;
                }
                //
                this.logsObj = data;
            },

            //增加过滤规则
            async addFilterRule() {
                // const res = await this._services.addFilterRule(this.formData);
                // const {}
            },

            // 根据日期查询
            dateSearch(newStartDate) {
                this.getLogList(newStartDate, "");
            },

            // 根据内容查询
            contentSearch(content) {
                this.getLogList("", content)
            },

            // 页码改变
            changePage(newPage) {
                // 请求数据
                this.getLogList("", "", newPage);
            },

            // 日志类型改变
            changeLogType(logType) {
                // console.log(logType);
                if (logType === 1) {
                    // console.log(this.$refs.logType.textContent);
                    this.$refs.logType.textContent = "success";
                } else if (logType === -4) {
                    this.$refs.logType.textContent = "failed";
                }
                this.logType = logType;
                // 重新请求数据
                this.getLogList();
            }
        }
    }
</script>

<style scoped lang="less">
    .rule-list {
        width: 100%;
        height: calc(100% - 68px); /* 占满100% - 标题高度 */

        .add-button {
            height: 42px;
            float: right;
            margin-bottom: 20px;
            margin-right: 20px;
            font-size: 16px;
        }

        .scrollable {

            .table {
                tbody {
                    tr {
                        td {

                        }
                    }
                }
            }
        }

        .el-dialog {
            .el-form {
                .form-item {
                    width: 560px;
                }
            }
        }
    }

    .rule-list div table {
        margin: 0;
    }

    .rule-list div.title {
    }

    .rule-list div.title .table th {
        height: 50px;
        padding: 0 12px;
        vertical-align: middle;
    }

    /* div.title 处理滚动条*/
    .rule-list div.title {
        width: 100%;
        padding-right: 7px;
    }

    /*滚动条*/
    .rule-list div.scrollable {
        overflow-y: scroll;
        max-height: calc(100% - 221px);
    }

    .rule-list div.scrollable .table tbody {
    }

    .rule-list div.scrollable .table tbody td {
        vertical-align: middle;
    }

    .rule-list div.scrollable .table tbody tr:first-child td {
        border-top: none;
        /*background-color: red;*/
    }

    .rule-list div.scrollable .table tbody tr:last-child td {
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
    }

    /*设定表格宽度比例*/
    colgroup col:nth-child(1) {
        width: 5%;
    }

    colgroup col:nth-child(2) {
        width: 10%;
    }

    colgroup col:nth-child(3) {
        width: 10%;
    }

    colgroup col:nth-child(4) {
        width: 10%;
    }

    colgroup col:nth-child(5) {
        width: 10%;
    }

    colgroup col:nth-child(6) {
        width: 20%;
    }

    colgroup col:nth-child(7) {
        width: 20%;
    }

    colgroup col:nth-child(8) {
        width: 15%;
    }

    /* 日志居中 */
    .rule-list div.title .table thead tr th:nth-child(1),
        /*.rule-list div.title .table thead tr th:nth-child(2),*/
        /*.rule-list div.title .table thead tr th:nth-child(3),*/
    .rule-list div.scrollable .table tbody tr td:nth-child(1)
        /*.rule-list div.scrollable .table tbody tr td:nth-child(2),*/
        /*.rule-list div.scrollable .table tbody tr td:nth-child(3) */ {
        text-align: center;
    }

</style>
