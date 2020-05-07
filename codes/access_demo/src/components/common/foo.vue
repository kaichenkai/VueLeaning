<template>
    <div class="foo">
        <nav aria-label="Page navigation example">
            <ul class="content-left pagination">
                <li class="page-item" :class="{disabled:currentPage===1 || totalPage===0 }">
                    <a @click.prevent="changePage(currentPage - 1)" class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
<!--                <li class="page-item"><a @click.prevent="changePage(beforeTwoPage)" class="page-link" href="#"-->
<!--                                         v-if="beforeTwoPage >= 1">{{ beforeTwoPage }}</a></li>-->
                <li class="page-item"><a @click.prevent="changePage(beforeOnePage)" class="page-link" href="#"
                                         v-show="beforeOnePage >= 1">{{ beforeOnePage }}</a></li>
                <li class="page-item active"><a class="page-link" href="#">{{ currentPage }}</a></li>
                <li class="page-item"><a @click.prevent="changePage(afterOnePage)" class="page-link" href="#"
                                         v-show="afterOnePage <= totalPage">{{ afterOnePage }}</a></li>
<!--                <li class="page-item"><a @click.prevent="changePage(afterTwoPage)" class="page-link" href="#"-->
<!--                                         v-if="afterTwoPage <= totalPage">{{ afterTwoPage }}</a></li>-->
                <li class="page-item" :class="{disabled:currentPage===totalPage || totalPage===0}">
                    <a  @click.prevent="changePage(currentPage + 1)" class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                <li class="page-item"><span class="total">共{{total}}条记录，共{{totalPage}}页</span></li>
            </ul>
            <div class="content-right">
                <form class="form-inline" action="" method="get">
                    <label><span>跳转到</span><input ref="currentPage" type="number" name="currentPage" value="" class="form-control"><span>页</span></label>
                    <button id="toPage" @click.prevent="changePage($refs.currentPage.value)" type="submit" >GO</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "foo",
        // props: { // 点击次数快了报错
        //     total: {type: Number, required: true},
        //     totalPage: {type: Number, required: true},
        //     currentPage: {type: Number, required: true}
        // },
        props: [
            "total", "totalPage", "currentPage"
        ],
        methods: {
            changePage(newPage) {
                // string -> int
                newPage = parseInt(newPage, 10);
                if (!newPage) {
                    alert("请输入页码");
                    return
                }
                //
                if (newPage < 1) {
                    newPage = 1;
                }
                //
                if (newPage > this.totalPage) {
                    newPage = this.totalPage;
                }
                // 清除内容
                this.$refs.currentPage.value = "";
                // 通知父组件请求数据
                this.$emit('changePage', newPage);
            }
        },
        computed: {
            // beforeTwoPage: {
            //     get() {
            //         return this.currentPage - 2;
            //     }
            // },
            beforeOnePage: {
                get() {
                    return this.currentPage - 1;
                }
            },
            afterOnePage: {
                get() {
                    return this.currentPage + 1;
                }
            },
            // afterTwoPage: {
            //     get() {
            //         return this.currentPage + 2;
            //     }
            // }
        }
        // watch: {
        //     currentPage(page) {
        //         this.beforeTwoPage = page - 2;
        //         this.beforeOnePage = page - 1;
        //         this.afterOnePage = page + 1;
        //         this.afterTwoPage = page + 2;
        //     }
        // }
    }
</script>

<style scoped>
    .foo {
        width: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .foo nav {
        width: 100%;
        height: 78px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .foo nav .content-left,
    .foo nav .content-right {
        margin: 20px 10px;
        height: 38px;
        line-height: 38px;
    }

    .foo nav .content-left {
        float: left;
    }

    .foo nav .content-right {
        float: right;
    }

    /* 左边 */
    .foo nav .content-left {
    }

    .foo nav .content-left li a {
        color: #0064C8;
    }

    .foo nav .content-left li.active a {
        background-color: #0064C8;
        border-color: #0064C8;
        color: #ffffff;
    }

    .foo nav .content-left span.total {
        font-size: 16px;
        font-weight: bolder;
        margin-left: 10px;
    }

    /*修改禁止上下页的样式*/
    .foo nav .content-left li.disabled:hover {
        cursor: not-allowed;
    }

    /* 右边 */
    .foo nav .content-right form {
    }

    .foo nav .content-right form input {
        padding: 0;
        width: 80px;
        font-size: 16px;
        font-weight: bolder;
    }

    .foo nav .content-right form span {
        font-size: 16px;
        font-weight: bolder;
        margin: 0 5px;
    }

    .foo nav .content-right form button {
        height: 38px;
        width: 38px;
        line-height: 38px;
        color: #0064C8;
        font-size: 16px;
        font-weight: bolder;
        background-color: #fff;
        border: none;

        padding: 0;
        margin-left: 10px;
        margin-right: 50px;
    }

    .foo nav .content-right form button:active {
        /*border: none;*/
        /*outline: none !important;*/
        /*border: none !important;*/
        /*box-shadow: none !important;*/
    }
</style>
