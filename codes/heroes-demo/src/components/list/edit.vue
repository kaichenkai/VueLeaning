<template>
    <div class="add">
        <h2 class="sub-header">Edit Hero</h2>
        <form action="">
            <div class=" form-group">
                <label for="name">姓名</label>
                <input type="text" class="form-control" id="name" v-model="hero.name">
            </div>
            <div class="form-group">
                <label for="sex">性别</label>
                <input type="text" class="form-control" id="sex" v-model="hero.sex">
            </div>
            <div class="form-group">
                <label for="age">年龄</label>
                <input type="number" class="form-control" id="age"  v-model="hero.age">
            </div>
            <button type="submit" class="btn btn-success" @click="updateHeroes()">Submit</button>
        </form>
    </div>
</template>

<script>
    // import axios from "axios";
    export default {
        name: "edit",
        data(){
            return {
                hero: {
                    name: "",
                    sex: "",
                    age: ""
                }
            }
        },
        mounted() {
            //
            this.getHero()
        },
        methods: {
            updateHeroes() {
                if (!this.hero.name) {
                    alert("请输入姓名");
                    return
                }
                // this.axios.post("/heroes",{name: this.hero.name, sex:this.hero.sex, age: this.hero.age})
                this.axios.put("/heroes/" + this.hero.id, this.hero)
                    .then((response) => {
                        let {status} = response;
                        if (status === 200) {
                            alert("修改成功")
                        }
                        this.$router.push({name: "list"})
                    }).then((error) => {
                        console.log(error)
                })
            },

            // 获取 hero
            getHero() {
                let id = this.$route.params.id;
                this.axios.get("/heroes/" + id)
                    .then((response) => {
                        const {status, data} = response;
                        if (status === 200) {
                            this.hero = data;
                        }
                    }), ((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>