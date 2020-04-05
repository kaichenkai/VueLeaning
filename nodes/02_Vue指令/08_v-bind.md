## v-bind

### 作用

1. 设置 dom 元素的属性，比如 src，title，class ...
2. 完整写法是 v-bind:属性名，简写可以直接省略 v-bind，只保留 `:属性名`
3. 需要动态的增删 class 建议使用对象的方式 `{active:isActive}`



### 绑定 src

```html
<img :src="imgSrc" alt="">
```



### 绑定 title

```html
<img :title="title" alt="">
```



### 绑定 class

```html
<img :class="{active:isActive}" alt="">
<!-- 不建议下面的写法 -->
<img :class="isActive?'active':''" alt="">
```





### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>v-bind</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<style>
    .active{
        border: 1px solid red;
    }
</style>

<body>
    <div id="app">
        <img :src="imgSrc" :title="title" :class="{active:isActive}" @click="changeBorder" alt="">
        
        <img :src="imgSrc" :title="title" :class="isActive?'active':''" @click="changeBorder" alt="">
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
              imgSrc: "https://www.baidu.com/img/bd_logo1.png?where=super",
              title: "百度一下",
              isActive: false
            },
            methods: {
                changeBorder:function(){
                    this.isActive = !this.isActive
                }
            }
        })
    </script>
</body>
</html>
```





