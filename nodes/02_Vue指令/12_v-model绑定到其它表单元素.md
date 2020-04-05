## v-model 绑定到其它元素

### 绑定一个复选框

v-model 绑定的是 bool 值

```html
<div id="app">
    <input type="button" value="选中" @click="isSelect = !isSelect">
    <input type="checkbox" v-model="isSelect">这是一个复选框
</div>
<script>
    var app = new Vue({
        el: "#app",
        data: {
            isSelect: true
        }
    })
</script>
```



### 绑定多个复选框

v-model 绑定的是复选框中 value 的值

```html
{{checkList}}
    <input type="checkbox" value="111" v-model="checkList">复选框1
    <input type="checkbox" value="222" v-model="checkList">复选框2
    <input type="checkbox" value="333" v-model="checkList">复选框3
    <input type="checkbox" value="444" v-model="checkList">复选框4
    <input type="checkbox" value="555" v-model="checkList">复选框5
```

checkList = [ "111", "222", "333", "444", "555" ]  



