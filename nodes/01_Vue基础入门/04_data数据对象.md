## data 数据对象

### 作用

1. vue 中用到的数据定义在 data 中

2. data 中可以写复杂类型的数据

3. 渲染复杂类型数据时，遵守 js 的语法即可

   ```js
   this.$data.msg
   // or
   this.msg
   ```



### 特点

1. 数据以回调函数的方式返回
2. 响应式数据: 当数据发生变化时, 视图中使用数据的位置会自动发生变化



### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>data 数据对象</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        {{ message }}
        <h2>{{ student.name }}  {{ student.gender }} {{ student.mobile }}</h2>
        <ul>
            <li>{{ grade[0] }}</li>
            <li>{{ grade[1] }}</li>
        </ul>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                message: "hello xiaochen",
                student: {name: "xiaoming", gender:"男", mobile: 123456},
                grade: ["七《7》班", "七《8》班"]
            }
        })
    </script>
</body>
</html>
```

