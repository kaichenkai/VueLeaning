<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <!-- <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
<li><a href="#/heroes">Reports</a></li>
    <li><a href="#">Analytics</a></li>
        <li><a href="#">Export</a></li>
            <li><a href="#/foo">Go Foo</a></li>
                <li><a href="#/bar">Go Bar</a></li> -->
            <router-link tag="li" to="/heroes">
                <a>英雄列表</a>
            </router-link>
            <router-link tag="li" to="/bar">
                <a>武器列表</a>
            </router-link>
            <router-link tag="li" to="/foo">
                <a>装备列表</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "appslider"
    }
</script>

<style scoped>

</style>