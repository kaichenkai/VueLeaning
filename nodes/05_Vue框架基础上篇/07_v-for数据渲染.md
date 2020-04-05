## v-for 数据渲染

### 使用

1. 遍历数组

   ```vue
   value in array
   // 或
   (value, index) in array
   ```

2. 遍历对象

   ```vue
   (value, key) in object
   // 或
   (value, key, index) in object
   ```

3. vue 建议我们给每个循环遍历的标签, 加上 key 属性, 并要求 key 属性的值是唯一的

   ```vue
   v-for="(student, index) in students" :key="index"
   ```

   这样的做的目的: vue 渲染页面时, 根据 key 的标识找到每个元素, 效率会更高 



### 组件demo

```vue
<template>
    <div>
      <h3>v-for遍历数组</h3>
      <ul>
        <li v-for="(student, index) in students" :key="index">
          {{index + 1}}---姓名：{{student.name}}, 年龄：{{student.age}}, 性别：{{student.gender}}
        </li>
      </ul>

      <h3>v-for遍历对象</h3>
      <ul>
        <li v-for="(value, key) in students[0]" :key="key">
          {{key}}------{{value}}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ShowAndIf',
  data () {
    return {
      students: [
        {'name': 'johny', 'age': 12, 'gender': 'girl'},
        {'name': 'jack', 'age': 22, 'gender': 'man'},
        {'name': 'rose', 'age': 22, 'gender': 'women'},
        {'name': 'anson', 'age': 22, 'gender': 'man'}
      ]
    }
  }
}
</script>

<style scoped>
  ul{
    text-align: left;
  }
  h3{
    text-align: left;
  }
</style>
```



