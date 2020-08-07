<template>
    <div class="left-nav">
        <!--            <router-link tag="li" :to="{name: 'access'}">-->
        <!--                <span class="icon-uniE900"></span><a>数据接入</a>-->
        <!--            </router-link>-->
        <!--            <router-link tag="li" :to="{name: 'publish'}">-->
        <!--                <span class="icon-uniE900"></span><a>数据发布</a>-->
        <!--            </router-link>-->
        <!--                <div class="toggle-button" @click="togleCollapse">|||</div>-->
        <!--                background-color="#212733"-->

                <el-menu
                        class="main-menu"
                        :unique-opened="false"
                        :default-active="activePath"
                        :collapse="isCollapse"

                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#0064C8">
                    <!-- :unique-opened="true"->只允许展开一个菜单 -->
                    <!-- :collapse-transition="false" -> 关闭动画 -->
                    <!-- router -> 导航开启路由模式 -->
                    <!-- 一级菜单  -->
                    <el-submenu index="1" class="first-menu">
                        <template slot="title">
                            <i class="el-icon-s-promotion first-title" style="padding-right: 10px"></i>
                            <a class="first-title">数据接入</a>
                        </template>

                        <!-- 二级菜单 -->
                        <el-menu-item index="1-1" class="second-menu">
                            <template slot="title">
                                <router-link tag="li" :to="{name: 'access-stats'}">
                                    <i class="el-icon-s-data second-title" style="padding-right: 5px"></i>
                                    <span class="second-title">统计</span>
                                </router-link>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="1-2" class="second-menu">
                            <template slot="title">
                                <router-link tag="li" :to="{name: 'access-filter-rule'}">
                                    <i class="el-icon-edit second-title" style="padding-right: 5px"></i>
                                    <span class="second-title">过滤</span>
                                </router-link>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="1-3" class="second-menu">
                            <template slot="title">
                                <router-link tag="li" :to="{name: 'access-log'}">
                                    <i class="el-icon-document second-title" style="padding-right: 5px"></i>
                                    <span class="second-title">日志</span>
                                </router-link>
                            </template>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="2" class="first-menu">
                        <template slot="title">
                            <i class="el-icon-share first-title" style="padding-right: 10px"></i>
                            <span class="first-title">数据发布</span>
                        </template>
                        <!-- 二级菜单 -->
                        <!--                        @click="saveNavState('/' + subItem.path)"-->
                        <el-menu-item index="2-1" class="second-menu">
                            <template slot="title">
                                <router-link tag="li" :to="{name: 'publish-stats'}">
                                    <i class="el-icon-s-data second-title" style="padding-right: 5px"></i>
                                    <span class="second-title">统计</span>
                                </router-link>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="2-2" class="second-menu">
                            <template slot="title">
                                <router-link tag="li" to="">
                                    <i class="el-icon-edit second-title" style="padding-right: 5px"></i>
                                    <span class="second-title">过滤</span>
                                </router-link>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="2-3" class="second-menu">
                            <template slot="title">
                                <router-link tag="li" :to="{name: 'publish-log'}">
                                    <i class="el-icon-document second-title" style="padding-right: 5px"></i>
                                    <span class="second-title">日志</span>
                                </router-link>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
    </div>
</template>

<script>
    export default {
        name: "leftNav",
        data() {
            return {
                //默认不折叠
                isCollapse: false,
                //被激活导航地址
                activePath: '1-1'
            }
        }
    }
</script>

<style scoped lang="less">
    .left-nav {
        /*padding: 20px 0 !important;*/

        .main-menu {
            width: 100%;
            height: 100%;
            padding: 0;
            text-align: center;
            border: 1px solid #333744;/*对齐效果*/

            .first-menu {

                .first-title {
                    font-size: 20px;
                    padding-right: 40px;
                }

                .second-menu {
                    .second-title {
                        font-size: 16px;
                    }
                }
            }
        }


    }

    /*.left-nav ul {*/
    /*    list-style: none;*/
    /*}*/

    /*.left-nav ul li {*/
    /*    width: 100%;*/
    /*    height: 66px;*/
    /*    line-height: 66px;*/
    /*    text-align: center;*/
    /*    !*background-color:  #e6e6e6;*!*/
    /*}*/

    /*全局激活样式应用*/
    /*.left-nav .first-menu .second-menu .router-link-active {*/
    /*    color: #fff;*/
    /*    background-color: #0064C8;*/
    /*}*/

    /*.left-nav ul li.router-link-active a,*/
    /*.left-nav ul li.router-link-active .icon-uniE900 {*/
    /*    color: #ffffff;*/
    /*    background-color: #0064C8;*/
    /*    !*background-color: #409EFF;*!*/
    /*}*/

    /*.left-nav ul li a {*/
    /*    display: inline-block;*/
    /*    width: 120px;*/
    /*    font-size: 18px;*/
    /*    text-align: left;*/
    /*    !*color: #0064C8;*!*/
    /*    color: #409EFF;*/
    /*    text-decoration: none;*/
    /*}*/

    /*.left-nav ul li a:hover {*/

    /*}*/

    /*调整字体图标*/
    /*.left-nav ul li .icon-uniE900 {*/
    /*    font-size: 14px;*/
    /*    margin: 0 5px;*/
    /*    !*color: #0064C8;*!*/
    /*    color: #409EFF;*/
    /*}*/
</style>
