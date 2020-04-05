## history & hash模式

### 概念

1. vue-router 默认 hash 模式，url 使用 # 后面定位路由，对seo 不利
2. history 模式即普通 url 模式，这种模式充分使用 history.pushState API 来完成 URL 跳转而无需重新加载页面



### 设置 history 模式

router.js

```vue
export default new Router({
  mode: 'history', // 配置 mode 参数
  routes: [

  ]
})
```



### hash 与 history 的区别

1. hash 模式 url 带 # 号，history 则不带
2. 如果考虑 url 的规范，那么需要使用 history 模式，适合开发习惯
3. 把用 vue 或者 react 做的页面分享到三方 app，有的 app 里边 url 是不允许带有 # 号的，所以只能使用 history 模式
4. 使用 history 模式还有一个问题就是，在访问二级页面时，做刷新操作时，会出现 404 错误，那么就需要后端配置 apache 或者 nginx 的 url 重定向，重定向到你的首页路由

|          | hash                         | history            |
| -------- | ---------------------------- | ------------------ |
| url 显示 | 有 #                         | 无 #               |
| 回车刷新 | 可以加载到 hash 值对应页面   | 一般是 404 掉了    |
| 支持版本 | 支持低版本浏览器和 IE 浏览器 | HTML5 新推出的 API |

