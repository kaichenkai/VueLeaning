## class 语法糖

### 特点

1. 新增加的一个语法糖, 作用在于让对象原型的写法更加清晰, 更像面向对象的编程方式
2. 构造器的另一种写法
3. 类 (class) 本质上还是一个函数



### 使用

```js
class Student{
    // 构造方法
    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    // 成员方法
    study(){
        console.log(this.name + "在学习前端开发");
    }
}

// 创建对象, 调用成员方法
let s = new Student("johny", 12, "girl");
s.study()  // johny在学习前端开发
```



### ES5 的写法

```js
function Student(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Student.prototype = {
    constructor: Student,
    study (){
        console.log(this.name + "在学习前端开发");
    }
};

var s = new Student("johny", 12, "girl");
s.study();  // johny在学习前端开发
```

