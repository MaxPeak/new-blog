import{a as n,b as a,G as s}from"./framework.299d0cbd.js";const t='{"title":"三大特性","description":"","frontmatter":{},"headers":[{"level":2,"title":"三大特性","slug":"三大特性"},{"level":3,"title":"层叠性","slug":"层叠性"},{"level":3,"title":"继承性","slug":"继承性"},{"level":3,"title":"优先级","slug":"优先级"},{"level":2,"title":"常用的选择器","slug":"常用的选择器"},{"level":3,"title":"基本选择器","slug":"基本选择器"},{"level":3,"title":"组合选择器","slug":"组合选择器"},{"level":3,"title":"伪类选择器","slug":"伪类选择器"},{"level":3,"title":"伪元素选择器","slug":"伪元素选择器"},{"level":2,"title":"盒模型","slug":"盒模型"},{"level":3,"title":"盒模型组成","slug":"盒模型组成"},{"level":3,"title":"标准盒模型","slug":"标准盒模型"},{"level":3,"title":"怪异盒模型","slug":"怪异盒模型"},{"level":2,"title":"排版流","slug":"排版流"},{"level":2,"title":"格式化上下文","slug":"格式化上下文"},{"level":3,"title":"BFC：块级格式化上下文","slug":"bfc：块级格式化上下文"},{"level":3,"title":"IFC：行内格式化上下文","slug":"ifc：行内格式化上下文"},{"level":2,"title":"书写顺序","slug":"书写顺序"},{"level":3,"title":"位置属性","slug":"位置属性"},{"level":3,"title":"盒模型属性","slug":"盒模型属性"},{"level":3,"title":"文字文本属性","slug":"文字文本属性"},{"level":3,"title":"css3 的一些新属性","slug":"css3-的一些新属性"},{"level":2,"title":"常用函数","slug":"常用函数"},{"level":2,"title":"常用@规则","slug":"常用-规则"},{"level":2,"title":"命名规范","slug":"命名规范"},{"level":3,"title":"BEM","slug":"bem"},{"level":2,"title":"最佳实践","slug":"最佳实践"},{"level":3,"title":"原子 css","slug":"原子-css"}],"relativePath":"base/css.md","lastUpdated":1611830095976}',p={},e=s('<h2 id="三大特性"><a class="header-anchor" href="#三大特性" aria-hidden="true">#</a> 三大特性</h2><h3 id="层叠性"><a class="header-anchor" href="#层叠性" aria-hidden="true">#</a> 层叠性</h3><blockquote><p>相同属性相同优先级后者覆盖前者，不同优先级则是优先级高的覆盖优先级低的</p></blockquote><div class="language-css"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br></div><pre><code><span class="token selector">// 同优先级\ndiv</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">div</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">div</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* 最终结果为蓝色 */</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-css"><div class="highlight-lines"><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br><br><br><br></div><pre><code><span class="token selector">// 不同优先级\ndiv</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token comment">/* 最终结果为红色，因为!important权重值最大 */</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">#div</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.div</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="继承性"><a class="header-anchor" href="#继承性" aria-hidden="true">#</a> 继承性</h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>所谓继承，是指父元素的样式继承给了子元素，在 css 中，所有属性都有继承属性，不过属性不同其默认值也不同，有些是默认继承，有些是默认不继承，这里罗列了一下默认继承的属性：</p><ul><li>所有元素可继承：visibility、cursor</li><li>内联元素可继承：文本字体相关属性</li><li>块状元素可继承：text-indent、text-align</li><li>列表元素可继承：列表属性（如 list-style）</li><li>表格元素可继承：border-collapse</li></ul><p>关于继承的四个通用属性值（都有不同程度的兼容性问题）</p><ul><li>inherit：继承父元素</li><li>initial：重置为属性默认值</li><li>unset：顾名思义，不设置，如果该属性默认继承，其值就是 inherit，否者其实就是 initial</li><li>revert：使用默认值，如果用户设置了就是用户设置的值，否者就是 unset</li></ul></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-css"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="token selector">.demo1</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./images/demo.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.demo1::after</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>\n  <span class="token comment">/* 继承背景图 */</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  parent\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-css"><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br></div><pre><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #c9c9c9<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* 设置为默认值，否者这里会继承父元素的bold */</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>child1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>child2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-css"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br></div><pre><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #c9c9c9<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child + .child</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* 因为left，默认是不继承，所以这里unset等于initial，也就是默认的初始值，如果这里不设置为初始值那么会因为left和right都设置为0导致元素被拉倒与父元素等宽 */</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="优先级"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>就像前面层叠性说的一样，不同优先级则是优先级高的覆盖优先级低的，那么优先级的顺序是怎样的呢<code>!important&gt;行内样式&gt;id选择器&gt;类选择器/伪类选择器&gt;标签选择器&gt;通配符&gt;继承</code>,下面是不同类型的权重值：</p><ul><li>继承和通配符的权重为<strong>0</strong></li><li>标签选择器的权重为<strong>1</strong></li><li>类选择器、伪类选择器的权重为<strong>10</strong></li><li>id 选择器的权重为<strong>100</strong></li><li>id 选择器的权重为<strong>100</strong></li><li>行内样式的权重为<strong>1000</strong></li><li><code>!important</code>的权重为<strong>无限大</strong></li></ul><p>不同选择器之间的组合，他们的权重值累加即可，权重值越大，优先级越高</p></div><h2 id="常用的选择器"><a class="header-anchor" href="#常用的选择器" aria-hidden="true">#</a> 常用的选择器</h2><h3 id="基本选择器"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h3><ul><li>class 选择器<code>.class</code></li><li>id 选择器<code>#id</code></li><li>元素选择器<code>div</code></li><li>属性选择器 <ul><li><code>[attr]</code>表示带有 attr 属性的元素</li><li><code>[attr=value]</code>表示带有 attr 属性,且属性值为 value 的元素</li><li><code>[attr~=value]</code>表示带有 attr 属性，且属性值是一个以空格作为分隔的值列表，其中[至少]一个值匹配 value 的元素</li><li><code>[attr|=value]</code>表示带有 attr 属性，且属性值为 value 或者以 value-为前缀开头的元素</li><li><code>[attr^=value]</code>表示带有 attr 属性的元素，且属性值以 value 开头的元素</li><li><code>[attr$=value]</code>表示带有 attr 属性的元素，且属性值以 value 结尾的元素</li><li><code>[attr*=value]</code>表示带有 attr 属性的元素，且属性值包含 value 元素</li><li><code>[attr operator value i]</code>忽略大小写匹配</li></ul></li><li>通配符选择器<code>*</code></li></ul><h3 id="组合选择器"><a class="header-anchor" href="#组合选择器" aria-hidden="true">#</a> 组合选择器</h3><ul><li>子级选择器<code>A&gt;B</code></li><li>后代选择器<code>A B</code></li><li>相邻选择器<code>A+B</code></li><li>兄弟选择器<code>A~B</code></li><li>交集选择器<code>AB</code></li><li>并集选择器<code>A,B</code></li></ul><h3 id="伪类选择器"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h3><ul><li><code>:active</code></li><li><code>:checked</code></li><li><code>:disabled</code></li><li><code>:focus</code></li><li><code>:hover</code></li><li><code>:first-child</code></li><li><code>:last-child</code></li><li><code>:nth-child</code></li><li><code>:not</code></li></ul><h3 id="伪元素选择器"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h3><ul><li><code>::before</code></li><li><code>::after</code></li><li><code>::placeholder</code></li></ul><h2 id="盒模型"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h2><h3 id="盒模型组成"><a class="header-anchor" href="#盒模型组成" aria-hidden="true">#</a> 盒模型组成</h3><ul><li>元素的内容</li><li>内边距(padding)</li><li>边框(border)</li><li>外边距(margin)</li></ul><h3 id="标准盒模型"><a class="header-anchor" href="#标准盒模型" aria-hidden="true">#</a> 标准盒模型</h3><p>box = content+padding+margin+border</p><h3 id="怪异盒模型"><a class="header-anchor" href="#怪异盒模型" aria-hidden="true">#</a> 怪异盒模型</h3><p>box = content(padding+margin+border)</p><ul><li>盒模型转换通过<code>box-sizing</code>实现 <ul><li>content-box：标准盒模型</li><li>border-box：怪异盒模型</li></ul></li><li>为了方便计算一般用<code>border-box</code></li></ul><h2 id="排版流"><a class="header-anchor" href="#排版流" aria-hidden="true">#</a> 排版流</h2><ul><li>正常文档流：从上到下，从左到右</li><li>脱离文档流：不在占据原来的空间，可以遮盖正常文档流的元素，类似于地对空的关系，<code>position:absolute/fixed</code>和<code>flot:left/right</code>会使元素脱离文档流</li></ul><h2 id="格式化上下文"><a class="header-anchor" href="#格式化上下文" aria-hidden="true">#</a> 格式化上下文</h2><h3 id="bfc：块级格式化上下文"><a class="header-anchor" href="#bfc：块级格式化上下文" aria-hidden="true">#</a> BFC：块级格式化上下文</h3><ul><li><p>形成条件</p><ul><li>display:block</li><li>包含 FBC 元素的元素</li><li>flot:left/right</li><li>position:position/fixed</li><li>非块级元素具有 display: inline-block，table-cell, table-caption, flex, inline-flex</li><li>块级元素具有 overflow ，且值不是 visible</li></ul></li><li><p>布局规则</p><ul><li>内部的 Box 会在垂直方向，一个接一个地放置</li><li>Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠</li><li>每个元素的左外边缘（margin-left)， 与包含块的左边（contain box left）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的 BFC</li><li>BFC 的区域不会与 float box 重叠</li><li>BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此</li><li>计算 BFC 的高度时，浮动元素也参与计算</li></ul></li><li><p>用处</p><ul><li>清除浮动</li><li>自适应两栏布局</li><li>防止垂直 margin 合并</li></ul></li></ul><h3 id="ifc：行内格式化上下文"><a class="header-anchor" href="#ifc：行内格式化上下文" aria-hidden="true">#</a> IFC：行内格式化上下文</h3><ul><li><p>形成条件</p><ul><li>display:inline/inline-block</li></ul></li><li><p>布局规则</p><ul><li>在一个行内格式化上下文中，盒是一个接一个水平放置的，从包含块的顶部开始</li><li>水平方向上的 margin，border 和 padding 在框之间得到保留</li><li>框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的<strong>基线</strong>对齐</li></ul></li><li><p>去除行内元素间隙的方法</p><ul><li>display:block</li><li>vertical-align:bottom</li></ul></li></ul><h2 id="书写顺序"><a class="header-anchor" href="#书写顺序" aria-hidden="true">#</a> 书写顺序</h2><p>目的：减少浏览器回流，提升浏览器渲染 dom 的性能</p><h3 id="位置属性"><a class="header-anchor" href="#位置属性" aria-hidden="true">#</a> 位置属性</h3><ul><li><code>position</code></li><li><code>left</code></li><li><code>right</code></li><li><code>top</code></li><li><code>bottom</code></li><li><code>display</code></li><li><code>overflow</code></li><li><code>float</code></li><li><code>clear</code></li><li><code>z-index</code></li></ul><h3 id="盒模型属性"><a class="header-anchor" href="#盒模型属性" aria-hidden="true">#</a> 盒模型属性</h3><ul><li><code>width</code></li><li><code>height</code></li><li><code>padding</code></li><li><code>margin</code></li><li><code>border</code></li><li><code>background</code></li></ul><h3 id="文字文本属性"><a class="header-anchor" href="#文字文本属性" aria-hidden="true">#</a> 文字文本属性</h3><ul><li><code>font</code>系列</li><li><code>text</code>系列</li><li>...</li></ul><h3 id="css3-的一些新属性"><a class="header-anchor" href="#css3-的一些新属性" aria-hidden="true">#</a> css3 的一些新属性</h3><ul><li><code>content</code></li><li><code>box-shadow</code></li><li><code>border-radius</code></li><li><code>transform</code></li><li><code>transtion</code></li><li><code>animation</code></li><li>...</li></ul><h2 id="常用函数"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h2><ul><li><p>calc：计算函数</p></li><li><p>attr：属性访问函数</p></li><li><p>var：使用变量</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--main-color</span><span class="token punctuation">:</span> #06c<span class="token punctuation">;</span>\n  <span class="token property">--accent-color</span><span class="token punctuation">:</span> #006<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">#foo h1</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li></ul><h2 id="常用-规则"><a class="header-anchor" href="#常用-规则" aria-hidden="true">#</a> 常用@规则</h2><ul><li>@import：导入 css</li><li>@media：媒体查询器</li><li>@keyframes：定义动画</li><li>@fontface：字体图标设置</li></ul><h2 id="命名规范"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h2><h3 id="bem"><a class="header-anchor" href="#bem" aria-hidden="true">#</a> BEM</h3><blockquote><p>Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论</p></blockquote><blockquote><p>- 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号</p></blockquote><blockquote><p>__ 双下划线：双下划线用来连接块和块的子元素</p></blockquote><blockquote><p>_ 单下划线：单下划线用来描述一个块或者块的子元素的一种状态</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>article<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>article__body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- 层级最好不要超过三层，名字太长，增加阅读理解的难度 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>article__button--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>article__button--success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="最佳实践"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="原子-css"><a class="header-anchor" href="#原子-css" aria-hidden="true">#</a> 原子 css</h3><blockquote><p>有点：减小项目 css 打包体积，样式能统一管理</p></blockquote><blockquote><p>不足：需要记住不同的样式对应的类名，优先级的处理不方便</p></blockquote><div class="language-css"><pre><code><span class="token comment">/* 原子 CSS */</span>\n<span class="token selector">.bw-2x</span> <span class="token punctuation">{</span>\n  <span class="token property">border-width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.bss</span> <span class="token punctuation">{</span>\n  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.sans</span> <span class="token punctuation">{</span>\n  <span class="token property">font-style</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.p-1x</span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/* 不是原子 CSS 因为这个类包含了两个规则 */</span>\n<span class="token selector">.p-1x-sans</span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n  <span class="token property">font-style</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',65);p.render=function(s,t,p,o,l,c){return n(),a("div",null,[e])};export default p;export{t as __pageData};
