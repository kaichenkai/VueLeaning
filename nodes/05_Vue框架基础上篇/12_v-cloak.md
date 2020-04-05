## v-cloak

### 作用

1. 防止闪现
2. 和 css 规则如 {v-cloak} {display: none} 一起使用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕



### 使用

```vue
<p v-cloak>{{ intro }}</p>

<style scoped>
    [v-cloak] {
        display: none;
    }
</style>
```





