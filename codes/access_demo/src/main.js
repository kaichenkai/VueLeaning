import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// statisticsCommon CSS
import "@/assets/css/base.css"

// 引入 bootstrap
import "jquery/dist/jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
// 引入 chart.js
import "chart.js/dist/Chart.min"
import "vue-chartjs/dist/vue-chartjs.min"
// 引入字体 style.css
import "./assets/css/style.css"
//
Vue.config.productionTip = false;
// 发送请求
import services from './common/service.js';
Vue.prototype._services = services;

// 全局工具
import tools from './common/tools';
Vue.prototype.tools = tools;

// 时间处理插件
import moment from 'moment';
Vue.prototype.moment = moment;
// 定义全局的时间过滤器
Vue.filter('dateFormat', (dateStr, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dateStr).format(formatStr)
});


Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
