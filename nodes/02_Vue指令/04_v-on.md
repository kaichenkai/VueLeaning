## v-on

### 作用

为元素绑定事件，v-on指令可以简写为 @，绑定的方法定义在 methods 属性中

```html
<div id="app">
    <input type="button" value="click事件" v-on:click="doSomething">
    <input type="button" value="click事件" @click="doSomething">
    <input type="button" value="双击事件" v-on:dblclick="doSomething">
    <input type="button" value="双击事件" @dblclick="doSomething">
</div>
```

```js
var app = new Vue({
    el: "#app",
    methods: {
        doSomething: function() {
            // 逻辑
        }
    }
})
```



### 传入自定义参数

定义方法时需要定义形参来接收传入的实参

```html
<input type="button" value="click事件" @click="doSomething('watch TV')">
...
doSomething: function(p1) {
	alert(p1)
}
```



### 事件修饰符

事件的后面跟上 .修饰符 可以对事件触发进行限制  （事件修饰符有多种）

当点击 enter 键时触发， 执行 sayHi 方法

```html
<input type="text" @keyup.enter="sayHi">
```

只触发一次回调

```html
<input type="button" @click.once="fn" value="点我, 只触发一次">
```



### demo

给 h2 标签添加点击事件， 改变 textContent 内容

方法内部可以通过 **this 关键字**可以访问定义在 data 中的数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>v-on</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <input type="button" value="click事件" v-on:click="doSomething('watch TV')">
        <!-- <input type="button" value="click事件" @click="doSomething">
        <input type="button" value="双击事件" v-on:dblclick="doSomething">
        <input type="button" value="双击事件" @dblclick="doSomething"> -->
        <h2 @click="changeFood">{{ food }}</h2>
        <h2 @click="changeFood" v-text="food"></h2>

        <!--事件修饰符  -->
        <input type="text" @keyup.enter="sayHi">
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                food: "西红柿炒鸡蛋"
            },
            methods: {
                doSomething: function(p1) {
                    alert(p1)
                },
                changeFood: function() {
                    // console.log(this.food)
                    this.food += "真好吃"
                },
                sayHi: function(){
                    alert("吃了没阿？")
                }
            }
        })
    </script>
</body>
</html>
```









