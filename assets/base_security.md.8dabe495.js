import{o as a,c as s,b as n}from"./app.78d90085.js";const e='{"title":"同源策略","description":"","frontmatter":{},"headers":[{"level":2,"title":"同源策略","slug":"同源策略"},{"level":3,"title":"作用","slug":"作用"},{"level":3,"title":"解决办法","slug":"解决办法"},{"level":2,"title":"XSS","slug":"xss"},{"level":3,"title":"存储型 XSS 攻击","slug":"存储型-xss-攻击"},{"level":3,"title":"反射型 XSS 攻击","slug":"反射型-xss-攻击"},{"level":3,"title":"基于 DOM 的 XSS 攻击","slug":"基于-dom-的-xss-攻击"},{"level":3,"title":"预防策略","slug":"预防策略"},{"level":2,"title":"CSRF","slug":"csrf"},{"level":3,"title":"发起 CSRF 攻击的三个必要条件","slug":"发起-csrf-攻击的三个必要条件"},{"level":3,"title":"预防策略","slug":"预防策略-2"},{"level":2,"title":"SQL 注入","slug":"sql-注入"},{"level":3,"title":"预防策略","slug":"预防策略-3"},{"level":2,"title":"点击劫持","slug":"点击劫持"},{"level":3,"title":"预防策略","slug":"预防策略-4"},{"level":2,"title":"window.opener","slug":"window-opener"},{"level":3,"title":"预防策略","slug":"预防策略-5"},{"level":2,"title":"文件上传漏洞","slug":"文件上传漏洞"},{"level":3,"title":"预防策略","slug":"预防策略-6"}],"relativePath":"base/security.md","lastUpdated":1611838931576}',t={},o=n('<h2 id="同源策略"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h2><p>如果两个 URL 的协议、域名和端口都相同，我们就称这两个 URL 同源</p><h3 id="作用"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><ul><li>同源策略限制了来自不同源的 JavaScript 脚本对当前 DOM 对象读和写的操作</li><li>同源策略限制了不同源的站点读取当前站点的 Cookie、IndexDB、LocalStorage 等数据</li><li>同源策略限制了通过 XMLHttpRequest 等方式将站点的数据发送给不同源的站点</li></ul><h3 id="解决办法"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h3><ul><li>跨文档消息机制：可以通过 window.postMessage 的 JavaScript 接口来和不同源的 DOM 进行通信</li><li>跨域资源共享(CORS)：跨域资源在服务端设置允许跨域，就可以进行跨域访问控制，从而使跨域数据传输得以安全进行</li><li>内容安全策略(CSP)：主要以白名单的形式配置可信任的内容来源，在网页中，能够使白名单中的内容正常执行（包含 JS，CSS，Image 等等），而非白名单的内容无法正常执行</li><li>服务器代理：本地可以通过 proxy 配置开发服务器代理，打包后可以通过 Nginx 配置反向代理</li></ul><h2 id="xss"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h2><p>跨站脚本攻击</p><h3 id="存储型-xss-攻击"><a class="header-anchor" href="#存储型-xss-攻击" aria-hidden="true">#</a> 存储型 XSS 攻击</h3><p>利用漏洞提交恶意 JavaScript 代码，比如在 input, textarea 等所有可能输入文本信息的区域，输入<code>&lt;script src=&quot;http://恶意网站&quot;&gt;&lt;/script&gt;</code>等，提交后信息会存在服务器中，当用户再次打开网站请求到相应的数据，打开页面，恶意脚本就会将用户的 Cookie 信息等数据上传到黑客服务器</p><h3 id="反射型-xss-攻击"><a class="header-anchor" href="#反射型-xss-攻击" aria-hidden="true">#</a> 反射型 XSS 攻击</h3><p>用户将一段含有恶意代码的请求提交给 Web 服务器，Web 服务器接收到请求时，又将恶意代码反射给了浏览器端，这就是反射型 XSS 攻击</p><p><strong>Web 服务器不会存储反射型 XSS 攻击的恶意脚本，这是和存储型 XSS 攻击不同的地方</strong></p><h3 id="基于-dom-的-xss-攻击"><a class="header-anchor" href="#基于-dom-的-xss-攻击" aria-hidden="true">#</a> 基于 DOM 的 XSS 攻击</h3><p>基于 DOM 的 XSS 攻击是不牵涉到页面 Web 服务器的。它的特点是在 Web 资源传输过程或者在用户使用页面的过程中修改 Web 页面的数据。比如利用工具(如 Burpsuite)扫描目标网站所有的网页并自动测试写好的注入脚本等</p><h3 id="预防策略"><a class="header-anchor" href="#预防策略" aria-hidden="true">#</a> 预防策略</h3><ul><li>将 cookie 等敏感信息设置为 httponly，禁止 Javascript 通过 document.cookie 获得</li><li>对所有的输入做严格的校验尤其是在服务器端，过滤掉任何不合法的输入</li><li>净化和过滤掉不必要的 html 标签，比如：<code>&lt;iframe&gt;</code>,<code>&lt;script&gt;</code> ;净化和过滤掉不必要的 Javascript 的事件标签，比如：<code>onclick</code>, <code>onfocus</code>等</li><li>转义单引号，双引号，尖括号等特殊字符，可以采用 htmlencode 编码 或者过滤掉这些特殊字符</li><li>CSP,CSP 全称为 Content Security Policy，即内容安全策略。主要以白名单的形式配置可信任的内容来源，在网页中，能够使白名单中的内容正常执行（包含 JS，CSS，Image 等等），而非白名单的内容无法正常执行，从而减少跨站脚本攻击（XSS），当然，也能够减少运营商劫持的内容注入攻击。配置方式：</li></ul><div class="language-js"><pre><code><span class="token comment">// 1、添加meta</span>\n<span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;Content-Security-Policy&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;script-src &#39;self&#39;&quot;</span><span class="token operator">&gt;</span>\n\n<span class="token comment">// 2、设置http头部</span>\nContent<span class="token operator">-</span>Security<span class="token operator">-</span>Policy<span class="token operator">:</span><span class="token string">&#39;script-src&#39;</span> <span class="token string">&#39;unsafe-inline&#39;</span> <span class="token string">&#39;unsafe-eval&#39;</span> <span class="token string">&#39;self&#39;</span> <span class="token operator">*</span><span class="token number">.54</span>php<span class="token punctuation">.</span>cn <span class="token operator">*</span><span class="token punctuation">.</span>yunetidc<span class="token punctuation">.</span>com <span class="token operator">*</span><span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com <span class="token operator">*</span><span class="token punctuation">.</span>cnzz<span class="token punctuation">.</span>com <span class="token operator">*</span><span class="token punctuation">.</span>duoshuo<span class="token punctuation">.</span>com <span class="token operator">*</span><span class="token punctuation">.</span>jiathis<span class="token punctuation">.</span>com<span class="token punctuation">;</span>report<span class="token operator">-</span>uri <span class="token operator">/</span>error<span class="token operator">/</span>csp\n</code></pre></div><h2 id="csrf"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h2><p>跨站请求伪造</p><h3 id="发起-csrf-攻击的三个必要条件"><a class="header-anchor" href="#发起-csrf-攻击的三个必要条件" aria-hidden="true">#</a> 发起 CSRF 攻击的三个必要条件</h3><ul><li>目标站点一定要有 CSRF 漏洞</li><li>用户要登录过目标站点，并且在浏览器上保持有该站点的登录状态</li><li>需要用户打开一个第三方站点，如黑客的站点等</li></ul><h3 id="预防策略-2"><a class="header-anchor" href="#预防策略-2" aria-hidden="true">#</a> 预防策略</h3><ul><li><p>充分利用好 Cookie 的 SameSite 属性，SameSite 通常有 Strict、Lax 和 None 三个值</p><ul><li>Strict：浏览器会完全禁止第三方 Cookie</li><li>Lax：相对宽松一点。在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交 Get 方式的表单这两种方式都会携带 Cookie。但如果在第三方站点中使用 Post 方法，或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie</li><li>None：任何情况下都会发送 Cookie</li></ul><div class="language-js"><pre><code>set<span class="token operator">-</span>cookie<span class="token operator">:</span> <span class="token number">1</span>P_JAR<span class="token operator">=</span><span class="token number">2019</span><span class="token operator">-</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">20</span><span class="token operator">-</span><span class="token number">06</span><span class="token punctuation">;</span> expires<span class="token operator">=</span>Tue<span class="token punctuation">,</span> <span class="token number">19</span><span class="token operator">-</span>Nov<span class="token operator">-</span><span class="token number">2019</span> <span class="token number">06</span><span class="token operator">:</span><span class="token number">36</span><span class="token operator">:</span><span class="token number">21</span> <span class="token constant">GMT</span><span class="token punctuation">;</span> path<span class="token operator">=</span><span class="token operator">/</span><span class="token punctuation">;</span> domain<span class="token operator">=</span><span class="token punctuation">.</span>google<span class="token punctuation">.</span>com<span class="token punctuation">;</span> SameSite<span class="token operator">=</span>none\n</code></pre></div></li><li><p>验证请求的来源站点</p><p>在服务器端验证请求来源的站点，就是验证 HTTP 请求头中的 Origin 和 Referer 属性。Referer 是 HTTP 请求头中的一个字段，记录了该 HTTP 请求的来源地址，而 O rigin 属性只包含了域名信息，并没有包含具体的 URL 路径。这是 Origin 和 Referer 的一个主要区别。服务器的策略是优先判断 Origin，如果请求头中没有包含 Origin 属性，再根据实际情况判断是否使用 Referer 值</p></li><li><p>在请求地址中添加 token 并验证</p><p>CSRF 攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 cookie 中，因此黑客可以在不知道这些验证信息的情况下直接利用用户自己的 cookie 来通过安全验证。因此要抵御 CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求</p></li><li><p>在 HTTP 头中自定义属性并验证</p><p>这种方法也是使用 token 并进行验证，和上一种方法不同的是，这里并不是把 token 以参数的形式置于 HTTP 请求之中，而是把它放到 HTTP 头中自定义的属性里。通过 XMLHttpRequest 这个类，可以一次性给所有该类请求加上 csrftoken 这个 HTTP 头属性，并把 token 值放入其中。这样解决了上种方法在请求中加入 token 的不便，同时，通过 XMLHttpRequest 请求的地址不会被记录到浏览器的地址栏，也不用担心 token 会透过 Referer 泄露到其他网站中去。 然而这种方法的局限性非常大。XMLHttpRequest 请求通常用于 Ajax 方法中对于页面局部的异步刷新，并非所有的请求都适合用这个类来发起，而且通过该类请求得到的页面不能被浏览器所记录下，从而进行前进，后退，刷新，收藏等操作，给用户带来不便。另外，对于没有进行 CSRF 防护的遗留系统来说，要采用这种方法来进行防护，要把所有请求都改为 XMLHttpRequest 请求，这样几乎是要重写整个网站，这代价无疑是不能接受的。</p></li></ul><h2 id="sql-注入"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h2><p>拼接 SQL 时未仔细过滤，黑客可提交数据改变语义</p><h3 id="预防策略-3"><a class="header-anchor" href="#预防策略-3" aria-hidden="true">#</a> 预防策略</h3><ul><li>禁止目标网站利用动态拼接字符串的方式访问数据库</li><li>减少不必要的数据库抛出的错误信息</li><li>对数据库的操作赋予严格的权限控制</li><li>净化和过滤掉不必要的 SQL 保留字，比如：where, or, exec 等</li></ul><h2 id="点击劫持"><a class="header-anchor" href="#点击劫持" aria-hidden="true">#</a> 点击劫持</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>诱使用户点击看似无害的按钮（实则点击了透明 iframe 中的按钮）</p><p>监听鼠标移动事件，让危险按钮始终在鼠标下方</p><p>使用 HTML5 拖拽技术执行敏感操作（例如 deploy key）</p></div><h3 id="预防策略-4"><a class="header-anchor" href="#预防策略-4" aria-hidden="true">#</a> 预防策略</h3><ul><li>服务端添加 X-Frame-Options 响应头,这个 HTTP 响应头是为了防御用 iframe 嵌套的点击劫持攻击。 这样浏览器就会阻止嵌入网页的渲染</li><li>JS 判断顶层视口的域名是不是和本页面的域名一致，不一致则不允许操作，<code>top.location.hostname === self.location.hostname</code></li><li>敏感操作使用更复杂的步骤（验证码、输入项目名称以删除）</li></ul><h2 id="window-opener"><a class="header-anchor" href="#window-opener" aria-hidden="true">#</a> window.opener</h2><p><code>window.opener</code> 表示打开当前窗体页面的的父窗体的是谁。例如，在 A 页面中，通过一个带有 <code>target=&quot;\\_blank&quot;</code> 的 a 标签打开了一个新的页面 B，那么在 B 页面里，<code>window.opener</code> 的值为 A 页面的 window 对象。一般来说，打开同源(域名相同)的页面，不会有什么问题。但对于跨域的外部链接来说，存在一个被钓鱼的风险。比如你正在浏览购物网站，从当前网页打开了某个外部链接，在打开的外部页面，可以通过 <code>window.opener.location</code> 改写来源站点的地址。利用这一点，将来源站点改写到钓鱼站点页面上，例如跳转到伪造的高仿购物页面，当再回到购物页面的时候，是很难发现购物网站的地址已经被修改了的，这个时候你的账号就存在被钓鱼的可能了</p><h3 id="预防策略-5"><a class="header-anchor" href="#预防策略-5" aria-hidden="true">#</a> 预防策略</h3><ul><li>设置 <code>rel</code> 属性</li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- rel=noopener 规定禁止新页面传递源页面的地址，通过设置了此属性的链接打开的页面，其 window.opener 的值为 null --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://xxxx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noopener noreferrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 外链 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ul><li><p>将外链替换为内部的跳转连接服务，跳转时先跳到内部地址，再由服务器 redirect 到外链</p></li><li><p>可以由 <code>widow.open</code> 打开外链</p></li></ul><h2 id="文件上传漏洞"><a class="header-anchor" href="#文件上传漏洞" aria-hidden="true">#</a> 文件上传漏洞</h2><p>服务器未校验上传的文件，致使黑客可以上传恶意脚本等方式</p><h3 id="预防策略-6"><a class="header-anchor" href="#预防策略-6" aria-hidden="true">#</a> 预防策略</h3><ul><li>用文件头来检测文件类型，使用白名单过滤(有些文件可以从其中一部分执行，只检查文件头无效，例如 PHP 等脚本语言)</li><li>上传后将文件彻底重命名并移动到不可执行的目录下</li><li>升级服务器软件以避免路径解析漏洞</li><li>升级用到的开源编辑器</li><li>管理后台设置强密码</li></ul>',42);t.render=function(n,e,t,p,l,i){return a(),s("div",null,[o])};export default t;export{e as __pageData};
