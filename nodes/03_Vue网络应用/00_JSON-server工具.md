## JSON-server

### 说明

1. 可以快速把一个 json 文件托管成一个 web 服务器 (提供API)



### 特点

1. 基于 Express, 支持 CORS 和 JSONP 跨域请求, 支持 GET, POST, PUT 和 DELETE 方法



### 使用

```json
// 1. 安装 json-server 工具
npm i -g json-server

// 2. 启动
// 创建一个目录 server, 在该目录下创建一个 json 文件, db.json
// 在 server 目录下执行
json-server --watch db.json

// 指定端口运行 (默认 3000 端口)
json-server --watch --port 3002 db.json
```



### 测试

db.json 测试内容

```
{
  "students": [
    {"name": "johny", "age": 12, "sex": "女"},
    {"name": "anson", "age": 12, "sex": "男"},
    {"name": "jock", "age": 24, "sex": "男"}
  ]
}
```

当我们开启 json-server 后, 在浏览器访问 <http://localhost:3000/students>  时, 可以得到

```json
[
  {
    "name": "johny",
    "age": 12,
    "sex": "女"
  },
  {
    "name": "anson",
    "age": 12,
    "sex": "男"
  },
  {
    "name": "jock",
    "age": 24,
    "sex": "男"
  }
]
```



