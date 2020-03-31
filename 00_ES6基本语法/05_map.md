## map

### 特点

1. 类似于对象, 本质上是键值对的集合

2. "键" 不局限于字符串, 可以是任何类型的值(包括对象)

3. map 与 对象

   + 对象是: {"String": value}, 对象的 key 只能是字符串
   + Map是: {key: value}, 是一种更加完善的 Hash 结构实现

4. 创建一个 map

   ```js
   let map = new Map([
       ["name", "xiaochen"],
       ["age", "18"],
       [{friends: ["johny", "anson"]}, "一起写代码阿"]
   ]);
   console.log(map);
   ```



### 方法

1. size

   ```js
   console.log(map.size); // 3
   ```

2. set 和 get

   ```js
   map.set("sex", "man")
   console.log(map.get("sex"));  // man
   ```

3. delete

   ```js
   console.log(map.delete("sex")); // true
   ```

4. has

   ```js
   console.log(map.has("name"));
   ```

5. clear

   ```js
   map.clear();
   ```

6. keys, values, entries

   ```js
   console.log(map.keys());
   console.log(map.values());
   console.log(map.entries());
   // 返回的是 MapIterator 迭代器, 可进行遍历
   ```



### 遍历 (map.forEach)

```js
map.forEach(function (key, value){
    console.log(key + ":" + value);
});
```

