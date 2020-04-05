## v-show 与 v-if

### 作用原理

1. v-show 是修改元素的 display 属性，实现显示隐藏
2. v-if 是真正的条件渲染，本质是通过操作 dom 元素来切换显示状态
3. 在频繁切换元素时，使用 v-show，因为性能消耗较小



### 组件 demo

```html
<template>
    <div>
      <h3>v-show</h3>
      <p v-show="flag">今晚吃鸡</p>
      <p v-show="!flag">今晚不吃鸡</p>
      <p>--------------------------------------------</p>
      <h3>v-if</h3>
      <p v-if="flag">今晚打王者</p>
      <p v-else>今晚不打王者</p>
      <input type="button" value="状态切换" @click="changeFlag">
    </div>
</template>

<script>
export default {
  name: 'ShowAndIf',
  data () {
    return {
      flag: true
    }
  },
  methods: {
    changeFlag () {
      this.flag = !this.flag
    }
  }
}
</script>

<style scoped>
</style>
```

