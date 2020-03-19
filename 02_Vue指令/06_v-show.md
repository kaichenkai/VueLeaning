## v-show

### 作用 and 原理

1. 根据表达值的真假，切换元素的显示或隐藏
2. 原理是修改元素的 display 属性，实现显示隐藏
3. 指令后面的内容，最终都会解析为布尔值，true 显示
4. 数据改变之后，对应元素的显示状态会同步更新



### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>v-show</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <input type="button" value="切换显示状态" @click="changeIsShow">
        <div><img v-show="isShow" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584453899373&di=15456e223b3c89126d14c271a0804f58&imgtype=0&src=http%3A%2F%2Fm2.auto.itc.cn%2Flogo%2Fmodel%2F5293.jpg" alt=""></div>
        
        <!-- 当 age > 24 时显示图片 -->
        <input type="button" value="累加年龄" @click="add">
        <div><img v-show="age>24" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584453899373&di=15456e223b3c89126d14c271a0804f58&imgtype=0&src=http%3A%2F%2Fm2.auto.itc.cn%2Flogo%2Fmodel%2F5293.jpg" alt=""></div>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                isShow: false,
                age: 20
            },
            methods: {
                changeIsShow: function() {
                    this.isShow = !this.isShow
                },
                add:function() {
                    this.age ++
                }
            }
        })
    </script>
</body>
</html>
```

