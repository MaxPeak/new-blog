import{o as l,c as e,b as n,d as u}from"./app.c990686d.js";const t='{"title":"Vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue","slug":"vue"},{"level":3,"title":"生命周期","slug":"生命周期"},{"level":3,"title":"组件通信","slug":"组件通信"},{"level":3,"title":"基础组件&业务组件","slug":"基础组件-业务组件"},{"level":3,"title":"组件的接口设计","slug":"组件的接口设计"},{"level":3,"title":"一些技巧","slug":"一些技巧"},{"level":2,"title":"React","slug":"react"},{"level":3,"title":"基础","slug":"基础"},{"level":3,"title":"虚拟 DOM","slug":"虚拟-dom"},{"level":3,"title":"生命周期","slug":"生命周期-2"},{"level":3,"title":"React Fiber（时间切片）","slug":"react-fiber（时间切片）"},{"level":3,"title":"组件通信","slug":"组件通信-2"},{"level":3,"title":"组件技巧","slug":"组件技巧"},{"level":3,"title":"组件优化","slug":"组件优化"},{"level":3,"title":"一些技巧","slug":"一些技巧-2"},{"level":3,"title":"hooks","slug":"hooks"}],"relativePath":"base/framework.md","lastUpdated":1628914092012}',a={},i=n("h2",{id:"vue"},[n("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),u(" Vue")],-1),o=n("h3",{id:"生命周期"},[n("a",{class:"header-anchor",href:"#生命周期","aria-hidden":"true"},"#"),u(" 生命周期")],-1),s=n("img",{src:"/new-blog/vue-2x.png",width:"500",alt:"vue生命周期"},null,-1),c=n("h3",{id:"组件通信"},[n("a",{class:"header-anchor",href:"#组件通信","aria-hidden":"true"},"#"),u(" 组件通信")],-1),r=n("ul",null,[n("li",null,[u("父子通信 "),n("ul",null,[n("li",null,"props/$emit"),n("li",null,"xxx.sync/$emit('update:xxx',val)"),n("li",null,"v-model/$emit('input',val)"),n("li",null,"$patent/$children"),n("li",null,"v-slot:xxx/:xxx")])]),n("li",null,[u("兄弟组件通信 "),n("ul",null,[n("li",null,"ref/$refs")])]),n("li",null,[u("跨组件通信 "),n("ul",null,[n("li",null,"provide/inject"),n("li",null,"递归判断+$emit")])]),n("li",null,[u("全局通信 "),n("ul",null,[n("li",null,"vuex"),n("li",null,"eventBus")])])],-1),d=n("h3",{id:"基础组件-业务组件"},[n("a",{class:"header-anchor",href:"#基础组件-业务组件","aria-hidden":"true"},"#"),u(" 基础组件&业务组件")],-1),h=n("ul",null,[n("li",null,[u("基础组件(通用性强) "),n("ul",null,[n("li",null,[u("布局组件 "),n("blockquote",null,[n("p",null,"只负责页面布局，功能简单，视情况决定需不需要维护自己的状态")])]),n("li",null,[u("表单组件 "),n("blockquote",null,[n("p",null,"负责页面与用户的数据交互，功能相对复杂，需要维护自己的状态")])]),n("li",null,[u("功能型组件 "),n("blockquote",null,[n("p",null,"功能视情况而定，需要维护自己的状态")])]),n("li",null,[u("展示型组件 "),n("blockquote",null,[n("p",null,"纯展示型组件，功能简单，不需要维护自己的状态")])])])]),n("li",null,[u("业务组件(更符合业务逻辑) "),n("blockquote",null,[n("p",null,"逻辑相对复杂，和业务耦合，需要维护自己的状态")])])],-1),p=n("h3",{id:"组件的接口设计"},[n("a",{class:"header-anchor",href:"#组件的接口设计","aria-hidden":"true"},"#"),u(" 组件的接口设计")],-1),m=n("ul",null,[n("li",null,[u("常规类型(非"),n("code",null,"Object"),u("/"),n("code",null,"Function"),u("类型) "),n("blockquote",null,[n("p",null,"直接定义即可，最简单")])]),n("li",null,[n("code",null,"Function"),u("类型 "),n("blockquote",null,[n("p",null,[n("code",null,"Function"),u("类型多用于组件内部循环时使用，非常灵活，比如 table 组件的"),n("code",null,"row-class-name")])])]),n("li",null,[n("code",null,"Object"),u("类型 "),n("blockquote",null,[n("p",null,[u("也可以直接定义成"),n("code",null,"Object"),u("类型，极少用，不推荐")])])])],-1),k=n("h3",{id:"一些技巧"},[n("a",{class:"header-anchor",href:"#一些技巧","aria-hidden":"true"},"#"),u(" 一些技巧")],-1),v=n("ul",null,[n("li",null,[u("通过"),n("code",null,'v-bind="$attrs"'),u("和"),n("code",null,'v-on="$listeners"'),u("来减少"),n("code",null,"props"),u("和"),n("code",null,"$emit"),u("的数量")]),n("li",null,[n("code",null,"inheritAttrs: true"),u("一般结合"),n("code",null,'v-bind="$attrs"'),u('使用，让元素"更干净"')]),n("li",null,"一般面包屑导航可以通过观察路由对象来生成"),n("li",null,[u("递归组件一定要确保组件的"),n("code",null,"name"),u("选项")]),n("li",null,[u("特殊情况需要渲染 vnode 或者 jsx 可以用"),n("code",null,"functional: true")]),n("li",null,[n("code",null,"watch"),u("某个值要在初始化就执行添加"),n("code",null,"immediate: true"),u("即可")]),n("li",null,[u("如果一个 hander-bar 有很多组件，优化 html 可以用动态组件"),n("code",null,"component")]),n("li",null,[u("组件如果因为功能过于复杂导致一个组件代码太多可以用"),n("code",null,"mixins"),u("分类编写")]),n("li",null,[u("想修改"),n("code",null,"v-model"),u("的默认 "),n("code",null,"value"),u("props 和"),n("code",null,"input"),u("事件可以用"),n("code",null,"model"),u("来重新设置")]),n("li",null,[u("在 SSR 方案里面编写组件可以利用"),n("code",null,"$isServer"),u("来判断是否运行在服务器端")]),n("li",null,[u("全局组件可以通过"),n("code",null,"Vue.extend"),u("创建子类来实现")]),n("li",null,[u("webpack 的"),n("code",null,"require.context"),u("可以实现 svg 组件的全局注册，mixin 的批量引入，路由的批量引入等")]),n("li",null,[u("组件或者 dom 的传递多使用"),n("code",null,"slot"),u(","),n("code",null,"slot"),u("通信可用"),n("code",null,"v-slot")]),n("li",null,[u("不需要响应式监听的数据可以定义在 "),n("code",null,"data"),u(" 里面，但不要 "),n("code",null,"return"),u(" 出来，这样就避开了 vue 的响应式监听，优化性能，但需要记得在组件销毁的时候手动销毁事件，防止内存泄露")]),n("li",null,[u("多用 "),n("code",null,"computed"),u(" 少用 "),n("code",null,"watch")])],-1),f=n("h2",{id:"react"},[n("a",{class:"header-anchor",href:"#react","aria-hidden":"true"},"#"),u(" React")],-1),b=n("h3",{id:"基础"},[n("a",{class:"header-anchor",href:"#基础","aria-hidden":"true"},"#"),u(" 基础")],-1),g=n("ul",null,[n("li",null,"React：负责逻辑控制，更新数据，解析 JSX"),n("li",null,"ReactDom：负责渲染，把 vnode 渲染成真实 DOM"),n("li",null,[u("JSX：一种 js 的扩展语法，可以很好的描述页面，提升开发效率，而且会预防 XSS 危险，JSX 最终转换成 vnode"),n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// 比如创建一个h1标签"),u("\n"),n("span",{class:"token comment"},"// 不用jsx是这样的"),u("\n"),n("span",{class:"token keyword"},"const"),u(" h1 "),n("span",{class:"token operator"},"="),u(" React"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"h1"'),n("span",{class:"token punctuation"},","),u(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),u(),n("span",{class:"token string"},'"h1标题 "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),u("\n"),n("span",{class:"token comment"},"// 用jsx是这样的，嵌套越深优势越大"),u("\n"),n("span",{class:"token keyword"},"const"),u(" h1 "),n("span",{class:"token operator"},"="),u(),n("span",{class:"token operator"},"<"),u("h1"),n("span",{class:"token operator"},">"),u("h1标题"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),u("h1"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),u("\n")])])])]),n("li",null,[u("组件类型 "),n("ul",null,[n("li",null,"function component：通常情况下无状态和生命周期，想使其有状态和生命周期可以用 hooks"),n("li",null,"class component：有状态和生命周期")])]),n("li",null,"hooks：react16.8 引入了 hooks，使函数型组件也能拥有状态"),n("li",null,[u("组件状态管理 "),n("ul",null,[n("li",null,"function component： hooks"),n("li",null,"class component：state/setState")])]),n("li",null,[u("受控组件 vs 非受控组件 "),n("ul",null,[n("li",null,"React 有两种不同的方式来处理表单输入。"),n("li",null,"如果一个 input 表单元素的值是由 React 控制，就其称为受控组件。当用户将数据输入到受控组件时，会触发修改状态的事件处理器，这时由你的代码来决定此输入是否有效（如果有效就使用更新后的值重新渲染）。如果不重新渲染，则表单元素将保持不变。"),n("li",null,"一个非受控组件，就像是运行在 React 体系之外的表单元素。当用户将数据输入到表单字段（例如 input，dropdown 等）时，React 不需要做任何事情就可以映射更新后的信息。然而，这也意味着，你无法强制给这个表单字段设置一个特定值。"),n("li",null,"在大多数情况下，你应该使用受控组件")])])],-1),x=n("h3",{id:"虚拟-dom"},[n("a",{class:"header-anchor",href:"#虚拟-dom","aria-hidden":"true"},"#"),u(" 虚拟 DOM")],-1),R=n("ul",null,[n("li",null,"用 js 对象来描述 DOM，这个对象就是虚拟 DOM"),n("li",null,"跨平台：抽象出 dom 操作层，这样其他的程序也能用，而只需要替换 dom 操作层"),n("li",null,"速度快：更新之前做 diff 达到最少操作 dom 的目的")],-1),S=n("h3",{id:"生命周期-2"},[n("a",{class:"header-anchor",href:"#生命周期-2","aria-hidden":"true"},"#"),u(" 生命周期")],-1),w=n("p",null,"react 的生命周期有几次比较重要的改动",-1),j=n("ul",null,[n("li",null,[u("16.3 之前的生命周期 "),n("img",{src:"/new-blog/react16.3-prev.png",width:"500",alt:"react16.3之前的生命周期"})]),n("li",null,[u("16.3 的生命周期 "),n("img",{src:"/new-blog/react16.3.png",alt:"react16.3生命周期"})]),n("li",null,[u("16.4 的生命周期 "),n("img",{src:"/new-blog/react16.4.png",alt:"react16.4生命周期"})])],-1),$=n("h3",{id:"react-fiber（时间切片）"},[n("a",{class:"header-anchor",href:"#react-fiber（时间切片）","aria-hidden":"true"},"#"),u(" React Fiber（时间切片）")],-1),q=n("ul",null,[n("li",null,[u("什么是 React Fiber？ "),n("ul",null,[n("li",null,"Facebook 历时两年对 React 核心算法的一次重新实现")])]),n("li",null,[u("目的 "),n("ul",null,[n("li",null,"解决 js 执行线程占用浏览器主线程，而不把执行权交给渲染线程，造成的页面卡顿问题")])]),n("li",null,[u("核心思想 "),n("ul",null,[n("li",null,"Cooperative Scheduling（合作式调度），操作系统常用任务调度策略之一")])]),n("li",null,[u("技术实现 "),n("ul",null,[n("li",null,"requestIdleCallback，不过为了兼容性 react 是自己实现的"),n("li",null,"链表数据结构")])])],-1),C=n("h3",{id:"组件通信-2"},[n("a",{class:"header-anchor",href:"#组件通信-2","aria-hidden":"true"},"#"),u(" 组件通信")],-1),O=n("ul",null,[n("li",null,[u("父子通信 "),n("ul",null,[n("li",null,"props/状态提升")])]),n("li",null,[u("跨组件通信 "),n("ul",null,[n("li",null,"context")])]),n("li",null,[u("全局通信 "),n("ul",null,[n("li",null,"redux"),n("li",null,"mobx")])])],-1),D=n("h3",{id:"组件技巧"},[n("a",{class:"header-anchor",href:"#组件技巧","aria-hidden":"true"},"#"),u(" 组件技巧")],-1),F=n("ul",null,[n("li",null,[u("Context：组件组件向后代组件传值 "),n("ul",null,[n("li",null,"Provider：提供数据的组件"),n("li",null,"Consumer：消费数据的组件")])]),n("li",null,[u("高阶组件：以组件作为参数返回一个新组件 "),n("ul",null,[n("li",null,"高阶组件就是一个工厂函数"),n("li",null,"高阶组件是为了保证组件的功能单一性，减少代码入侵"),n("li",null,"高阶组件是为了扩展基础组件，使其功能更多样化，同时又不改变基础组件本身")])]),n("li",null,"组件 slot：利用 props.children，实现类似 vue 的 slot 和作用域 slot"),n("li",null,"hooks：使函数式组件拥有更多可能")],-1),M=n("h3",{id:"组件优化"},[n("a",{class:"header-anchor",href:"#组件优化","aria-hidden":"true"},"#"),u(" 组件优化")],-1),y=n("ul",null,[n("li",null,[u("class component 优化 "),n("ul",null,[n("li",null,"shouldComponentUpdate"),n("li",null,"PureComponent")])]),n("li",null,[u("function component 优化 "),n("ul",null,[n("li",null,"React.memo 函数式组件的 PureComponent")])])],-1),P=n("h3",{id:"一些技巧-2"},[n("a",{class:"header-anchor",href:"#一些技巧-2","aria-hidden":"true"},"#"),u(" 一些技巧")],-1),V=n("ul",null,[n("li",null,"setState 并不总是立即更新组件。它会批量推迟更新，想要在获取 setState 的新值可以使用 setState 的第二参数 callback 或者在 componentDidUpdate 生命周期"),n("li",null,[u("setState 参数一有两种类型 "),n("ul",null,[n("li",null,"对象"),n("li",null,"updater 函数：接收最新的 state 和 props，返回值就是更新内容")])]),n("li",null,"因为 setState 是批量异步更新的，所以在同一周期内对同一属性多次修改，只会合并更新一次，也就是说是最后一次的起作用，如果需要每次更新而不是更新一次，可以用 updater 函数"),n("li",null,[u("setState 的第二参数 callback 拿到的永远都是最新的批量更新完的 state，哪怕是用 updater 更新数据，拿到的也是"),n("strong",null,"最后修改完毕"),u("的值")]),n("li",null,"setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的"),n("li",null,[u("不论是"),n("code",null,"PureComponent"),u("还是"),n("code",null,"React.memo"),u("都是数据的浅比较，可以结合"),n("code",null,"immutable-js"),u("达到更好的优化效果")])],-1),X=n("h3",{id:"hooks"},[n("a",{class:"header-anchor",href:"#hooks","aria-hidden":"true"},"#"),u(" hooks")],-1),E=n("ul",null,[n("li",null,"useState"),n("li",null,"useEffect"),n("li",null,"useContext"),n("li",null,"useReducer"),n("li",null,"useCallback"),n("li",null,"useMemo"),n("li",null,"useRef"),n("li",null,"useImperativeHandle"),n("li",null,"useLayoutEffect")],-1);a.render=function(n,u,t,a,J,U){return l(),e("div",null,[i,o,s,c,r,d,h,p,m,k,v,f,b,g,x,R,S,w,j,$,q,C,O,D,F,M,y,P,V,X,E])};export default a;export{t as __pageData};