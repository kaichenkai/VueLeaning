## class 与 style

### class绑定（v-bind:class）

三种绑定形式

1. 字符串，对象（常用于有或无），数组（常用于多样式的叠加）

   ```vue
   <p :class="classOne">样式可以是字符串</p>
   <p :class="{'classOne': true}">样式可以是对象</p>
   <p :class="[classOne, classTwo]">样式可以是列表</p>
   ```

   

### style绑定（v-bind:style）

```vue
<p :style="{fontSize: fSize, background: bGround}">样式类可以是对象形式</p>
// fSize 和 bGround 是 data 中的属性
```



### 组件 demo

```vue
<template>
    <div>
      <h3>class绑定</h3>
      <p :class="classOne">样式可以是字符串</p>
      <p :class="{'classOne': true}">样式可以是对象</p>
      <p :class="[classOne, classTwo]">样式可以是列表</p>
      <p>--------------------------------------------</p>
      <h3>style绑定</h3>
      <p :style="{fontSize: fSize, background: bGround}">样式类可以是对象形式</p>
    </div>
</template>

<script>
export default {
  name: 'ClassAndStyle',
  data () {
    return {
      classOne: 'classOne',
      classTwo: 'classTwo',

      // style 样式参数
      fSize: '30px',
      bGround: 'red'
    }
  }
}
</script>

<style scoped>
  .classOne{
    font-size: 30px;
    color: red;
  }
  .classTwo{
    background: burlywood;
  }

</style>
```

