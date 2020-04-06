<template>
    <div class="add">
        品牌名称:<input type="text" v-model="name" @keyup.enter="add" v-focus >
        <input type="button" :disabled="name.length === 0" value="添加" @click="add">
    </div>
</template>

<script>
    export default {
        name: "add",
        data() {
            return {
                name: ""
            }
        },

        methods: {
            add() {
                if (this.name) {
                     let newProduct = {
                        name: this.name,
                        date: new Date()
                    };
                    // 提交到父组件中执行
                    this.$emit('add', newProduct);
                    // 清空出入框
                    this.name = ""
                }
            }
        },
        // 自定义指令, 自动获取焦点
        directives: {
            focus: {
                inserted(el, binding) {
                    el.focus()
                }
            }
        }
    }
</script>

<style scoped>
    .add {
        width: 500px;
        height: 40px;
        border: solid;
    }

    input {
        align-items: center;
    }
</style>