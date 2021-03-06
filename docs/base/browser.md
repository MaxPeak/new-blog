## 基础

### 解析代码

- 词（token）是如何被拆分的

  ```html
  <p class="a">text text text</p>
  ```

  解析成 token 大概是这样

  - <p“标签开始”的开始
  - class=“a” 属性
  - \> “标签开始”的结束
  - text text text 文本
  - <\/p> 标签结束

  实际上，我们每读入一个字符，其实都要做一次决策，而且这些决定是跟“当前状态”有关的。在这样的条件下，浏览器工程师要想实现把字符流解析成词（token），最常见的方案就是使用状态机

- 状态机
  - 绝大多数语言的词法部分都是用状态机实现的
  - [HTML 官方文档](https://html.spec.whatwg.org/multipage/parsing.html#tokenization)
  - 通过状态机，把字符流拆成 token 了

### 构建 DOM 树

- [HTML 的解析规则](https://html.spec.whatwg.org/multipage/parsing.html#tree-construction)
- 构建过程
  - 浏览器会尽量流式处理整个过程
  - 从父到子，从先到后，一个一个节点构建
  - 解析 css 的选择器规则，匹配对应的 dom
  - 把不含样式信息的 DOM 树应用 css 规则，变成包含样式信息的 DOM 树，并且根据样式信息，计算元素的位置和大小

### 渲染

- 把模型变成位图的过程

- 这里的渲染过程，是不会把子元素绘制到渲染的位图上的，这样，当父子元素的相对位置发生变化时，可以保证渲染的结果能够最大程度被缓存，减少重新渲染

### 合成

- 渲染过程不会把子元素渲染到位图上面，合成的过程，就是为一些元素创建一个“合成后的位图”（我们把它称为合成层），把一部分子元素渲染到合成的位图上面。

### 绘制

- 绘制是把“位图最终绘制到屏幕上，变成肉眼可见的图像”的过程，不过，一般来说，浏览器并不需要用代码来处理这个过程，浏览器只需要把最终要显示的位图交给操作系统即可

- 一般最终位图位于显存中，也有一些情况下，浏览器只需要把内存中的一张位图提交给操作系统或者驱动就可以了，这取决于浏览器运行的环境。不过无论如何，我们把任何位图合成到这个“最终位图”的操作称为绘制

- 计算机图形学中，我们使用的方案就是“脏矩形”算法，也就是把屏幕均匀地分成若干矩形区域

- 设置合适的矩形区域大小，可以很好地控制绘制时的消耗。设置过大的矩形会造成绘制面积增大，而设置过小的矩形则会造成计算复杂

## BOM

浏览器的 API 非常的多，这里只列举常用的

- location：导航栏位置信息
- history：导航栏历史信息
- navigator：浏览器的信息
- Storage：本地存储
  - 大小：小于 5M
  - localstorage：永久存在
  - sessionStorage：关闭标签页或者窗口删除
  - 同源
- IndexedDB：浏览器自带的事务型数据库系统
  - 大小
    - 全局限制：自己电脑硬盘的 50%
    - 组限制：全局限制的 20%
  - 永久存在
  - 同源
- Cookie
  - 大小：小于 4KB
  - 数量小于 20 个
  - 有效期为设置的值
  - 同源

## DOM

### Node

- Node 是 DOM 树继承关系的根节点，它定义了 DOM 节点在 DOM 树上的操作
  <img src="/Node.png" alt="Node关系图">
- 表示在 DOM 树中的关系的 API
  - parentNode
  - childNodes
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling
- 操作 DOM 的 API
  - appendChild
  - insertBefore
  - removeChild
  - replaceChild
- 高级 API
  - compareDocumentPosition 是一个用于比较两个节点中关系的函数
  - contains 检查一个节点是否包含另一个节点的函数
  - isEqualNode 检查两个节点是否完全相同
  - isSameNode 检查两个节点是否是同一个节点，实际上在 JavaScript 中可以用“===”
  - cloneNode 复制一个节点，如果传入参数 true，则会连同子元素做深拷贝
- 创建节点的 API
  - createElement
  - createTextNode
  - createCDATASection
  - createComment
  - createProcessingInstruction
  - createDocumentFragment
  - createDocumentType
- 操作 Node 属性 API
  - getAttribute
  - setAttribute
  - removeAttribute
  - hasAttribute
- 如果你追求极致的性能，还可以把 Attribute 当作节点
  - getAttributeNode
  - setAttributeNode
- 查找元素 API

  - querySelector
  - querySelectorAll
  - getElementById
  - getElementsByName
  - getElementsByTagName
  - getElementsByClassName
    :::tip
    1、getElementById、getElementsByName、getElementsByTagName、getElementsByClassName，这几个 API 的性能高于 querySelector

    2、getElementsByName、getElementsByTagName、getElementsByClassName 获取的集合并非数组，而是一个能够动态更新的集合
    :::

### 事件

:::tip
概述

事件来自输入设备，我们平时的个人设备上，输入设备有三种：键盘、鼠标、触摸屏

这其中，触摸屏和鼠标又有一定的共性，它们被称作 pointer 设备，所谓 pointer 设备，是指它的输入最终会被抽象成屏幕上面的一个点。但是触摸屏和鼠标又有一定区别，它们的精度、反应时间和支持的点的数量都不一样

我们认为我们能够“点击一个按钮”，实际上并非如此，我们只能够点击鼠标上的按钮或者触摸屏，是操作系统和浏览器把这个信息对应到了一个逻辑上的按钮，再使得它的视图对点击事件有反应，这就是捕获与冒泡

pointer 事件是由坐标控制，而键盘事件则由焦点系统控制

焦点系统也是视障用户访问的重要入口，所以设计合理的焦点系统是非常重要的产品需求，尤其是不少国家对可访问性有明确的法律要求
:::

- 捕获与冒泡

  - 捕获：从外向内
  - 冒泡：从内而外

- 自定义事件

  ```
  var evt = new Event("look", {"bubbles":true, "cancelable":false});
  document.dispatchEvent(evt);
  ```

- [事件分类](https://developer.mozilla.org/zh-CN/docs/Web/Events)

### Range

- Range API 是一个比较专业的领域，如果不做富文本编辑类的业务，不需要太深入
- Range API 表示一个 HTML 上的范围，这个范围是以文字为最小单位的，所以 Range 不一定包含完整的节点，它可能是 Text 节点中的一段，也可以是头尾两个 Text 的一部分加上中间的元素
- 我们通过 Range API 可以比节点 API 更精确地操作 DOM 树，凡是 节点 API 能做到的，Range API 都可以做到，而且可以做到更高性能，但是 Range API 使用起来比较麻烦，所以在实际项目中，并不常用，只有做底层框架和富文本编辑对它有强需求

### 遍历

- NodeIterator
- TreeWalker

### 命名空间

- 在 HTML 场景中，需要考虑命名空间的场景不多。最主要的场景是 SVG。创建元素和属性相关的 API 都有带命名空间的版本
- document
  - createElementNS
  - createAttributeNS
- Element
  - getAttributeNS
  - setAttributeNS
  - getAttributeNodeNS
  - setAttributeNodeNS
  - removeAttributeNS
  - hasAttributeNS
  - attributes.setNamedItemNS
  - attributes.getNamedItemNS
  - attributes.removeNamedItemNS
- 若要创建 Document 或者 Doctype，也必须要考虑命名空间问题。DOM 要求从 document.implementation 来创建
  - document.implementation.createDocument
  - document.implementation.createDocumentType

## CSSOM

```js
// 获取样式表
document.styleSheets;

// 插入规则
document.styleSheets[0].insertRule("p { color:pink; }", 0);

// 删除规则
document.styleSheets[0].removeRule(0);

// 获取特定的规则
document.styleSheets[0].cssRules;

// 获取计算后的样式
window.getComputedStyle();
```

### Rules 类型

- CSSStyleRule
- CSSCharsetRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSKeyframeRule
- CSSSupportsRule

### CSSOM View

CSSOM View 这一部分的 API，可以视为 DOM API 的扩展，它在原本的 Element 接口上，添加了显示相关的功能，这些功能，又可以分成三个部分

#### 窗口 API

- moveTo(x, y) 窗口移动到屏幕的特定坐标
- moveBy(x, y) 窗口移动特定距离
- resizeTo(x, y) 改变窗口大小到特定尺寸
- resizeBy(x, y) 改变窗口大小特定尺寸
- window.open('url','\_blank','windowsize')

#### 滚动 API

- 视图滚动 API
  - scrollX
  - scrollY
  - scroll(x, y)
  - scrollBy(x, y)
    :::tip
    大部分移动端浏览器都会采用一些性能优化，它和元素滚动不完全一样
    :::
- 元素滚动 API
  - scrollTop
  - scrollLeft
  - scrollWidth
  - scrollHeight
  - scroll(x, y)
  - scrollBy(x, y)
  - scrollIntoView(arg)

#### 布局 API

- 全局尺寸信息
  - innerHeight
  - innerWidth
  - outerHeight
  - outerWidth
  - devicePixelRatio
  - screen
- 元素的布局信息
  - getClientRects()
  - getBoundingClientRect()

## 输入 url 到页面渲染中间发生了什么

### 一、查找域名对应的 ip，找到服务器（DNS 域名解析）

- 1.在浏览器中查找(以谷歌为例，在 chrome://net-internals 里面的 dns 里面去查找域名对应的 ip)
- 2.在电脑系统里面查找(以 windows 系统为例，在 C:\Windows\System32\drivers\etc\hosts 文件查找对应 ip)
- 3.在路由器里面查找
- 4.在运营商查找
- 5.根(保存所有 ip 对应关系的服务器)

### 二、根据 ip 连接对应的服务器 tcp/ip 协议(三次握手，四次挥手)

- 1.三次握手，所谓的三次握手，是指建立一个 TCP 连接时，需要客户端和服务端总共发送三个包。三次握手的目的是连接服务器指定端口号，建立 TCP 连接，并同步连接双方的序列号和确认号并交接 TCP 窗口大小信息
  - (1)第一次握手：建立连接时，客户端 A 发送 SYN 包（SYN=j）到服务器 B，并进入 SYN_SEND 状态，等待服务器 B 确认
  - (2)第二次握手：服务器 B 收到 SYN 包，必须确认客户 A 的 SYN（ACK=j+1），同时自己也发送一个 SYN 包（SYN=k），即 SYN+ACK 包，此时服务器 B 进入 SYN_RECV 状态
  - (3)第三次握手：客户端 A 收到服务器 B 的 SYN+ACK 包，向服务器 B 发送确认包 ACK（ACK=k+1），此包发送完毕，客户端 A 和服务器 B 进入 ESTABLISHED 状态，完成三次握手
- 2.四次挥手，TCP 的连接的拆除需要发送四个包，因此称为四次挥手。客户端和服务端均可主动发起挥手动作
  - (1)客户端 A 发送一个 FIN，用来关闭客户端 A 到服务器 B 的数据传送
  - (2)服务器 B 收到 FIN，它发回一个 ACK，确认序号为收到的序号加 1，和 SYN 一样，一个 FIN 将占用一个序号
  - (3)服务器 B 关闭与客户端 A 的连接，发送一个 FIN 给客户端 A
  - (4)客户端 A 收到 FIN，它发回一个 ACK，确认序号为收到的序号加 1，和 SYN 一样，一个 FIN 将占用一个序号
    :::tip
    因为 TCP 是双全工的，因此每个方向必须单独进行关闭，因此会有四次挥手
    :::

### 三、服务器处理请求

- 1.静态资源处理，如果浏览器有缓存则使用缓存
- 2.接口请求处理

### 四、服务器返回给浏览器对应的响应结果

- 浏览器检测是否跨域，跨域则限制数据接收
- 检测静态资源是否有缓存，没有则写入缓存

### 五、浏览器渲染

- 1.处理 HTML 标记并构建 DOM 树
  - (1)转换(将字节转换成字符)：浏览器从磁盘或网络读取 HTML 的原始字节，并根据文件的指定编码（如 UTF-8）将它们转换成各个字符
  - (2)Tokenizing(确定 tokens)： 浏览器将字符串转换成 W3C HTML5 标准规定的各种 tokens，例如，`<html>`、`<body>`，以及其他尖括号内的字符串。每个 token 都具有特殊含义和一组规则
  - (3)词法分析(将 tokens 转换成节点)： 发出的标记转换成定义其属性和规则的“对象”
  - (4)DOM 构建： 最后，由于 HTML 标记定义不同标记之间的关系（一些标记包含在其他标记内），创建的对象链接在一个树数据结构内
    > 注意：此时 DOM 树只是捕获文档标记的属性和关系，但并没有告诉我们元素在渲染后呈现的外观，那是 CSSOM 的责任
- 2.处理 CSS 标记并构建 CSSOM 树
  - (1)与处理 HTML 时一样，我们需要将收到的 CSS 规则转换成某种浏览器能够理解和处理的东西。因此，我们会重复 HTML 过程，不过是为 CSS 而不是 HTML
- 3.将 DOM 与 CSSOM 合并成一个渲染树
  - (1)DOM 树与 CSSOM 树合并后形成渲染树，它只包含渲染网页所需的节点。遍历每个 DOM 树中的 node 节点，在 CSSOM 规则树中寻找当前节点的样式，生成渲染树
  - (2)布局计算每个对象的精确位置和大小
  - (3)最后一步是绘制，使用最终渲染树将像素渲染到屏幕上
- 4.根据渲染树来布局，以计算每个节点的几何信息
  - (1)到目前为止，我们计算了哪些节点应该是可见的以及它们的计算样式，但我们尚未计算它们在设备视口内的确切位置和大小---这就是“布局”阶段，也称为“reflow”
  - (2)为弄清每个对象在网页上的确切大小和位置，浏览器从渲染树的根节点开始进行遍历
  - (3)布局流程的输出是一个“盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸：所有相对测量值都转换为屏幕上的绝对像素
  - (4)最后，既然我们知道了哪些节点可见、它们的 computed styles 以及几何信息，我们终于可以将这些信息传递给最后一个阶段：将渲染树中的每个节点转换成屏幕上的实际像素。这一步通常称为"painting" or "rasterizing."
    > 注意：执行渲染树构建、布局和绘制所需的时间将取决于文档大小、应用的样式，以及运行文档的设备：文档越大，浏览器需要完成的工作就越多；样式越复杂，绘制需要的时间就越长（例如，单色的绘制开销“较小”，而阴影的计算和渲染开销则要“大得多”）
- 5.将各个节点绘制到屏幕上
- 补充：为构建渲染树，浏览器大体上完成了下列工作：
  - (1)从 DOM 树的根节点开始遍历每个可见节点
    - ① 某些节点不可见（例如脚本标记、元标记等），因为它们不会体现在渲染输出中，所以会被忽略
    - ② 某些节点通过 CSS 隐藏，因此在渲染树中也会被忽略。例如 span 节点上设置了“display: none”属性，所以也不会出现在渲染树中
  - (2)遍历每个可见节点，为其找到适配的 CSSOM 规则并应用它们。从选择器的右边往左边开始匹配，也就是从 CSSOM 树的子节点开始往父节点匹配(这就是为什么 css 选择器没有父级选择器的原因)
  - (3)发出带有内容及其计算样式的可见节点
    > 注意：visibility: hidden 与 display: none 是不一样的。前者隐藏元素，但元素仍占据着布局空间（即将其渲染成一个空框），而后者 (display: none) 将元素从渲染树中完全移除，元素既不可见，也不是布局的组成部分。(这就是为什么 display: none 没有过度效果的原因)

### 回流与重绘

- 当 render tree 中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘
- 当 render tree 中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如 background-color。则就叫称为重绘
  :::tip
  注意：回流必将引起重绘，而重绘不一定会引起回流。 我们需要明白，页面若发生回流则需要付出很高的代价
  :::
