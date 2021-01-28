import{a as n,b as s,G as a}from"./framework.299d0cbd.js";const t='{"title":"git","description":"","frontmatter":{},"headers":[{"level":2,"title":"git","slug":"git"},{"level":2,"title":"linux","slug":"linux"},{"level":2,"title":"npm","slug":"npm"},{"level":2,"title":"yarn","slug":"yarn"},{"level":2,"title":"nvm","slug":"nvm"},{"level":2,"title":"nrm","slug":"nrm"},{"level":2,"title":"homebrew","slug":"homebrew"}],"relativePath":"helper/command.md","lastUpdated":1611830095976}',p={},o=a('<h2 id="git"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h2><div class="language-shell"><pre><code><span class="token comment"># 初始化本地仓库</span>\n<span class="token function">git</span> init\n<span class="token comment"># 提交工作区文件到暂存区 &lt;filename&gt;可以使用通配符</span>\n<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>path <span class="token operator">||</span> filename<span class="token operator">&gt;</span>\n<span class="token comment"># 提交暂存区内容到本地仓库</span>\n<span class="token function">git</span> commit -m <span class="token operator">&lt;</span>description<span class="token operator">&gt;</span>\n<span class="token comment"># 关联远程仓库</span>\n<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n<span class="token comment"># 取消远程仓库关联</span>\n<span class="token function">git</span> remote remove <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>\n<span class="token comment"># 查看当前关联的仓库地址</span>\n<span class="token function">git</span> remote -v\n<span class="token comment"># 推送本地分支到远程分支 如果想设置默认主机  可以用-u参数</span>\n<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 添加本地分支到远程分支</span>\n<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>local_branch<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>remote_branch<span class="token operator">&gt;</span>\n<span class="token comment"># 下载远程分支但不合并</span>\n<span class="token function">git</span> fetch <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>\n<span class="token comment"># 拉取远程分支到本地并合并</span>\n<span class="token function">git</span> pull <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 克隆远程仓库到本地</span>\n<span class="token function">git</span> clone <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>\n<span class="token comment"># 创建分支</span>\n<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 分支列表 名字前面有*的表示当前分支 -r为远程分支 -a为所有分支</span>\n<span class="token function">git</span> branch\n<span class="token comment"># 切换分支</span>\n<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 创建分支并切换 -b表示创建并切换</span>\n<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 基于远程分支创建本地分支</span>\n<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>local_branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>remote_branch<span class="token operator">&gt;</span>\n<span class="token comment"># 合并指定分支到当前分支</span>\n<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 撤销工作区修改</span>\n<span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>\n<span class="token comment"># 创建分支并切换 -c表示创建并切换</span>\n<span class="token function">git</span> switch -c <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 切换分支</span>\n<span class="token function">git</span> switch <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 删除分支 -D 表示强制删除</span>\n<span class="token function">git</span> branch -d <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 删除远程分支</span>\n<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> --delete <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>\n<span class="token comment"># 查看提交历史 添加--graph查看分支合并图</span>\n<span class="token function">git</span> log\n<span class="token comment"># 查看命令历史</span>\n<span class="token function">git</span> reflog\n<span class="token comment"># 查看当前分支状态</span>\n<span class="token function">git</span> status\n<span class="token comment"># 回退版本 --hard(修改版本库，修改暂存区，修改工作区) --soft(修改版本库，保留暂存区，保留工作区) --mixed(修改版本库，修改暂存区，保留工作区)</span>\n<span class="token function">git</span> reset --hard <span class="token operator">&lt;</span>commit_id <span class="token operator">||</span> HEAD<span class="token operator">&gt;</span> 回退版本\n<span class="token comment"># 把暂存区的修改撤销掉，重新放回工作区</span>\n<span class="token function">git</span> reset HEAD\n<span class="token comment"># 撤销commit，会新生成一个commit，不会修改历史提交记录</span>\n<span class="token function">git</span> revert -n <span class="token operator">&lt;</span>commit_id<span class="token operator">&gt;</span>\n<span class="token comment"># 删除文件</span>\n<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>\n<span class="token comment"># 储藏现在工作区的内容，一般用作合并冲突或者是临时修改bug时使用</span>\n<span class="token function">git</span> stash\n<span class="token comment"># 储藏的内容列表</span>\n<span class="token function">git</span> stash list\n<span class="token comment"># 恢复储藏的内容到工作区并且删掉储藏的内容</span>\n<span class="token function">git</span> stash pop\n<span class="token comment"># 恢复储藏的内容到工作区但不删除储藏的内容</span>\n<span class="token function">git</span> stash apply\n<span class="token comment"># 恢复多个储藏内容的某一个</span>\n<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>\n<span class="token comment"># 将指定的commit应用于当前的分支</span>\n<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit_id <span class="token operator">||</span> branch<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="linux"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> linux</h2><div class="language-shell"><pre><code><span class="token comment"># 命令指南 得到当前指令的完整说明 -k在不知道命令的名字时使用，检索关键字</span>\n<span class="token function">man</span> <span class="token operator">&lt;</span>command name<span class="token operator">&gt;</span> -k\n<span class="token comment"># 进入指定目录 &lt;path&gt;的三个常用值 ..表示上一级目录 /表示根目录 -表示上次停留位置</span>\n<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n<span class="token comment"># 列出当前路径的文件和目录 文件为灰色 目录为蓝色 -a参数可以查看隐藏文件</span>\n<span class="token function">ls</span>\n<span class="token comment"># 显示当前工作路径</span>\n<span class="token builtin class-name">pwd</span>\n<span class="token comment"># 查看文件内容</span>\n<span class="token function">cat</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>\n<span class="token comment"># 查看文件 按q退出 按v进入vi编辑</span>\n<span class="token function">less</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>\n<span class="token comment"># 输出文件信息</span>\n<span class="token function">file</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>\n<span class="token comment"># 检索文件 &lt;dir&gt;为需要检索的目标目录 -name为参数 表示按名字检索 &lt;name&gt;为名字，值为字符串需要带引号，可使用通配符</span>\n<span class="token function">find</span> <span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span> -name <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>\n<span class="token comment"># 创建目录</span>\n<span class="token function">mkdir</span> <span class="token operator">&lt;</span>dir-name<span class="token operator">&gt;</span>\n<span class="token comment"># 创建文件</span>\n<span class="token function">touch</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>\n<span class="token comment"># 复制 -r为递归参数(通用) 复制整个目录所有内容会用</span>\n<span class="token function">cp</span> <span class="token operator">&lt;</span>origin-path<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>target-path<span class="token operator">&gt;</span>\n<span class="token comment"># 移动 名称相同时当做重命名使用</span>\n<span class="token function">mv</span> <span class="token operator">&lt;</span>origin-path<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>target-path<span class="token operator">&gt;</span>\n<span class="token comment"># 删除 一般配合-r参数递归删除 -f表示不用确认，直接删除</span>\n<span class="token function">rm</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n<span class="token comment"># vi编辑 esc切换到命令模式 :q表示不保存修改直接退出 :w表示保存不退出 :wq表示保存并且退出</span>\n<span class="token function">vi</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n<span class="token comment"># root权限</span>\n<span class="token function">sudo</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>\n<span class="token comment"># finder打开</span>\n<span class="token function">open</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n<span class="token comment"># 终止命令</span>\n<span class="token builtin class-name">command</span> + c\n<span class="token comment"># 历史记录 使用的命名历史记录</span>\n<span class="token function">history</span>\n<span class="token comment"># 关闭命令行</span>\n<span class="token builtin class-name">exit</span>\n<span class="token comment"># 查看网络通讯</span>\n<span class="token function">ping</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>\n<span class="token comment"># 查看ip地址配置</span>\n<span class="token function">ifconfig</span>\n<span class="token comment"># 查看磁盘空间</span>\n<span class="token function">df</span> <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span>\n<span class="token comment"># 查看文件大小 -h带单位 -s只显示总计</span>\n<span class="token function">du</span> <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n<span class="token comment"># 进程列表</span>\n<span class="token function">lsof</span> -i:端口号\n<span class="token comment"># 关闭指定进程</span>\n<span class="token function">kill</span> -9 <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>\n<span class="token comment"># 字符串输出 &lt;content&gt;为字符串</span>\n<span class="token builtin class-name">echo</span> <span class="token operator">&lt;</span>content<span class="token operator">&gt;</span>\n<span class="token comment"># 重定向符</span>\n<span class="token comment"># &gt; 表示将符号左侧的内容，以覆盖的方式输入到右侧文件中</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;content&quot;</span> <span class="token operator">&gt;</span> file.txt\n<span class="token comment"># &gt;&gt; 表示将符号左侧的内容，以追加的方式输入到右侧文件的末尾行中</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;content&quot;</span> <span class="token operator">&gt;&gt;</span> file.txt\n<span class="token comment"># 管道符 &lt;command1&gt;执行结果传递给&lt;command2&gt;使用</span>\n<span class="token operator">&lt;</span>command<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>command<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>\n<span class="token comment"># 逻辑或 &lt;command1&gt;执行成功 继续执行&lt;command2&gt; 否则不执行&lt;command2&gt;</span>\n<span class="token operator">&lt;</span>command<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>command<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>\n<span class="token comment"># 逻辑或 &lt;command1&gt;执行失败 继续执行&lt;command2&gt; 否则不执行&lt;command2&gt;</span>\n<span class="token operator">&lt;</span>command<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">||</span> <span class="token operator">&lt;</span>command<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>\n<span class="token comment"># 查找文件里符合条件的字符串</span>\n<span class="token function">grep</span> <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>content<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="npm"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><div class="language-shell"><pre><code><span class="token comment"># 初始化</span>\n<span class="token function">npm</span> init -y\n<span class="token comment"># 通过脚手架创建项目</span>\n<span class="token function">npm</span> init <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>\n<span class="token comment"># 安装包 不传&lt;pkgName&gt;默认全部 @&lt;version&gt;为指定版本</span>\n<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span> @<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>\n<span class="token comment"># 卸载包 -g表示全局</span>\n<span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span> -g\n<span class="token comment"># 更新包</span>\n<span class="token function">npm</span> update <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span>\n<span class="token comment"># 登录npm</span>\n<span class="token function">npm</span> login\n<span class="token comment"># 上传包</span>\n<span class="token function">npm</span> publish\n<span class="token comment"># 删除包</span>\n<span class="token function">npm</span> unpublish -f <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span>\n<span class="token comment"># 查看全局安装包 --depth 表示指定深度</span>\n<span class="token function">npm</span> list -g --depth <span class="token number">0</span>\n<span class="token comment"># 查看包的全部版本</span>\n<span class="token function">npm</span> view <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span> versions\n<span class="token comment"># 查看npm 全局安装的根目录</span>\n<span class="token function">npm</span> bin\n</code></pre></div><h2 id="yarn"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2><div class="language-shell"><pre><code><span class="token comment"># 通过脚手架创建项目</span>\n<span class="token function">yarn</span> create <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>\n<span class="token comment"># 安装包 不传&lt;pkgName&gt;默认全部 @&lt;version&gt;为指定版本</span>\n<span class="token function">yarn</span> <span class="token function">add</span> <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span> @<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>\n<span class="token comment"># 卸载包 -g表示全局</span>\n<span class="token function">yarn</span> remove <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span> -g\n<span class="token comment"># 更新包</span>\n<span class="token function">yarn</span> upgrade <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span>\n<span class="token comment"># 查看全局安装包 --depth 表示指定深度</span>\n<span class="token function">yarn</span> list -g --depth<span class="token operator">=</span><span class="token number">0</span>\n<span class="token comment"># 查看yarn 全局安装的根目录</span>\n<span class="token function">yarn</span> global bin\n</code></pre></div><h2 id="nvm"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><div class="language-shell"><pre><code><span class="token comment"># 查看版本</span>\nnvm --version\n<span class="token comment"># 下载指定版本</span>\nnvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>\n<span class="token comment"># 删除指定版本</span>\nnvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>\n<span class="token comment"># 切换指定版本</span>\nnvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>\n<span class="token comment"># 现在已安装列表</span>\nnvm <span class="token function">ls</span>\n<span class="token comment"># 设置别名</span>\nnvm <span class="token builtin class-name">alias</span>\n<span class="token comment"># 删除别名</span>\nnvm <span class="token builtin class-name">unalias</span>\n</code></pre></div><h2 id="nrm"><a class="header-anchor" href="#nrm" aria-hidden="true">#</a> nrm</h2><div class="language-shell"><pre><code><span class="token comment"># 查看版本</span>\nnrm --version\n<span class="token comment"># 源列表</span>\nnrm <span class="token function">ls</span>\n<span class="token comment"># 切换源</span>\nnrm use <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span>\n<span class="token comment"># 添加源</span>\nnrm <span class="token function">add</span> <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token punctuation">[</span>home<span class="token punctuation">]</span>\n<span class="token comment"># 删除源</span>\nnrm del <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span>\n<span class="token comment"># 测试源速度 不带&lt;registry&gt;默认所有</span>\nnrm <span class="token builtin class-name">test</span> <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span>\n\n</code></pre></div><h2 id="homebrew"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> homebrew</h2><div class="language-shell"><pre><code><span class="token comment"># 帮助信息</span>\nbrew <span class="token builtin class-name">help</span>\n<span class="token comment"># 查看版本</span>\nbrew -v\n<span class="token comment"># 更新homebrew自己</span>\nbrew update\n<span class="token comment"># 安装包</span>\nbrew <span class="token function">install</span> <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span>\n<span class="token comment"># 查询可更新的包</span>\nbrew outdated\n<span class="token comment"># 更新包 pakName不传默认所有</span>\nbrew upgrade <span class="token operator">&lt;</span>pkgName<span class="token operator">&gt;</span>\n<span class="token comment"># 清理旧版本 pakName不传默认所有 -n表示只查看不执行</span>\nbrew cleanup <span class="token operator">&lt;</span>pakName<span class="token operator">&gt;</span> -n\n<span class="token comment"># 卸载包</span>\nbrew uninstall <span class="token operator">&lt;</span>pakName<span class="token operator">&gt;</span>\n<span class="token comment"># 查看包信息</span>\nbrew info <span class="token operator">&lt;</span>pakName<span class="token operator">&gt;</span>\n<span class="token comment"># 安装列表</span>\nbrew list\n<span class="token comment"># 查询可用包</span>\nbrew search <span class="token operator">&lt;</span>pakName<span class="token operator">&gt;</span>\n</code></pre></div>',14);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
