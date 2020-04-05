## axios

### 如何使用

官网：https://gihub.com/axios/axios

1. 功能强大的网络请求库，必须先导入再使用

   ```html
   <!-- axios 开发库 -->
   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
   ```

2. 使用 get 或 post 方法即可发送对应的请求

3. then 方法中的回调函数会在请求成功或失败时触发

4. 通过回调函数的形参，可获取响应内容或错误信息

5. **axios回调函数中的 this 已经改变，无法访问到 data 中的数据**

   处理方法：把 this 保存起来，回调函数中使用保存的 this 即可

   ```js
   getJoke:function(num) {
       console.log(this.joke)
       var that = this  // 将 this 存起来
       axios.get("https://autumnfish.cn/api/joke/list?num=" + num)
           .then(function(resposne){
           // console.log(resposne.data.joke)
           that.joke = resposne.data.jokes[0];
   
           console.log(this.joke)  // undefined
       }, function(error){
           console.log(error)
       })
   },
   ```

6. 网络应用和本地应用最大的区别就是改变了数据来源



### 先准备两个接口用来测试

接口1：随机笑话

请求地址：https://autumnfish.cn/api/joke/list

请求方式：get

请求参数：num（笑话条数，数字类型）

响应内容：随机笑话

```json
{
    "msg":"获取2条笑话",
    "jokes":["今天用微信和女神表白，什么排比、比喻各种修辞，可谓字字经典，句句动情，引经据典，声情并茂。 最后，在我强烈的感情攻势下，女神终于回了一句：“你谁啊？”","我：“医生，我老想自杀，你看我该咋办？”医生：“呃，你为什么想自杀？”我：“因为活着没意思哇！我想干的事儿他们都不许我干哇！”医生：“你想干啥？”我：“我想自杀啊！”‍‍‍‍"]
}
```



接口2：用户注册

请求地址：https://autumnfish.cn/api/user/reg

请求方式：post

请求参数：username（用户名，字符串类型）

响应内容：注册成功或失败



### GET 请求

```js
axios.get("https://autumnfish.cn/api/joke/list?num=" + num)
    .then(function(resposne){
    console.log(resposne)
}, function(error){
    console.log(error)
})
```



### POST 请求

```js
axios.post("https://autumnfish.cn/api/user/reg", {"username": username})
    .then(function(resposne){
    console.log(resposne)
}, function(error){
    console.log(error)
})
```



### demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>axios + vue</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- axios 开发库 -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>

<body>
    <div id="app">
        <input type="button" value="获取笑话" @click="getJoke(1)">
        <input type="button" value="用户注册" @click="userRegister('johny')">
        <div>{{ joke }}</div>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                joke: "很好笑的笑话"
            },
            methods: {
               getJoke:function(num) {
                    console.log(this.joke)
                    var that = this  // 将 this 存起来
                    axios.get("https://autumnfish.cn/api/joke/list?num=" + num)
                    .then(function(resposne){
                        // console.log(resposne.data.joke)
                        that.joke = resposne.data.jokes[0];

                        console.log(this.joke)  // undefined
                    }, function(error){
                        console.log(error)
                    })
               },
               userRegister:function(username){
                   axios.post("https://autumnfish.cn/api/user/reg", {"username": username})
                   .then(function(resposne){
                       console.log(resposne)
                    }, function(error){
                        console.log(error)
                    })
                }
            }
        })
    </script>
</body>
</html>
```



