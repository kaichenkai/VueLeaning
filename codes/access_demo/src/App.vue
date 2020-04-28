<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>


<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }

    html, body, #app {
        width: 100%;
        height: 100%;
    }

    body {
        /*通用样式*/
        padding: 0;
        margin: 0;
        list-style: none;

        box-sizing: border-box;
    }

    /*给按钮添加阴影效果*/
    button:not(#toPage):focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
    }
    input:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;;
    }

</style>
