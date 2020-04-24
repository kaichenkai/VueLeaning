<template>
    <div>
        <h2 class="sub-header">Hero List</h2>
        <a class="btn btn-success" @click="showAddVue()">Add</a>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>名称</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in list" :key="index">
                    <!--                    <td>1</td>-->
                    <!--                    <td>荀彧</td>-->
                    <!--                    <td>男</td>-->
                    <!--                    <td>26</td>-->
                    <!--                    <td><button>删除</button></td>-->
                    <td>{{index + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                    <td>{{item.age}}</td>
                    <td>
                        <button @click="showEditVue(item)">修改</button>
                    </td>
                    <td>
                        <button @click="delHero(item.id)">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    // import axios from "axios";

    export default {
        name: "list",
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                this.axios.get("/heroes")
                    .then((response) => {
                        const {status, data} = response;
                        if (status === 200) {
                            this.list = data;
                        }
                    }), ((error) => {
                    console.log(error)
                })
            },
            delHero(id) {
                if (confirm("确定删除吗?")) {
                    this.axios.delete("/heroes/" + id)
                        .then((response) => {
                            const {status, data} = response;
                            if (status === 200) {
                                alert("删除成功");
                                this.getData()
                            }
                        }), ((error) => {
                        console.log(error)
                    })
                }
            },
            showAddVue() {
                this.$router.push({name: "add"})
            },
            showEditVue(item) {
                // 由路由 传递数据
                this.$router.push({name: "edit", params: {id: item.id}})
            }
        }
    }
</script>

<style scoped>
    #list {
        width: 80%;
        height: 100%;
        float: left;
        margin: 10px 30px;
    }

    #list .table-responsive table {
        width: 100%;
        height: 100%;
        background-color: skyblue;
        text-align: left;
    }

    .sub-header {
        padding-bottom: 10px;
        border-bottom: 1px solid #eeeeee;
    }
</style>