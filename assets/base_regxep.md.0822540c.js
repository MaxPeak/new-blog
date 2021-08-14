import{o as n,c as s,a}from"./app.c990686d.js";const t='{"title":"正则表达式是什么","description":"","frontmatter":{},"headers":[{"level":2,"title":"正则表达式是什么","slug":"正则表达式是什么"},{"level":2,"title":"元字符","slug":"元字符"},{"level":2,"title":"量词","slug":"量词"},{"level":2,"title":"标识符","slug":"标识符"},{"level":2,"title":"子集","slug":"子集"},{"level":2,"title":"范围词","slug":"范围词"},{"level":2,"title":"断言","slug":"断言"},{"level":2,"title":"一些特殊的符号","slug":"一些特殊的符号"},{"level":2,"title":"\\\\1 的应用","slug":"_1-的应用"}],"relativePath":"base/regxep.md","lastUpdated":1628909750979}',p={},e=a('<h2 id="正则表达式是什么"><a class="header-anchor" href="#正则表达式是什么" aria-hidden="true">#</a> 正则表达式是什么</h2><p>检索替换字符串的一套规则</p><h2 id="元字符"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h2><div class="language-js"><pre><code>\\ 转义符\n\n\\d <span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span>\n\n\\<span class="token constant">D</span> 非数字\n\n\\s 空格\n\n\\<span class="token constant">S</span> 非空格\n\n\\w 字符（数字、字母、_）\n\n\\<span class="token constant">W</span> 非\\w所匹配范围\n\n\\b <span class="token function">单词边界，就是指单词和空格之间的位置（单词边界，单词起始、结束，连词符</span><span class="token punctuation">(</span>除了\\w之外的所有的字符都属于连词符<span class="token punctuation">)</span>）\n\n\\<span class="token constant">B</span> 非\\b部分\n\n<span class="token punctuation">.</span>  <span class="token function">除了换行符</span><span class="token punctuation">(</span>\\n、\\r<span class="token punctuation">)</span>之外的所有的字符都是它匹配范围\n\n<span class="token operator">^</span>  字符串的起始  <span class="token operator">^</span>符在范围词里面代表的是<span class="token string">&#39;非&#39;</span>的意思\n\n$  字符串的结束\n</code></pre></div><h2 id="量词"><a class="header-anchor" href="#量词" aria-hidden="true">#</a> 量词</h2><div class="language-js"><pre><code>量词<span class="token operator">:</span>默认情况是贪婪匹配，以最高次匹配，如果不成功就依次降低次数，直到到最低次\n\n<span class="token punctuation">{</span>最小次<span class="token punctuation">,</span>最大次<span class="token punctuation">}</span>\n<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span>\n<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token punctuation">}</span>  最少五次，最高无穷大\n\n<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token punctuation">}</span>  对应 <span class="token operator">*</span>号  表示<span class="token number">0</span>次或多次\n<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">}</span>  对应 <span class="token operator">+</span>号  表示<span class="token number">1</span>次或多次\n<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span> 对应 <span class="token operator">?</span>号  表示<span class="token number">0</span>次或<span class="token number">1</span>次，可有可无\n\n非贪婪匹配<span class="token operator">:</span>量词之后跟问号，代表非贪婪，以最少次匹配\n</code></pre></div><h2 id="标识符"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><div class="language-js"><pre><code>i  忽略大小写\n\ng  全局匹配  这个标识符要慎用<span class="token punctuation">,</span>因为它会改变正则对象的lastIndex属性\n\nm  多行匹配  此标识符只会在使用<span class="token operator">^</span>和$的正则表达式中才可能有效\n</code></pre></div><div class="language-js"><pre><code><span class="token comment">//全局标识符g会改变lastIndex从而改变下面的结果</span>\n<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;11112223333333&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//14</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0</span>\n\n<span class="token comment">// 解决办法，在对应的地方手动重置为0</span>\nreg<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="子集"><a class="header-anchor" href="#子集" aria-hidden="true">#</a> 子集</h2><div class="language-js"><pre><code><span class="token function">子集</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">被圆括号包裹的部分属于一个整体</span><span class="token punctuation">(</span>子集<span class="token punctuation">)</span>\n\n$<span class="token number">1</span> <span class="token operator">-</span> $n  对应的是正则里面匹配的子集 第一个就是$<span class="token number">1</span> 依次类推\n</code></pre></div><div class="language-js"><pre><code><span class="token comment">//子集$的应用</span>\n<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;第一段第二段&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(第一段)(第二段)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> s2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$2$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第二段第一段</span>\n</code></pre></div><h2 id="范围词"><a class="header-anchor" href="#范围词" aria-hidden="true">#</a> 范围词</h2><div class="language-js"><pre><code>范围词 <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n范围词里所有的字符串都是或者关系\n\n<span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">==</span><span class="token operator">&gt;</span> \\d  <span class="token number">0123456789</span>\n\n<span class="token punctuation">[</span>a<span class="token operator">-</span>zA<span class="token operator">-</span><span class="token constant">Z</span><span class="token punctuation">]</span> <span class="token operator">==</span><span class="token operator">&gt;</span> 英文字母\n\n<span class="token punctuation">[</span>\\u4e00<span class="token operator">-</span>\\u9fa5<span class="token punctuation">]</span> <span class="token operator">==</span><span class="token operator">&gt;</span> 中文汉字的Unicode编码\n\n<span class="token operator">|</span>  要想在多个不同的范围词之间用或者关系用 <span class="token operator">|</span> 符号<span class="token punctuation">,</span>不同范围词用子集来表示一个整体\n</code></pre></div><h2 id="断言"><a class="header-anchor" href="#断言" aria-hidden="true">#</a> 断言</h2><div class="language-js"><pre><code><span class="token function">子集不捕获匹配</span>  <span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">:</span>模式<span class="token punctuation">)</span> 子集默认是捕获匹配\n\n<span class="token function">正向肯定预查</span> <span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>模式<span class="token punctuation">)</span>\n\n<span class="token function">正向否定预查</span> <span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">!</span>模式<span class="token punctuation">)</span>\n\n<span class="token function">反向肯定预查</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>模式<span class="token punctuation">)</span>\n\n<span class="token function">反向否定预查</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">!</span>模式<span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token comment">//正向肯定预查的应用 正向否定预查结果相反</span>\n<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&quot;test123&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">&quot;test456&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">test(?=123)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//如果尾数是123就要 否则就不要</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>\n\n<span class="token comment">//反向肯定预查的应用 反向否定预查结果相反</span>\n<span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token string">&quot;123test&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> str4 <span class="token operator">=</span> <span class="token string">&quot;456test&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=123)test</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>\n</code></pre></div><h2 id="一些特殊的符号"><a class="header-anchor" href="#一些特殊的符号" aria-hidden="true">#</a> 一些特殊的符号</h2><div class="language-js"><pre><code>\\t 水平制表符\n\n\\v 垂直制表符\n\n\\f 换页符\n\n\\n 换行符\n\n\\r 回车符\n</code></pre></div><h2 id="_1-的应用"><a class="header-anchor" href="#_1-的应用" aria-hidden="true">#</a> \\1 的应用</h2><div class="language-js"><pre><code><span class="token comment">//  \\1的应用 匹配相同且重复的内容 必须在有子集出现的情况下才能用</span>\n<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;1111222333&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)\\1+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;1111&#39;,&#39;222&#39;,&#39;333&#39;]</span>\n</code></pre></div>',21);p.render=function(a,t,p,o,c,l){return n(),s("div",null,[e])};export default p;export{t as __pageData};
