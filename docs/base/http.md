## 基础

### HTTP 协议

- HTTP 标准由 IETF 组织制定，跟它相关的标准主要有两份
  - [HTTP1.1](https://tools.ietf.org/html/rfc2616)
  - [HTTP1.1](https://tools.ietf.org/html/rfc7234)
- HTTP 协议是基于 TCP 协议出现的，对 TCP 协议来说，TCP 协议是一条双向的通讯通道，HTTP 在 TCP 的基础上，规定了 Request-Response 的模式。这个模式决定了通讯必定是由浏览器端首先发起的

### HTTP 版本

- HTTP1.0

  默认是短链接，即请求任何一个资源，都会新开一个链接，也就是每次有要经历三次握手，四次挥手，非常消耗资源

- HTTP1.1
  - 持久连接
  - 请求管道化
  - 增加缓存处理（新的字段如 cache-control）
  - 增加 Host 字段、支持断点传输等
- HTTP2

  HTTP 2 是 HTTP 1.1 的升级版本，你可以查看它的[详情](https://tools.ietf.org/html/rfc7540)

  - 二进制分帧（不再以文本格式来传输）
  - 多路复用
  - 头部压缩
  - 服务器推送
  - 流量控制
  - 请求优先级设置
  - 应用层的重置连接
    :::tip
    无论是 HTTP1.0 还是 HTTP1.1 提出了 Pipelining 理论，还是会出现阻塞的情况。从专业的名词上说这种情况，叫做线头阻塞（Head of line blocking）简称：HOLB,HTTP2 解决了线头阻塞的问题（多路复用），并且在一些其他地方也做了优化处理
    :::

-

### HTTP Method（方法）

- GET:浏览器通过地址栏访问页面都是 GET 方法
- POST:表单提交产生 POST 方法
- HEAD:跟 GET 类似，只返回请求头，多数由 JavaScript 发起
- PUT:表示添加资源
- DELETE:表示删除资源
- CONNECT:多用于 HTTPS 和 WebSocket
- OPTIONS:一般用于调试，多数线上服务都不支持
- TRACE:一般用于调试，多数线上服务都不支持

### HTTP Status code（状态码）和 Status text（状态文本）

- 1xx 消息

  临时回应，表示客户端请继续

  基本上没遇到过 1xx 开头的状态码

- 2xx 成功

  200 表示请求成功，请求所希望的响应头或数据体将随此响应返回，这是最常见的状态码

- 3xx 重定向

  表示请求的目标有变化，希望客户端进一步处理

  - 301 永久重定向 一般是在网站已经迁移到新的网址的时候会用
  - 302 临时重定向 一般是网站或者网页 24—48 小时内临时移动到一个新的位置，这时候就要进行 302 跳转
  - 304 没有修改 一般是一个页面初次请求时成功后刷新页面再次请求时发生 表示客户端已经有缓存 服务端不再需要发送数据体过来 这是浏览器的缓存优化策略之一

- 4xx 客户端错误

  - 400 服务器不理解请求的语法 一般是请求参数错误会出现
  - 401 未授权 表示没有权限访问这接口 一般是做了权限处理的后台管理系统会用得比较多
  - 403 禁止请求 服务器拒绝了改客户端的请求
  - 404 未找到 这也是非常常见的一个状态码 比如你请求了服务器没有的页面/接口都会是此状态码

- 5xx 服务端错误

  - 500 服务器内部错误 一般发现此验证码是因为服务器内部的处理逻辑出现了错误 导致不能正常的返回应该的数据
  - 503 服务端暂时性错误，可以一会再试

### HTTP Head (HTTP 头)

HTTP 头可以看作一个键值对。原则上，HTTP 头也是一种数据，我们可以自由定义 HTTP 头和值。不过在 HTTP 规范中，规定了一些特殊的 HTTP 头，在 HTTP 标准中，有完整的请求 / 响应头规定

- Request Header

  |  Request Header   | 规定                                                                        |
  | :---------------: | --------------------------------------------------------------------------- |
  |      Accept       | 浏览器端接受的格式                                                          |
  |  Accept-Encoding  | 浏览器端接受的编码方式                                                      |
  |  Accept-Language  | 浏览器端接受的语言，用于服务端国际化支持                                    |
  |   Cache-Control   | 控制缓存的时效性                                                            |
  |    Connection     | 连接方式，如果是 keep-alive，且服务端支持，则会复用连接                     |
  |       Host        | HTTP 访问使用的域名                                                         |
  | If-Modified-Since | 上次访问时的更新时间，如果服务端认为此时间后自己没有更新，则会给出 304 响应 |
  |   If-None-Match   | 次访问时使用的 E-Tag，通常是页面的信息摘要，这个比更改时间更准确一些        |
  |    User-Agent     | 客户端标识                                                                  |
  |      Cookie       | 客户端存储的 cookie 信息                                                    |

- Response Header

  | Response Header  | 规定                                                             |
  | :--------------: | ---------------------------------------------------------------- |
  |  Cache-Control   | 控制缓存，用于通知各级缓存保存的时间，例如 max-age=0，表示不缓存 |
  |    Connection    | 连接类型，Keep-Alive 表示复用连接                                |
  | Content-Encoding | 内容编码方式，通常是 gzip                                        |
  |  Content-Length  | 内容的长度，有利于浏览器判断内容是否已经结束                     |
  |   Content-Type   | 内容类型                                                         |
  |       Date       | 当前的服务器时间                                                 |
  |       ETag       | 页面的信息摘要，用于判断是否需要重新到服务端取回页面             |
  |     Expires      | 过期时间，用于判断下次请求是否需要到服务端取回页面               |
  |    Keep-Alive    | 保持连续不断时需要的一些信息，如 timeout=5，max=100              |
  |  Last-Modified   | 页面上次修改的时间                                               |
  |      Server      | 服务端软件的类型                                                 |
  |    Set-Cookie    | 设置 cookie，可以存在多个                                        |
  |       Via        | 服务端的请求链路，对于一些调试场景非常重要                       |

### HTTP Request Body

常见格式

- application/json：json 数据默认是这种格式
- application/x-www-form-urlencoded：form 标签提交默认是这种格式
- multipart/form-data：上传文件默认是这种格式
- text/html：html 字符串默认是这种格式

### HTTPS

- 在 HTTP 协议的基础上，HTTPS 和 HTTP2 规定了更复杂的内容，但是它基本保持了 HTTP 的设计思想，即：使用上的 Request-Response 模式
- HTTPS 有两个作用，一是确定请求的目标服务端身份，二是保证传输的数据不会被网络中间节点窃听或者篡改
- HTTPS 的标准也是由 RFC 规定的，你可以查看它的[详情](https://tools.ietf.org/html/rfc2818)
- HTTPS 是在 HTTP 协议的基础上多加了一层 SSL 协议
- HTTPS 采用的是混合加密，过程如下
  - 用户向 web 服务器发起一个安全连接的请求
  - 服务器返回经过 CA 认证的数字证书，证书里面包含了服务器的 public key(公钥)
  - 用户拿到数字证书，用自己浏览器内置的 CA 证书解密得到服务器的 public key
  - 用户用服务器的 public key 加密一个用于接下来的对称加密算法的密钥，传给 web 服务器
  - 服务器拿到这个加密的密钥，解密获取密钥，再使用对称加密算法，和用户完成接下来的网络通信
- HTTPS 相比 HTTP 更安全
  - 所有信息都是加密传播，黑客无法窃听
  - 具有校验机制，一旦被篡改，通信双方会立刻发现
  - 配备身份证书，防止身份被冒充

## 网络协议

### DNS 协议

基于 UDP 协议，负责把域名解析成 IP

### IP 协议

IP 协议负责寻址

### TCP 协议

基于 IP 协议，负责数据的完整和有序

### HTTP 协议

基于 TCP 协议，负责应用层

### UDP 协议

基于 IP 协议，只管发和收，不管数据丢不丢

适合性能要求高，不在乎丢帧或者包足够小，不用分包的情况

- 游戏
- 语音聊天
- DNS(包足够小)

### TCP 协议

传输速度快，一般用户内部大文件传输

## 预检请求

### 什么是预检请求

在正常请求前先发送一个 options 的预检请求

### 为什么要发预检请求

因为同源策略的原因，浏览器会限制从脚本发起的跨域 http 请求，一般我们开发中会遇到，浏览器限制跨域的方式有两种：

- 浏览器限制发起跨域请求
- 跨域请求可以正常发起，但是返回的结果被浏览器拦截了

一般浏览器都是第二种方式限制跨域请求，那就是说请求已到达服务器，并有可能对数据库里的数据进行了操作，但是返回的结果被浏览器拦截了，那么我们就获取不到返回结果，这是一次失败的请求，但是可能对数据库里的数据产生了影响。为了防止这种情况的发生，规范要求，对这种可能对服务器数据产生副作用的 HTTP 请求方法，浏览器必须先使用 OPTIONS 方法发起一个预检请求，从而获知服务器是否允许该跨域请求：如果允许，就发送带数据的真实请求；如果不允许，则阻止发送带数据的真实请求

### 什么时候发预检请求

#### 简单请求

- GET
- DEAD
- POST

  Content-Type 值为下列之一时

  - text/plain
  - multipart/form-data
  - application/x-www-form-urlencoded

#### 需要预检的请求

“需预检的请求”要求必须首先使用 OPTIONS 方法发起一个预检请求到服务区，以获知服务器是否允许该实际请求。“预检请求”的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。当请求满足下述任一条件时，即应首先发送预检请求：

- 使用了下面任一 HTTP 方法:
  - PUT
  - DELETE
  - CONNECT
  - OPTIONS
  - TRACE
  - PATCH
- 人为设置了对 CORS 安全的首部字段集合之外的其他首部字段。该集合为:
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
  - Content-Type 的值不属于下列之一：
    - application/x-www-form-urlencoded
    - multipart/form-data
    - text/plain

## FESTful API

一套 api 的设计规范，主要是为了保证一套接口多端调用，语义化好

### 请求方式

- get：查询
- post：新增
- delete：删除
- put：修改

### 错误处理

```js
{
  err: "errMessage";
}
```

### 返回数据

- get：对应数据
- post：新增的数据
- delete：返回空
- put：修改后的数据

### 对应的 sql

- get：SELECT
- post：CREATE
- delete：DELETE
- put：UPDATE

### 对应的返回状态码

- get
  - 200：服务器成功返回用户请求的数据
- post
  - 201：用户新建成功
  - 400：用户请求错误，没有新建成功
  - 422：创建对象时发生了一个错误验证
- delete
  - 204 删除成功
- put
  - 201：用户修改成功
  - 400：用户请求错误，没有修改成功
  - 422：修改对象时发生了一个错误验证

### url 设计

> 动词+宾语

- 动词：就是请求方式 get/post/delete/put
- 宾语：就是请求方式和后面的 url 路径，一般是名词，尽量不使用动词
