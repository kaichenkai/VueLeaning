<template>
    <div class="foo">
        <nav aria-label="Page navigation example">
            <ul class="content-left pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                <li class="page-item"><span class="total">共10009条记录，共1001页</span></li>
            </ul>
            <div class="content-right">
                <form id="toPageForm" class="form-inline" action="" method="get">
                    <label><span>跳转到</span><input type="number" name="current_page" value="" class="form-control"><span>页</span></label>
                    <a href="javascript:void(0);" id="toPage">GO</a>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "foo"
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
    .foo nav .content-right form a {
        font-size: 16px;
        font-weight: bolder;
        margin-left: 10px;
        margin-right: 50px;
    }
    .foo nav .content-right form a:hover {
        text-decoration: none;
    }
</style>