<template>
  <div id="index">
    <topHead></topHead>
    <div class="container-fluid">
        <div class="row">
            <div class="container-left col-lg-2">
                <leftNav></leftNav>
            </div>
            <div class="container-right col-lg-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import topHead from '../components/common/topHead'
import leftNav from '../components/common/leftNav'
// import search from '../components/access/search'
// import list from '../components/access/list'
// import foo from '../components/access/foo'
import "bootstrap"

export default {
  name: 'Index',
  components: {
    topHead,
    leftNav,
    // search,
    // list,
    // foo
  }
}
</script>

<style scoped>
    /*#index, .container-fluid, .row {*/
    #index, .container-fluid, .row{
        width: 100%;
        height: 100%;
    }
    #index .container-fluid {
        display: inline-block;
        width: 100%;
        height: calc(100% - 66px);
        padding: 0;
    }
    #index .container-fluid .row {
        margin: 0;
    }

    .container-left {
        padding: 20px 0;
        background-color: #e6e6e6;
    }
    .container-right {
        padding: 0 20px;
        margin-top: 0;
    }
</style>