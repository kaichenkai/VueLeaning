## animate.css 实现动画效果

### 项目集成 animate

github 上查询 animate.css 

安装 animate.css

```npm
$ npm install animate.css --save
```

引入

```vue
import animate from 'animate.css'
```



### [自定义过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#自定义过渡的类名)

1. 我们可以通过以下 attribute 来自定义过渡类名：

   - `enter-class`
   - `enter-active-class`
   - `enter-to-class` (2.1.8+)
   - `leave-class`
   - `leave-active-class`
   - `leave-to-class` (2.1.8+)

   他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 [Animate.css](https://daneden.github.io/animate.css/) 结合使用十分有用。

2. **示例**

   ```html
   <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
   
   <div id="example-3">
     <button @click="show = !show">
       Toggle render
     </button>
     <transition
       name="custom-classes-transition"
       enter-active-class="animated tada"
       leave-active-class="animated bounceOutRight"
     >
       <p v-if="show">hello</p>
     </transition>
   </div>
   ```



### 使用

1. 导入 animate 包

   ```vue
   import animate from 'animate.css'
   ```

2. 绑定动画类，具体的动画类可以查看 github 的[文档](https://github.com/daneden/animate.css) 和 具体[效果展示](https://daneden.github.io/animate.css/)

   ```vue
   <transition
   	enter-active-class="animated bounceIn"
   	leave-active-class="animated bounceOut"
   	>
       <img :src="pic" v-if="show">
   </transition>
   ```

3. 绑定持续时间 duration （单位 ms）

   ```vue
   :duration="{enter:2000, leave:3000}"
   ```



### 组件 demo

```vue
<template>
  <div>
    <h3>AnimateCSS</h3>
    <button @click="show = !show">动画切换</button>
    <br>
    <!-- 进入的动画类：enter-active-class
         出去的动画类：leave-active-class -->
    <transition
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut"
      :duration="{enter:2000, leave:3000}"
      >
      <img :src="pic" v-if="show">
    </transition>
  </div>
</template>

<script>
// 引入图片对象
import pic from '@/assets/logo.png'
import animate from 'animate.css'

export default {
  name: 'AnimateCSS',
  data () {
    return {
      show: false,
      pic: pic
    }
  }
}
</script>

<style scoped>
</style>
```

