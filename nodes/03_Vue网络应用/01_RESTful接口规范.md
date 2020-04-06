## RESTful 接口规范

### 说明

1. RESTful 是一套接口开发设计规范
2. 用不同的请求类型发送同样一个请求标识, 所对应的处理是不同的
3. 通过 HTTP 请求的不同类型来判断是什么业务操作 (CURD)
4. json-server 应用了 RESTful 规范



### 特点

1. 只需要关心请求方式是什么, 不用过多关注于 url 本身



### HTTP方法规则举例

| HTTP方法 | 数据处理 | 说明                        |
| -------- | -------- | --------------------------- |
| POST     | Create   | 新增 xx 资源                |
| GET      | Read     | 获取 xx 资源                |
| PUT      | Update   | 更新 xx资源, 或新增 xx 资源 |
| DELETE   | Delete   | 删除 xx 资源                |

