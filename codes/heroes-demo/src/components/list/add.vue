<template>
    <div class="add">
        <h2 class="sub-header">Add Hero</h2>
        <form action="">
            <div class=" form-group">
                <label for="name">姓名</label>
                <input type="text" class="form-control" id="name" placeholder="请输入姓名" v-model="heroes.name">
            </div>
            <div class="form-group">
                <label for="sex">性别</label>
                <input type="text" class="form-control" id="sex" placeholder="请输入性别" v-model="heroes.sex">
            </div>
            <div class="form-group">
                <label for="age">年龄</label>
                <input type="number" class="form-control" id="age" placeholder="请输入年龄" v-model="heroes.age">
            </div>
            <button type="submit" class="btn btn-success" @click="addHeroes()">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "add",
        data(){
            return {
                heroes: {
                    name: "",
                    sex: "",
                    age: ""
                }
            }
        },
        methods: {
            addHeroes() {
                if (!this.heroes.name) {
                    alert("请输入姓名")
                }
                // axios.post("http://localhost:3000/heroes",{name: this.heroes.name, sex:this.heroes.sex, age: this.heroes.age})
                axios.post("http://localhost:3000/heroes",this.heroes)
                    .then((response) => {
                        let {status} = response;
                        if (status === 201) {
                            alert("添加成功")
                        }
                        this.heroes = {
                            name: "",
                            sex: "",
                            age: ""
                        };

                        this.$router.push({name: "list"})
                    }).then((error) => {
                        console(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>