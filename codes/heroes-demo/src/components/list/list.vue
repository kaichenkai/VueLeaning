<template>
    <div>
        <h2 class="sub-header">Hero List</h2>
        <a class="btn btn-success" href="#">Add</a>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>名称</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>荀彧</td>
                    <td>男</td>
                    <td>26</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>
    #list {
        width: 80%;
        height: 100%;
        float: left;
        margin: 10px 30px;
    }
    #list .table-responsive table {
        width: 100%;
        height: 100%;
        background-color: skyblue;
        text-align: left;
    }
    .sub-header {
        padding-bottom: 10px;
        border-bottom: 1px solid #eeeeee;
    }
</style>