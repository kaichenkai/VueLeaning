import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrap from 'bootstrap'
import "jquery/dist/jquery.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import axios from "axios"
// 设置 url 前缀
axios.defaults.baseURL = "http://localhost:3000/";
// 将 axios 赋值给所有组件, 统一导入
Vue.prototype.axios = axios;
//
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
