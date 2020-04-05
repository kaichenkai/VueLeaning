## v-for 数据渲染







组件demo

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



