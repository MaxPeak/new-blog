import{a as l,b as i,G as a}from"./framework.299d0cbd.js";const e='{"title":"DNS 优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"DNS 优化","slug":"dns-优化"},{"level":2,"title":"HTTP 优化","slug":"http-优化"},{"level":2,"title":"图片优化","slug":"图片优化"},{"level":2,"title":"少加载文件","slug":"少加载文件"},{"level":2,"title":"少执行代码","slug":"少执行代码"},{"level":2,"title":"骨架屏","slug":"骨架屏"}],"relativePath":"base/optimize.md","lastUpdated":1611830599133}',s={},t=a('<h2 id="dns-优化"><a class="header-anchor" href="#dns-优化" aria-hidden="true">#</a> DNS 优化</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dns-prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//xxx.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="http-优化"><a class="header-anchor" href="#http-优化" aria-hidden="true">#</a> HTTP 优化</h2><ul><li>缓存 <ul><li>强缓存：缓存数据生效的情况下，不需要和服务器交互，直接使用缓存</li><li>弱缓存：缓存数据失效的情况下，问下服务器还能不能用缓存</li></ul></li><li>缓存的最佳实践 <ul><li>html 使用 nocache</li><li>文件加指纹，并修改文件名为 xxx.aad12313.js</li><li>静态资源都在 cdn 专门的 cdn 域名 <ul><li>cdn 缩短用户和服务器的距离</li><li>浏览器对一个域名的并发数有限制，所以用 cdn 域名来加载静态资源，增加并发数</li></ul></li><li>大型项目 html/js/css 要分开上线(cdn) <ul><li>利用 webpack 文件修改从新生成新文件来解决缓存的旧文件使用新文件的报错问题</li></ul></li></ul></li></ul><h2 id="图片优化"><a class="header-anchor" href="#图片优化" aria-hidden="true">#</a> 图片优化</h2><ul><li>图片优化(不同场景，使用不同的类型) <ul><li>jpg <ul><li>有损压缩</li><li>体积小，不支持透明</li><li>用于背景图，轮播图</li></ul></li><li>png <ul><li>无损压缩，质量高，支持透明</li><li>色彩线条更丰富，小图</li><li>用于 logo，icon</li></ul></li><li>webp <ul><li>非常优秀，有损压缩和无损压缩都支持</li><li>兼容性不好</li></ul></li><li>svg <ul><li>文本、体积小，矢量图</li><li>渲染成本，学习成本</li></ul></li><li>雪碧图：合并图片减少请求次数 webpack-spritesmith 插件</li></ul></li><li>gzip：浏览器压缩算法(服务器设置) <ul><li>因为图片和视频一般都是压缩过了的，所以一般都是压缩 js/css/html</li><li>设置请求头：<code>Accept-Encoding:gzip</code>开启 gzip</li><li>代码重复率越高，效率越高</li></ul></li></ul><h2 id="少加载文件"><a class="header-anchor" href="#少加载文件" aria-hidden="true">#</a> 少加载文件</h2><ul><li>文件打包压缩</li><li>图片格式选择和压缩</li><li>缓存</li><li>cdn(缩减距离，提高加载速度和效率)</li><li>ssr(首屏优化)</li><li>lazy-load</li></ul><h2 id="少执行代码"><a class="header-anchor" href="#少执行代码" aria-hidden="true">#</a> 少执行代码</h2><ul><li>现代浏览器已经足够好了，内部做了很多优化策略，我们优化策略大部分集中在框架内部(vue/react)</li><li>长列表(内存优化)：虚拟列表 <ul><li>dom 过多会崩掉</li><li>内存储存数据过多也会崩掉</li></ul></li><li>节流/防抖</li></ul><h2 id="骨架屏"><a class="header-anchor" href="#骨架屏" aria-hidden="true">#</a> 骨架屏</h2>',11);s.render=function(a,e,s,n,u,c){return l(),i("div",null,[t])};export default s;export{e as __pageData};