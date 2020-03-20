## v-once

### 作用

1. 只渲染元素或组件一次，随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过
2. 可用于优化更新性能



### 使用

```vue
<p>{{ msg }}</p>
<p v-once>{{ msg }}</p>   <!-- 只渲染一次 -->
<input type="text" placeholder="请输入内容" v-model="msg">
```

