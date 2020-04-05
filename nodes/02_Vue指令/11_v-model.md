## v-model（双向数据绑定）

### 作用

1. 便捷的设置和获取表单元素的值

   ```html
   <input type="text" v-model="message">
   ```

2. 【绑定的数据】会和【表单元素的值】相互关联



### 原理

输入框绑定 data 中的 msg, 当输入框中的值发生变化时, msg 随之发生变化

所以 v-model 是一种语法糖 (简化了 DOM 操作)

```html
<input :value="msg" @input="msg=$event.target.value">
```



### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>v-model</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <input type="text" v-model="message" @keyup.enter="getMessage">
        <h3>{{ message }}</h3>
        <br>
        <input type="button" value="改变message" @click="setMessage('是一名搬砖工哇')">
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                message: "我是一个粉刷匠"
            },
            methods: {
                getMessage:function(){
                    alert(this.message);
                },
                setMessage: function(p1){
                    this.message = p1;
                }
            }
        })
    </script>
</body>
</html>
```

