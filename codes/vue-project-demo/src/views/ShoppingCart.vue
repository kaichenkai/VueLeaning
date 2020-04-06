<template>
    <div>
        <Add ref="add"/>
        <Search ref="search"/>
<!--        <ProductList ref="productList" :productList="filterProductList" :deleteP="deleteP"/>-->
        <ProductList ref="productList" :productList="productList" :deleteP="deleteP"/>
    </div>
</template>

<script>
    import Add from "../components/ShoppingCart/Add";
    import Search from "../components/ShoppingCart/Search";
    import ProductList from "../components/ShoppingCart/ProductList";
    import axios from 'axios'

    export default {
        name: "ShoppingCart",
        data() {
            return {
                productList: [
                    // {name:"macbook", date: "2020-04-06"},
                    // {name:"联想", date: "2020-04-07"},
                    // {name:"戴尔", date: "2020-04-08"}
                ],
                searchVal: "",
                newProduct: {}   // 新增加的产品
            }
        },
        components: {
            Add,
            Search,
            ProductList
        },

        mounted() {
            // 从服务器查询商品列表
            console.log("mounted");
            this.queryProductList();

            // 监听子组件增加一条数据
            this.$refs.add.$on("add", this.add);
            // 监听子组件搜索数据
            this.$refs.search.$on("searchProduct", this.searchProduct);
            // 监听子组件删除数据
            // this.$refs.productList.$on("productList", this.deleteP)
        },

        // updated() {
        //     // 从服务器查询商品列表
        //     console.log("updated");
        //     this.queryProductList();
        // },

        computed: {
            // 过滤商品列表
            // filterProductList: {
            //     get() {
            //         let {searchVal, productList} = this;
            //         let filterProductList = [...productList];
            //
            //         if (searchVal.trim()) {
            //             filterProductList = productList.filter(p => {
            //                 return p.name.indexOf(searchVal.trim()) !== -1
            //             })
            //         }
            //         return filterProductList
            //     }
            // }
        },

        // 侦听器 ( 当 searchVal 变化时, 同时需要进行 axios 异步操作请求)
        watch: {
            // 查询商品列表
            searchVal(newValue, oldValue) {
                axios.get("http://localhost:3000/productList?name_like=" + newValue)
                    .then((response) => {
                            // console.log(response);
                            const {status, data} = response;
                            if (status === 200) {
                                this.productList = data
                            }
                        }, (err) => {
                            alert(err)
                        }
                    )
            }
        },


        methods: {
            // 查询商品列表
            queryProductList() {
                axios.get("http://localhost:3000/productList")
                    .then((response) => {
                            // console.log(response);
                            const {status, data} = response;
                            if (status === 200) {
                                this.productList = data
                            }
                        }, (err) => {
                            console.log(err);
                        }
                    )
            },

            // 新增一条商品
            add(p) {
                // this.productList.unshift(p)
                // this.productList.push(p)

                // 使用 axios 请求服务器
                axios.post("http://localhost:3000/productList", p)
                    .then((response) => {
                            // console.log(response);
                            let {status} = response;
                            if (status < 300) {
                                alert(`添加产品:[${p.name}]成功`,)
                            }
                        }, (err) => {
                            console.log(err);
                        }
                    );
                // 重新查询商品列表
                this.queryProductList()
            },
            // 搜索商品
            searchProduct(searchVal) {
                this.searchVal = searchVal
            },

            // 删除商品
            deleteP(p) {
                // console.log(id);
                // this.productList.splice(id, 1)

                if (confirm(`是否删除商品[${p.name}]?`)) {
                    axios.delete("http://localhost:3000/productList" + "/" + p.id)
                        .then((response) => {
                                alert("删除成功")
                            }, (err) => {
                                alert("删除失败")
                            }
                        );
                    // 重新查询商品列表
                    this.queryProductList()
                }
            }
        }
    }
</script>

<style scoped>

</style>