## let 和 const

### 概念

1. let 用来声明变量, const 用来声明常量



### let

1. 作用域只局限于当前代码块

2. 使用 let 声明的变量作用域不会被提升

   ```js
   // var
   {
       console.log(str)  // undefined
       var str = "xiaochen"
   }
   
   // let
   {
       console.log(str)  // str is not defined
       let str = "xiaochen"
   }
   ```

3. 在相同的作用域下不能声明相同名称的变量

4. for 循环体现 let 的父子作用域

   ```js
   for (let i=0; i<10; i++) {
       console.log(i)
   }
   ```



### const

1. 作用域只局限于当前代码块
2. 作用域不会被提升
3. 不能重复声明
4. 声明的常量必须赋值, 且不能被修改 
   + 如果常量中保存的是对象, 则可以被修改, 但是对象数据不建议用 const   关键字声明

