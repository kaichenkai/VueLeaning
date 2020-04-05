## 学生信息管理 demo

### 功能

1. 增加学生
2. 删除学生





### 组件 demo

```vue
<template>
    <div id="app">
        <!--第一部分-->
        <fieldset>
            <legend>指令综合小练习</legend>
            <div>
                <span>姓名: </span>
                <input type="text" placeholder="请输入姓名" v-model="newStudent.name">
            </div>
            <div>
                <span>年龄: </span>
                <input type="text" placeholder="请输入年龄" v-model="newStudent.age">
            </div>
            <div>
                <span>性别: </span>
                <select v-model="newStudent.sex">
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
            </div>
            <div>
                <span>手机: </span>
                <input type="text" placeholder="请输入手机号码" v-model="newStudent.phone">
            </div>
            <button @click="addStudent">创建新用户</button>
        </fieldset>
        <!--第二部分-->
        <table>
            <thead>
            <tr>
                <td>姓名</td>
                <td>性别</td>
                <td>年龄</td>
                <td>手机</td>
                <td>删除</td>
            </tr>
            </thead>
            <tbody>
               <tr v-for="(student, index) in students" :key="index">
                   <td>{{ student.name }}</td>
                   <td>{{ student.sex }}</td>
                   <td>{{ student.age }}</td>
                   <td>{{ student.phone }}</td>
                   <td>
                       <button @click="delStudent(index)">删除</button>
                   </td>
               </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'StudentDemo',
  data () {
    return {
      students: [
        // {'name': '', 'age': '', 'sex': '', 'phone': ''}
      ],
      newStudent: {'name': '', 'age': '', 'sex': '', 'phone': ''}
    }
  },
  methods: {
    addStudent () {
      // 获取数据
      let {name, age, sex} = this.newStudent
      // 校验
      if (!name) {
        alert('姓名不能为空')
        return
      }
      if (!age) {
        alert('年龄不能为空')
        return
      }
      if (!sex) {
        alert('请选择性别')
        return
      }
      // if (!newStudent.phone) {
      //   alert('手机号不能为空')
      // }
      // console.log(this.newStudent.name)
      this.students.push(this.newStudent)
      this.newStudent = {'name': '', 'age': '', 'sex': '', 'phone': ''}
    },
    delStudent (index) {
      this.students.splice(index, 1)
    }
  }
}
</script>

<style scoped>
    #app{margin: 50px auto;width: 600px;}
    fieldset{border: 1px solid orangered;margin-bottom: 20px;}
    fieldset input{width: 200px;height: 30px;margin: 10px 0;}
    table{width: 600px;border: 2px solid orangered;text-align: center;}
    thead{background-color: orangered;}
</style>
```

