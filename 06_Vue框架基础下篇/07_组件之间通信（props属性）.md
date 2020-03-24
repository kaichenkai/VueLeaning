## 组件之间通信（props 属性）常用

### 使用注意

1. 适用于父组件给子组件传递数据

2. 存在缺陷

   - 如果需要向非直接子组件传递数据，必须逐层传递

   - 兄弟组件之间不能直接使用 props 属性进行传递，必须借助父组件才可以



### 步骤

1. 父组件调用子组件并传递数据（ 例如 App.vue 调用 PropsComponent.vue ）

   - 引入，注册，使用子组件（App.vue中 ）

     ```vue
     <template>
       <div id="app">
         <PropsComponent name='johny' :age=12 :person='person' :parentMethod='parentMethod' />
       </div>
     </template>
     
     <script>
     // 引入组件
     import PropsComponent from './components/PropsComponent'
     export default {
       name: 'App',
       // 注册组件
       components: {
         PropsComponent
       }
     }
     </script>
     ```

   - 子组件接收数据，并渲染（ PropsComponent.vue ）

     ```vue
     <template>
       <div>
         <h3>PropsComponent</h3>
         <label>{{ name }}</label>
         <label>{{ age }}</label>
       </div>
     </template>
     
     <script>
     export default {
       name: 'PropsComponent',
       props: ['name', 'age']
     }
     </script>
     ```

     

2. 需要声明所有的 props （props 可以是数组，对象，函数）

   - props 中的数据可以通过 this 获取

     ```vue
     this.name
     ```

   - 传递对象时，子组件可以对数据进行约束（数据类型，是否必须，默认值）

     ```vue
     props: {
       'name': {type: String, required: false, default: '小陈'},
       'age': {type: Number, required: false, default: 22},
       'person': Object,
       'parentMethod': Function
     },
     ```



### 组件 demo

App.vue

```vue
<template>
  <div id="app">
    <PropsComponent name='johny' :age=12 :person='person' :parentMethod='parentMethod' />
    <p>==================================================================</p>
    <PropsComponent :person='person' :parentMethod='parentMethod' />
  </div>
</template>

<script>
// 引入组件
import PropsComponent from './components/PropsComponent'

export default {
  name: 'App',
  // 注册组件
  components: {
    PropsComponent
  },
  data () {
    return {
      person: {
        'name': '小明',
        'age': 18
      }
    }
  },
  methods: {
    parentMethod (name, age) {
      alert('父组件的方法执行，打印输出: 姓名:' + name + '，年龄：' + age)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```



PropsComponent.vue

```vue
<template>
  <div>
    <h3>PropsComponent</h3>
    <label>姓名：{{ name }}</label>
    <label>年龄：{{ age }}</label>
    <button @click="btnClick">点我</button>
    <div>父组件传入的对象：{{person}} 姓名：{{person.name}}，年龄：{{person.age}}</div>
    <h3>父组件传入的函数调用</h3>
    <button @click="parentMethod('小张', '19')">执行父组件函数</button>
  </div>
</template>

<script>
export default {
  name: 'PropsComponent',
  // 传递数组
  //   props: ['name', 'age'],
  // 传递对象
  //   props: {
  //     'name': String,
  //     'age': Number,
  //     'person': Object,
  //     'parentMethod': Function
  //   },
  // 添加约束
  props: {
    'name': {type: String, required: false, default: '小陈'},
    'age': {type: Number, required: false, default: 22},
    'person': Object,
    'parentMethod': Function
  },
  methods: {
    btnClick () {
      alert(this.name)
    }
  }
}
</script>

<style scoped>
</style>
```

