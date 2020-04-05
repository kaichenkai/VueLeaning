## Symbol (了解)

### 场景

1. ES5 的对象属性名都是字符串, 容易造成属性名冲突
2. ES6 中引入新的原始类型 Symbol, 表示独一无二的值
3. 对象的属性名可以有两种:
   + 字符串
   + Symbol 类型 (独一无二, 不会与其它属性名冲突)



### 使用

```js
// 使用 Symbol 修饰 name
let symbol1 = Symbol("name");
let symbol2 = Symbol("name");
console.log(symbol1 === symbol2);  // false

let student = {};
student[symbol1] = "约翰";
student[symbol2] = "johny";
console.log(student);
```

