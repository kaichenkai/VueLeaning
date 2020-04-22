import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入 bootstrap
import "jquery/dist/jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
