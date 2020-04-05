## v-text 与 v-html

### 作用

1. v-text：更新元素的 textContent
2. v-html：更新元素的 innerHTML
3. 不建议使用 v-html 在网站上动态渲染任何 HTML 是非常危险的，因为容易导致 XSS 攻击



### 组件 demo

```vue
<template>
    <div>
      <h3>v-text</h3>
      <p v-text="msg">你想知道点什么？</p>
      <p>{{ msg }}) 你想知道点什么？</p>

      <h3>v-html</h3>
      <p v-html="url">你想知道点什么？</p>
    </div>
</template>

<script>
export default {
  name: 'ShowAndIf',
  data () {
    return {
      msg: '百度一下',
      url: '<a href="http://www.baidu.com">百度一下</a>'
    }
  }
}
</script>

<style scoped>
</style>
```

