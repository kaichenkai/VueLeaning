## v-for

### 作用

1. 根据数据生成列表结构

2. 数组经常和 v-for 结合使用

   ```html
   (item, index) in array
   ```

3. item 和 index 可以结合其它指令一起使用

4. 数组长度的更新会同步到页面上，是响应式的



### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>v-for</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <ul v-for="(item, index) in cityArr">
            <li>{{ index + 1 }} 城市名称：{{ item }}</li>
        </ul>
        <br>
        <input type="button" value="增加学生" @click="addStudent">
        <input type="button" value="删除学生" @click="moveStudent">
        <h2 v-for="item in students">
            学生名称：{{ item.name }}
        </h2>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                cityArr:["武汉", "杭州", "北京", "深圳"],
                students: [{name: "jack"}, {name: "rose"}]
            },
            methods: {
                addStudent:function(){
                    this.students.push({name: "johny"})
                },
                moveStudent:function(){
                    this.students.shift()  // 删除最左边的一个元素
                }
            }
        })
    </script>
</body>
</html>
```





