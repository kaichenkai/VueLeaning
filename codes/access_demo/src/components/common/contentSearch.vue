<template>
    <div class="search">
        <div class="search-left">
            <label><span>开始时间:</span><input v-model="startDate" class="date form-control" type="datetime-local"></label>
            <label><input class="query btn btn-info" type="button" value="查询" @click="dateSearch(startDate)"></label>
        </div>
        <div class="search-right">
            <label><span>搜索日志:</span><input @keyup.enter="contentSearch(content)" v-model="content" class="content" type="text" placeholder="请输入内容"></label>
            <a href="#" @click.prevent="contentSearch(content)"><img class="search-icon" src="../../assets/images/fd_icon.png" alt=""></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                startDate: "",
                content: ""
            }
        },
        methods: {
            // 自定义事件日期查询
            dateSearch(startDate) {
                if (!startDate.trim()) {
                    alert("请选择开始时间");
                    return;
                }
                startDate = startDate.trim();
                //
                this.$emit("dateSearch", startDate);
                // 清空输入框
                this.startDate = "";
            },
            // 自定义事件日志内容查询
            contentSearch(content) {
                if (!content.trim()) {
                    alert("请输入搜索内容");
                    return;
                }
                content = content.trim();
                //
                this.$emit("contentSearch", content);
                // 清空输入框
                this.content = "";
            }
        }
    }
</script>

<style scoped>
    .search {
        width: 100%;
        height: 42px;
        line-height: 42px;
        margin-bottom: 20px;
        color: #666666;
    }

    /*左边*/
    .search .search-left {
        float: left;
    }

    .search .search-left span {
        display: inline-block;
        width: 85px;
        height: 42px;
        font-size: 16px;
        font-weight: bolder;
        margin-left: 10px;
    }

    .search .search-left label,
    .search .search-right label {
        margin: 0;
    }

    .search .date {
        display: inline-block;
        width: 220px;
        height: 37px;
    }

    .search .search-left .query{
        margin-left: 9px;
        background-color: #6c757d;
        border: 1px solid #6c757d;
    }


    /*右边*/
    .search .search-right {
        float: right;
        width: 500px;
        height: 42px;
        position: relative;
    }

    .search .search-right span {
        display: inline-block;
        width: 85px;
        height: 42px;
        font-size: 16px;
        font-weight: bolder;
        margin-left: 10px;
    }

    .search .search-right .content {
        width: 300px;
        height: 37px;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        padding-left: 10px;
        color: #666666;
    }
    .search .search-right .content:focus {
        outline: none;
    }

    .search .search-right img {
        width: 26px;
        height: 26px;
        margin-right: 3px;
        position: absolute;
        right: 110px;
        top: 8px;
    }

</style>
