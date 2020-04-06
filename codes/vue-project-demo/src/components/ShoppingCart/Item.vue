<template>
     <div class="item">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>{{product.date | dateFormat}}</td>
        <td><a href="#" @click.prevent="deleteP(product)">删除</a></td>
     </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "Item",
        data() {
            return {

            }
        },
        props: {
            product: Object,
            id: Number,
            deleteP: Function
        },

        // 定义局部过滤器
        filters: {
          dateFormat (value, format = 'YYYY-MM-DD HH:mm:ss') {
            return moment(value).format(format)
          }
        },
    }
</script>

<style scoped>
    td {
        width: 200px;
        height: 50px;
    }

</style>