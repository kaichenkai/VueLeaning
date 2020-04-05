## @click.prevent

### 作用

1. 阻止默认的事件
2. 使用场景：



### 组件 demo

```vue
<template>
    <div>
      <h3>@click.prevent</h3>
      <a href="http://www.baidu.com" @click="baidu">百度一下</a>
      <p></p>
      <a href="http://www.baidu.com" @click.prevent="baidu">百度一下, prevent阻止</a>
    </div>
</template>

<script>
export default {
  name: 'Prevent',
  data () {
    return {
      message1: 'hello world',
      message2: 'HELLO WORLD'
    }
  },
  methods: {
    baidu () {
      alert('百度一下')
    }
  }
}
</script>

<style scoped>
</style>
```

