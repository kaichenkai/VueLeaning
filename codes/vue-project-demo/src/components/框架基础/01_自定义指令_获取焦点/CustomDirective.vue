<template>
    <div>
        <h3>使用自定义指令获取焦点</h3>
        <p>获取焦点</p>
        <input type="text" v-model="msg" v-focus>
        <p>没有获取焦点</p>
        <input type="text" v-model="msg" >
    </div>
</template>

<script>
    export default {
        name: "CoutomDirective",
        data () {
            return {
                msg: ""
            }
        },

        // 自定义组件, 获取焦点(这种写法获取不了焦点, 原因 ?)
        // directives: {
        //     'focus' (el) {
        //         el.focus()
        //             console.log(el);
        //         console.log("focus================")
        //     }
        // }

        directives: {
            focus: {
                inserted(el){
                    el.focus()
                    console.log(el);
                }
            }
        }
    }
</script>

<style scoped>

</style>