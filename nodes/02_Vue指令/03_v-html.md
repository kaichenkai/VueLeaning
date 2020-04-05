## v-html

### 作用

设置标签的 innerHTML （内嵌HTML标签）

1. 内容中有 html 结构会被解析成标签
2. 与 v-text 指令的区别：v-text 指令无论什么内容都会解析成文本

注意: 不推荐使用 v-html, 有安全问题 (跨站脚本攻击)



### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>v-html</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <div v-text="content"></div>
        <div v-html="content"></div>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                content: "<a href='http://www.baidu.com'>百度一下</a>",
            }
        })
    </script>
</body>
</html>
```





