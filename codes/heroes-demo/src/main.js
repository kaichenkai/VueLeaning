import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrap from 'bootstrap'
import "bootstrap"  // import 可以没有接收者

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
