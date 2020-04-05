## v-cloak

### 作用

1. 解决插值表达式 {{}} 页面闪烁的问题
2. 和 css 规则如 {v-cloak} {display: none} 一起使用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕



### 使用

1. 给闪烁的标签设置 v-cloak, 不需要赋值

2. 在 style 样式中设置 display: none

   ```html
   <p v-cloak>{{ intro }}</p>
   
   <style scoped>
       [v-cloak] {
           display: none;
       }
   </style>
   ```

3. 也可以给最外层 div 标签设置 v-cloak, 就可以了

   ```html
   <div id="app" v-cloak>
   	...
   </div>
   
   <style scoped>
       [v-cloak] {
           display: none;
       }
   </style>
   ```




