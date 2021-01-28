## 三大特性

### 层叠性

> 相同属性相同优先级后者覆盖前者，不同优先级则是优先级高的覆盖优先级低的

```css{12}
// 同优先级
div {
  width: 100px;
  height: 100px;
  background-color: red;
}
div {
  background-color: green;
}
div {
  /* 最终结果为蓝色 */
  background-color: blue;
}
```

```css{6}
// 不同优先级
div {
  width: 100px;
  height: 100px;
  /* 最终结果为红色，因为!important权重值最大 */
  background-color: red !important;
}
#div {
  background-color: green;
}
.div {
  background-color: blue;
}
```

### 继承性

:::tip
所谓继承，是指父元素的样式继承给了子元素，在 css 中，所有属性都有继承属性，不过属性不同其默认值也不同，有些是默认继承，有些是默认不继承，这里罗列了一下默认继承的属性：

- 所有元素可继承：visibility、cursor
- 内联元素可继承：文本字体相关属性
- 块状元素可继承：text-indent、text-align
- 列表元素可继承：列表属性（如 list-style）
- 表格元素可继承：border-collapse

关于继承的四个通用属性值（都有不同程度的兼容性问题）

- inherit：继承父元素
- initial：重置为属性默认值
- unset：顾名思义，不设置，如果该属性默认继承，其值就是 inherit，否者其实就是 initial
- revert：使用默认值，如果用户设置了就是用户设置的值，否者就是 unset

:::

```html
<div class="demo1"></div>
```

```css{15}
.demo1 {
  position: relative;
  width: 200px;
  height: 200px;
  background-image: url("./images/demo.jpg");
  margin-bottom: 200px;
}
.demo1::after {
  position: absolute;
  width: inherit;
  height: inherit;
  left: 0;
  bottom: -100%;
  /* 继承背景图 */
  background-image: inherit;
  transform: rotateX(180deg);
  content: "";
}
```

```html
<div class="parent">
  parent
  <div class="child">child</div>
</div>
```

```css{9}
.parent {
  width: 200px;
  height: 50px;
  border: 1px solid #c9c9c9;
  font-weight: bold;
}
.child {
  /* 设置为默认值，否者这里会继承父元素的bold */
  font-weight: initial;
}
```

```html
<div class="parent">
  <div class="child">child1</div>
  <div class="child">child2</div>
</div>
```

```css{16}
.parent {
  position: relative;
  width: 300px;
  height: 100px;
  border: 1px solid #c9c9c9;
}
.child {
  position: absolute;
  left: 0;
  top: 0;
  background-color: skyblue;
  color: #fff;
}
.child + .child {
  /* 因为left，默认是不继承，所以这里unset等于initial，也就是默认的初始值，如果这里不设置为初始值那么会因为left和right都设置为0导致元素被拉倒与父元素等宽 */
  left: unset;
  right: 0;
}
```

### 优先级

:::tip
就像前面层叠性说的一样，不同优先级则是优先级高的覆盖优先级低的，那么优先级的顺序是怎样的呢`!important>行内样式>id选择器>类选择器/伪类选择器>标签选择器>通配符>继承`,下面是不同类型的权重值：

- 继承和通配符的权重为**0**
- 标签选择器的权重为**1**
- 类选择器、伪类选择器的权重为**10**
- id 选择器的权重为**100**
- id 选择器的权重为**100**
- 行内样式的权重为**1000**
- `!important`的权重为**无限大**

不同选择器之间的组合，他们的权重值累加即可，权重值越大，优先级越高
:::

## 常用的选择器

### 基本选择器

- class 选择器`.class`
- id 选择器`#id`
- 元素选择器`div`
- 属性选择器
  - `[attr]`表示带有 attr 属性的元素
  - `[attr=value]`表示带有 attr 属性,且属性值为 value 的元素
  - `[attr~=value]`表示带有 attr 属性，且属性值是一个以空格作为分隔的值列表，其中[至少]一个值匹配 value 的元素
  - `[attr|=value]`表示带有 attr 属性，且属性值为 value 或者以 value-为前缀开头的元素
  - `[attr^=value]`表示带有 attr 属性的元素，且属性值以 value 开头的元素
  - `[attr$=value]`表示带有 attr 属性的元素，且属性值以 value 结尾的元素
  - `[attr*=value]`表示带有 attr 属性的元素，且属性值包含 value 元素
  - `[attr operator value i]`忽略大小写匹配
- 通配符选择器`*`

### 组合选择器

- 子级选择器`A>B`
- 后代选择器`A B`
- 相邻选择器`A+B`
- 兄弟选择器`A~B`
- 交集选择器`AB`
- 并集选择器`A,B`

### 伪类选择器

- `:active`
- `:checked`
- `:disabled`
- `:focus`
- `:hover`
- `:first-child`
- `:last-child`
- `:nth-child`
- `:not`

### 伪元素选择器

- `::before`
- `::after`
- `::placeholder`

## 盒模型

### 盒模型组成

- 元素的内容
- 内边距(padding)
- 边框(border)
- 外边距(margin)

### 标准盒模型

box = content+padding+margin+border

### 怪异盒模型

box = content(padding+margin+border)

- 盒模型转换通过`box-sizing`实现
  - content-box：标准盒模型
  - border-box：怪异盒模型
- 为了方便计算一般用`border-box`

## 排版流

- 正常文档流：从上到下，从左到右
- 脱离文档流：不在占据原来的空间，可以遮盖正常文档流的元素，类似于地对空的关系，`position:absolute/fixed`和`flot:left/right`会使元素脱离文档流

## 格式化上下文

### BFC：块级格式化上下文

- 形成条件

  - display:block
  - 包含 FBC 元素的元素
  - flot:left/right
  - position:position/fixed
  - 非块级元素具有 display: inline-block，table-cell, table-caption, flex, inline-flex
  - 块级元素具有 overflow ，且值不是 visible

- 布局规则

  - 内部的 Box 会在垂直方向，一个接一个地放置
  - Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
  - 每个元素的左外边缘（margin-left)， 与包含块的左边（contain box left）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的 BFC
  - BFC 的区域不会与 float box 重叠
  - BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
  - 计算 BFC 的高度时，浮动元素也参与计算

- 用处

  - 清除浮动
  - 自适应两栏布局
  - 防止垂直 margin 合并

### IFC：行内格式化上下文

- 形成条件

  - display:inline/inline-block

- 布局规则

  - 在一个行内格式化上下文中，盒是一个接一个水平放置的，从包含块的顶部开始
  - 水平方向上的 margin，border 和 padding 在框之间得到保留
  - 框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的**基线**对齐

- 去除行内元素间隙的方法

  - display:block
  - vertical-align:bottom

## 书写顺序

目的：减少浏览器回流，提升浏览器渲染 dom 的性能

### 位置属性

- `position`
- `left`
- `right`
- `top`
- `bottom`
- `display`
- `overflow`
- `float`
- `clear`
- `z-index`

### 盒模型属性

- `width`
- `height`
- `padding`
- `margin`
- `border`
- `background`

### 文字文本属性

- `font`系列
- `text`系列
- ...

### css3 的一些新属性

- `content`
- `box-shadow`
- `border-radius`
- `transform`
- `transtion`
- `animation`
- ...

## 常用函数

- calc：计算函数
- attr：属性访问函数
- var：使用变量

  ```css
  :root {
    --main-color: #06c;
    --accent-color: #006;
  }
  #foo h1 {
    color: var(--main-color);
  }
  ```

## 常用@规则

- @import：导入 css
- @media：媒体查询器
- @keyframes：定义动画
- @fontface：字体图标设置

## 命名规范

### BEM

> Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论

> \- 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号

> \_\_ 双下划线：双下划线用来连接块和块的子元素

> \_ 单下划线：单下划线用来描述一个块或者块的子元素的一种状态

```html
<div class="article">
  <div class="article__body">
    <!-- 层级最好不要超过三层，名字太长，增加阅读理解的难度 -->
    <button class="article__button--primary"></button>
    <button class="article__button--success"></button>
  </div>
</div>
```

## 最佳实践

### 原子 css

> 有点：减小项目 css 打包体积，样式能统一管理

> 不足：需要记住不同的样式对应的类名，优先级的处理不方便

```css
/* 原子 CSS */
.bw-2x {
  border-width: 2px;
}
.bss {
  border-style: solid;
}
.sans {
  font-style: sans-serif;
}
.p-1x {
  padding: 10px;
}
/* 不是原子 CSS 因为这个类包含了两个规则 */
.p-1x-sans {
  padding: 10px;
  font-style: sans-serif;
}
```
