import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false;

// 定义全局组件
// Vue.directive("focus", (el, binding) => {
//     // 获取焦点
//
// }),


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
