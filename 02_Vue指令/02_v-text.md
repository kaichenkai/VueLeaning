## v-text

### 作用

设置标签的文本内容，简写为 {{}}

1. 默认写法会替换全部内容（textContent）

   ```html
   <h2 v-text="message">自定义内容</h2>
   <!-- 会覆盖自定义内容 -->
   ```

2. 使用差值表达式 {{}} 可以替换指定内容

   ```html
   <h2>{{ message }}$$$$$$</h2>
   ```

3. 内部支持写表达式

   ```html
   <h2 v-text="message+'$$$$$$'"></h2>
   ```





### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>v-text</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <h2 v-text="message">$$$$$$</h2>
        <h2 v-text="message+'$$$$$$'"></h2>
        <h2>{{ message }}$$$$$$</h2>
        <!--  -->
        <h2 v-text="info">$$$$$$</h2>
        <h2 v-text="info+'$$$$$$'"></h2>
        <h2>{{ info }}$$$$$$</h2>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                message: "hello xiaochen",
                info: "standard data"
            }
        })
    </script>
</body>
</html>
```

