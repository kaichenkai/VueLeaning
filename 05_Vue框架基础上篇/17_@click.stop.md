## @click.stop

### 作用

1. 阻止点击事件冒泡





### 组件 demo

```vue
<template>
    <div>
      <h3>@click.stop</h3>
      <div @click="btuClick2" class="div">
        <button @click="btuClick1">点我</button>
        <p></p>
        <button @click.stop="btuClick1">冒泡阻止按钮</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Stop',
  methods: {
    btuClick1 () {
      alert('内部点击事件触发')
    },
    btuClick2 () {
      alert('外部点击事件触发')
    }
  }
}
</script>

<style scoped>
 .div{
   width: 100px;
   height: 80px;
   background: orange;
   margin: 0px auto;
 }
</style>
```

