## ref

### 作用

1. `ref` 被用来给元素或子组件注册引用信息。

   ```vue
   <p ref="fish">我是一只鱼</p>
   <p ref="cat">我是一只猫</p>
   ```

2. 引用信息将会注册在父组件的 `$refs` 对象上

3. 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件

   ```vue
   console.log(this.$refs.fish) // <p ref="fish">我是一只鱼</p>
   console.log(this.$refs.fish.innerHTML) // 我是一只鱼
   ```



### 组件 demo

```vue
<template>
    <div>
      <h3>ref</h3>
      <p ref="fish">我是一只鱼</p>
      <p ref="cat">我是一只猫</p>
      <button @click="log">输出 ref 中的元素</button>
    </div>
</template>

<script>
export default {
  name: 'ShowAndIf',
  data () {
    return {
    }
  },
  methods: {
    log () {
      console.log(this.$refs.fish) // <p ref="fish">我是一只鱼</p>
      console.log(this.$refs.fish.innerHTML) // 我是一只鱼
    }
  }
}
</script>

<style scoped>
</style>
```

