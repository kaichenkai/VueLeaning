<template>
    <div class="add">
        <h2 class="sub-header">Add Hero</h2>
        <form action="">
            <div class=" form-group">
                <label for="name">姓名</label>
                <input type="text" class="form-control" id="name" placeholder="请输入姓名" v-model="hero.name">
            </div>
            <div class="form-group">
                <label for="sex">性别</label>
                <input type="text" class="form-control" id="sex" placeholder="请输入性别" v-model="hero.sex">
            </div>
            <div class="form-group">
                <label for="age">年龄</label>
                <input type="number" class="form-control" id="age" placeholder="请输入年龄" v-model="hero.age">
            </div>
            <button type="submit" class="btn btn-success" @click="addHeroes()">Submit</button>
        </form>
    </div>
</template>

<script>
    // import axios from "axios";
    export default {
        name: "add",
        data(){
            return {
                hero: {
                    name: "",
                    sex: "",
                    age: ""
                }
            }
        },
        methods: {
            addHeroes() {
                if (!this.hero.name) {
                    alert("请输入姓名");
                    return
                }
                // this.axios.post("/heroes",{name: this.hero.name, sex:this.hero.sex, age: this.hero.age})
                this.axios.post("/heroes",this.hero)
                    .then((response) => {
                        let {status} = response;
                        if (status === 201) {
                            alert("添加成功")
                        }
                        this.hero = {
                            name: "",
                            sex: "",
                            age: ""
                        };

                        this.$router.push({name: "list"})
                    }).then((error) => {
                        console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>