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
import topHead from '../components/common/topHead'
import leftNav from '../components/common/leftNav'
import "bootstrap"

export default {
  name: 'Index',
  components: {
    topHead,
    leftNav
  }
}
</script>

<style scoped>
    /*#index, .container-fluid, .row {*/
    #index, .container-fluid, .row, .container-left, .container-right{
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
        /*background-color: #333744;*/
        background-color: #212733;
    }
    .container-right {
        padding: 0 20px;
        margin-top: 0;
    }
</style>
