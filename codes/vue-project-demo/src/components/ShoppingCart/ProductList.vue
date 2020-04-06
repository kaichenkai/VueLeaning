<template>
    <div class="productList">
        <tr v-for="(product, index) in productList" :key="index">
            <Item :id="product.id" :product="product" :deleteP="deleteP" />
        </tr>
        <tr v-if="productList.length === 0">
            <td colspan="4">没有品牌数据</td>
        </tr>
    </div>

</template>

<script>
    import Item from "./Item";

    export default {
        name: "ProductList",
        props: {
            "productList": {type: Array, required: false, default: []},
            "deleteP": Function
        },
        data() {
            return {
            }
        },
        components: {
            Item
        }
    }
</script>

<style scoped>

</style>