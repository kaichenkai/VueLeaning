import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入 bootstrap
import "jquery/dist/jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
// 引入 chart.js
import "chart.js/dist/Chart.min"
import "vue-chartjs/dist/vue-chartjs.min"
// 引入字体 style.css
import "./assets/css/style.css"
// 统一引入 axios 组件 (挂载到 vue 原型链上)
import axios from "axios"
Vue.prototype.axios = axios;
// 配置统一地址
axios.defaults.baseURL = "http://10.10.19.250:9000";
//
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
