<template>
    <div class="search">
        <!--2. 在搜索输入框中 v-model绑定searchValue-->
        品牌名称:
        <input type="text" placeholder="请输入搜索条件" v-model="searchVal">
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                searchVal: ""
            }
        },

        watch: {
            searchVal(curVal, oldVal) {
                console.log("watch");
                // 实现input连续输入，只发一次请求
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    // console.log(curVal);
                    this.$emit("searchProduct", curVal)
                }, 100);
            }
        }
    }
</script>

<style scoped>

</style>