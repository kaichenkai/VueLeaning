## props 属性获取路由参数（推荐使用）

### 作用

1. 将 url 中的参数通过 props 属性传递给对应组件



### 使用

1. 配置新的路由，配置 props : true

   ```vue
   {
     path: '/book/:bookId',
     name: '查询某本书籍',
     component: () => import('@/views/Book'),
   
     props: true // 配置 props 属性为 true 
   }
   ```

   

2. Book 组件中

   - 添加 props 属性接收参数

     ```vue
     props: ['bookId'],
     ```

   - 使用 this.bookId 获取到 url 中参数
   - 无法接收查询字符串，仍需要使用 $route.query 获取到 查询字符串对象

   

3. 例如，当浏览器访问 http://localhost:8080/book/9?datetime=2020-03-26 

   - 在 Book 组件创建完成时，输出 url 中的参数

     ```vue
     created () {
       console.log(this.bookId) // 9
       console.log(this.datetime) // undefined
       console.log(this.$route.query.datetime) // 2020-03-26
     }
     ```

   - 渲染在页面中

     ```vue
     <p>bookId：{{ this.bookId }}</p>
     <p>查询时间：{{ $route.query.datetime }}</p>
     ```

