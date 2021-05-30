## 基础

```html
<!-- 文档类型声明 html5 -->
<!DOCTYPE html>

<!-- 网页所有内容 -->
<html lang="en">
  <!-- head 标签本身并不携带任何信息，它主要是作为盛放其它语义类标签的容器使用 -->
  <!-- head 标签规定了自身必须是 html 标签中的第一个标签，它的内容必须包含一个 title 标签。如果文档作为 iframe，或者有其他方式指定了文档标题时，可以允许不包含 title 标签 -->
  <head>
    <!-- meta 标签是一组键值对，它是一种通用的元信息表示标签 -->
    <!-- 在 head 中可以出现任意多个 meta 标签。一般的 meta 标签由 name 和 content 两个属性来定义。name 表示元信息的名，content 则用于表示元信息的值 -->
    <!-- 所谓元信息，是指描述自身的信息，元信息类标签，就是 HTML 用于描述文档自身的一类标签，它们通常出现在 head 标签中，一般都不会在页面被显示出来 -->
    <!-- 元信息多数情况下是给浏览器、搜索引擎等机器阅读的，有时候这些信息会在页面之外显示给用户，有时候则不会. -->

    <!-- 具有 charset 属性的 meta，表示文档的编码格式，非常重要，网页必备 -->
    <meta charset="UTF-8" />

    <!-- name 为 viewport 的 meta，移动端开发必备的标签，具有以下属性，可全部设置，用逗号隔开 -->
    <!-- width：页面宽度，可以取值具体的数字，也可以是device-width，表示跟设备宽度相等 -->
    <!-- height：页面高度，可以取值具体的数字，也可以是 device-height，表示跟设备高度相等 -->
    <!-- initial-scale：初始缩放比例 -->
    <!-- minimum-scale：最小缩放比例 -->
    <!-- maximum-scale：最大缩放比例 -->
    <!-- user-scalable：是否允许用户缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- 具有 http-equiv 属性的 meta，表示执行一个命令 -->
    <!-- X-UA-Compatible 值为 IE=edge,chrome=1，默认使用最新的浏览器 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- 具有 keywords 属性的 meta，表示页面关键字，用于 SEO -->
    <meta keywords="keywords" />

    <!-- 具有 description 属性的 meta，表示页面描述，用于 SEO -->
    <meta description="description" />

    <!-- title 标签表示文档的标题 -->
    <title>网页标题</title>
  </head>

  <!-- 网页呈现出来的内容 -->
  <body>
    <!-- 行内元素 -->
    <!-- display:inline; -->
    <!-- 不会独占一行 -->
    <!-- 设置宽高无效 -->
    <!-- 只有左右 margin/padding 有效 -->
    <!-- 宽高为内容撑开 -->
    <!-- 只能容纳其他行内元素或者文本，a 标签可以容纳所有元素 -->
    <a href="/">超链接</a>
    <span>文本</span>

    <!-- 块元素 -->
    <!-- display:block; -->
    <!-- 独占一行 -->
    <!-- 设置宽高有效，宽度默认 100% -->
    <!-- margin、padding 有效 -->
    <!-- 可以容纳所有类型的元素 -->
    <!-- p 标签不能容纳 p 标签 -->
    <div>块元素</div>
    <p>段落</p>

    <!-- 行内块元素 -->
    <!-- display:inline-block; -->
    <!-- 不会独占一行 -->
    <!-- 设置宽高有效，不设置为内容撑开 -->
    <!-- margin、padding 有效 -->
    <!-- 可以容纳所有类型的元素 -->
    <img src="image-narrow.png" />

    <!-- picture 元素可以根据屏幕的条件为其中的 img 元素提供不同的源 -->
    <picture>
      <!-- 这里的 media 属性是 media query，跟 CSS 的 @media 规则一致 -->
      <source srcset="image-wide.png" media="(min-width: 600px)" />
      <img src="image-narrow.png" />
    </picture>

    <!-- video 标签兼容处理 -->
    <video controls="controls">
      <source src="movie.webm" type="video/webm" />
      <source src="movie.ogg" type="video/ogg" />
      <source src="movie.mp4" type="video/mp4" />
      You browser does not support video.
    </video>

    <!-- audio 标签兼容处理 -->
    <audio controls="controls">
      <source src="song.mp3" type="audio/mpeg" />
      <source src="song.ogg" type="audio/ogg" />
      <p>You browser does not support audio.</p>
    </audio>
  </body>
</html>
```

## 语义化标签

### 布局类

- div：代表用于没有对应的语义化标签时使用
- header：页头
- footer：页尾
- main：主体内容
- section：一个页面模块
- nav：导航
- aside：侧边栏
- ul/li：无序列表

### 文本类

- h1-h6：标题
- hgroup：标题组
- p：段落
- b：强调重要部分
- span：一般用于包裹文字

### 媒体资源类

- a：链接
- i：一般用于字体图标
- img：图片
- figure/img/figcaption：图文组合
- audio/source：音频
- video/source：视频

### 脚本类

- script：脚本
- noscript：脚本不支持时的占位
- canvas：画布

### 表格类

- table：表格主体
- caption：表格标题
- thead：表格头部
- tbody：表格内容
- tfoot：表格尾部
- tr：行
- td：单元格
- th：用于 thead 中代替 td
- colgroup/col：不会渲染，多用于集中控制表格中的单元格

### 表单类

- form：表单主体
- label：配合表单元素使用，方便聚焦
- input：输入框，包括多种形态
- textarea：文本域
- select/optgroup/option：下拉框
- button：按钮

### Web 组件

- element
- template
- slot

## 常用属性

### 全局标签属性

- class：类名，可重复
- id：唯一标识符，不可重复
- style：行内样式
- lang：规定语言类型
- tabindex：是否获取焦点
  - 负值表示该元素应该是可聚焦的，但不应通过顺序键盘导航到达
  - 0 表示元素应通过顺序键盘导航可聚焦和可到达，但其相对顺序由平台约定定义
  - 正值意味着元素应该可以通过顺序键盘导航进行聚焦和访问;元素聚焦的顺序是 tabindex 的增加值。如果多个元素共享相同的 tabindex，则它们的相对顺序遵循它们在文档中的相对位置
- title：表示元素相关信息的文本，鼠标移入元素显示
- contenteditable：可编辑
- draggable：可拖拽
- data-\*：自定义属性，常用于储存一些数据
- hidden：浏览器不会呈现此类元素。不得使用此属性隐藏可合法显示的内容
- spellcheck：是否检查拼写错误
- translate：是否能被翻译

### 需要特殊记忆的标签属性

- img
  - alt：在图片无法呈现时的替代文本（**建议必写**）
- script
  - async：异步加载，一旦下载完，渲染引擎就会中断渲染，执行这个脚本
  - defer：异步加载，页面正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），在执行脚本
  - type="module"：ESModule 要引入模块必须加这个
  - 总结
    - 没有`defer`或`async`属性，浏览器会立即下载并执行相应的脚本，并且在下载和执行时页面的处理会停止
    - 有了`defer`属性，浏览器会立即下载相应的脚本，在下载的过程中页面的处理不会停止，等到文档解析完成后脚本才会执行
    - 有了`async`属性，浏览器会立即下载相应的脚本，在下载的过程中页面的处理不会停止，下载完成后立即执行，执行过程中页面处理会停止
    - 如果同时指定了两个属性，则会遵从`async`属性而忽略`defer`属性
    - 多个有`defer`属性的`script`标签会按照顺序执行
    - 多个有`async`属性的`script`标签不一定按照顺序执行
    - `head`标签中的`script`标签如何不依赖执行顺序，可以设置`async`属性异步加载并执行
    - `head`标签中的`script`标签最好加上`defer`属性，这样不会阻塞浏览器，达到优化用户体验的目的
- textarea
  - wrap：换行模式，默认为 soft
    - hard：在文本到达元素最大宽度的时候，浏览器自动插入换行符(CR+LF)
    - soft：在到达元素最大宽度的时候，不会自动插入换行符
- canvas
  - height/width：设置宽高（**不要使用 css 来控制 canvas 的宽高，会导致 canvas 内容变形**）
- input/type="file"
  - multiple：文件多选
  - webkitdirectory：上传文件夹
  - accept：限制文件[MIME 类型](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
- 表单元素
  - autofocus：自动聚焦（**只会在页面加载时执行一次**）

## emmet 常用速写规则

### 随机文本操作符 Lorem

```html
<!-- 常规 -->
<div>Lorem</div>
<!-- 指定单词数量 -->
<div>Lorem10</div>
```

```html
<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro enim
  impedit voluptatibus? Asperiores aut in placeat sed numquam harum nesciunt
  esse doloremque a vero! Atque quaerat nostrum ad possimus.
</div>

<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus!
</div>
```

### 嵌套操作符

- 子代操作符 >

```html
div>div
```

```html
<div>
  <div></div>
</div>
```

- 乘法操作符 \*

```html
ul>li*5
```

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

- 分组操作符 ()

```html
(header>nav)+(main>section)+(footer)
```

```html
<header>
  <nav></nav>
</header>
<main>
  <section></section>
</main>
<footer></footer>
```

### 属性操作符

- id 操作符 #

```html
div#test
```

```html
<div id="test"></div>
```

- class 操作符 .

```html
div.test
```

```html
<div class="test"></div>
```

- 属性操作符 []

```html
a[href title target] div[class='test' id="test"]
```

```html
<a href="" title="" target=""></a>
<div class="test" id="test"></div>
```

- 数值计算操作符 \$

```html
<!-- 常规 -->
ul>li.item-$*3
<!-- 指定开始数字 $后面紧跟@符号指定开始数字 -->
ul>li.item-$@3*3
```

```html
<ul>
  <li class="item-1"></li>
  <li class="item-2"></li>
  <li class="item-3"></li>
</ul>
<ul>
  <li class="item-3"></li>
  <li class="item-4"></li>
  <li class="item-5"></li>
</ul>
```

- 文本操作符 {}

```html
div{content}
```

```html
<div>content</div>
```

## 可访问性(ARIA)

### 可访问性是什么

是为了方便结合屏幕阅读器等辅助工具给障碍人士带来便利的一套机制[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/What_is_accessibility)

### 什么时候需要给网页添加可访问性

国内目前只有开源的组件库添加了可访问性，据说很多国外的都法律都要求必须给网页添加可访问性

[WAI-ARIA 基础](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility/WAI-ARIA_basics)

### 三大特征

- 角色（role）：这定义了元素是干什么的
- 属性：我们能通过定义一些属性给元素，让他们具备更多的语义
- 状态：用于表达元素当前的条件的特殊属性

### 解决哪些问题

- 超出 HTML5 的语义话
- 动态内容的更新
- 优化键盘的无障碍操作
- 非语义控件的语义化

## Web component

### 什么是 Web component

Web component 是 W3C 正在向 HTML 和 DOM 规范添加的一套功能

### 作用是什么

作用是为了增加单个 HTML 元素的封装和操作性，提升 html,css,js 的组合逻辑复用能力，可以理解为浏览器原生版本的 Vue

### 主要组成

- 自定义元素 - 定义新 HTML 元素的 API
- 影子 DOM - 封装的 DOM 和样式，配以组合化
- HTML 导入 - 将 HTML 文档导入其他文档的声明方法
- HTML 模板 - `<template>`元素，允许文档包含惰性的 DOM 块

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
