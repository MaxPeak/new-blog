## Vue

### 生命周期

<img src="/vue-2x.png" width="500" alt="vue生命周期">

### 组件通信

- 父子通信
  - props/\$emit
  - xxx.sync/\$emit('update:xxx',val)
  - v-model/\$emit('input',val)
  - $patent/$children
  - v-slot:xxx/:xxx
- 兄弟组件通信
  - ref/\$refs
- 跨组件通信
  - provide/inject
  - 递归判断+\$emit
- 全局通信
  - vuex
  - eventBus

### 基础组件&业务组件

- 基础组件(通用性强)
  - 布局组件
    > 只负责页面布局，功能简单，视情况决定需不需要维护自己的状态
  - 表单组件
    > 负责页面与用户的数据交互，功能相对复杂，需要维护自己的状态
  - 功能型组件
    > 功能视情况而定，需要维护自己的状态
  - 展示型组件
    > 纯展示型组件，功能简单，不需要维护自己的状态
- 业务组件(更符合业务逻辑)
  > 逻辑相对复杂，和业务耦合，需要维护自己的状态

### 组件的接口设计

- 常规类型(非`Object`/`Function`类型)
  > 直接定义即可，最简单
- `Function`类型
  > `Function`类型多用于组件内部循环时使用，非常灵活，比如 table 组件的`row-class-name`
- `Object`类型
  > 也可以直接定义成`Object`类型，极少用，不推荐

### 一些技巧

- 通过`v-bind="$attrs"`和`v-on="$listeners"`来减少`props`和`$emit`的数量
- `inheritAttrs: true`一般结合`v-bind="$attrs"`使用，让元素"更干净"
- 一般面包屑导航可以通过观察路由对象来生成
- 递归组件一定要确保组件的`name`选项
- 特殊情况需要渲染 vnode 或者 jsx 可以用`functional: true`
- `watch`某个值要在初始化就执行添加`immediate: true`即可
- 如果一个 hander-bar 有很多组件，优化 html 可以用动态组件`component`
- 组件如果因为功能过于复杂导致一个组件代码太多可以用`mixins`分类编写
- 想修改`v-model`的默认 `value`props 和`input`事件可以用`model`来重新设置
- 在 SSR 方案里面编写组件可以利用`$isServer`来判断是否运行在服务器端
- 全局组件可以通过`Vue.extend`创建子类来实现
- webpack 的`require.context`可以实现 svg 组件的全局注册，mixin 的批量引入，路由的批量引入等
- 组件或者 dom 的传递多使用`slot`,`slot`通信可用`v-slot`
- 不需要响应式监听的数据可以定义在 `data` 里面，但不要 `return` 出来，这样就避开了 vue 的响应式监听，优化性能，但需要记得在组件销毁的时候手动销毁事件，防止内存泄露
- 多用 `computed` 少用 `watch`

## React

### 基础

- React：负责逻辑控制，更新数据，解析 JSX
- ReactDom：负责渲染，把 vnode 渲染成真实 DOM
- JSX：一种 js 的扩展语法，可以很好的描述页面，提升开发效率，而且会预防 XSS 危险，JSX 最终转换成 vnode
  ```js
  // 比如创建一个h1标签
  // 不用jsx是这样的
  const h1 = React.createElement("h1", null, "h1标题 ");
  // 用jsx是这样的，嵌套越深优势越大
  const h1 = <h1>h1标题</h1>;
  ```
- 组件类型
  - function component：通常情况下无状态和生命周期，想使其有状态和生命周期可以用 hooks
  - class component：有状态和生命周期
- hooks：react16.8 引入了 hooks，使函数型组件也能拥有状态
- 组件状态管理
  - function component： hooks
  - class component：state/setState
- 受控组件 vs 非受控组件
  - React 有两种不同的方式来处理表单输入。
  - 如果一个 input 表单元素的值是由 React 控制，就其称为受控组件。当用户将数据输入到受控组件时，会触发修改状态的事件处理器，这时由你的代码来决定此输入是否有效（如果有效就使用更新后的值重新渲染）。如果不重新渲染，则表单元素将保持不变。
  - 一个非受控组件，就像是运行在 React 体系之外的表单元素。当用户将数据输入到表单字段（例如 input，dropdown 等）时，React 不需要做任何事情就可以映射更新后的信息。然而，这也意味着，你无法强制给这个表单字段设置一个特定值。
  - 在大多数情况下，你应该使用受控组件

### 虚拟 DOM

- 用 js 对象来描述 DOM，这个对象就是虚拟 DOM
- 跨平台：抽象出 dom 操作层，这样其他的程序也能用，而只需要替换 dom 操作层
- 速度快：更新之前做 diff 达到最少操作 dom 的目的

### 生命周期

react 的生命周期有几次比较重要的改动

- 16.3 之前的生命周期
  <img src="/react16.3-prev.png" width="500" alt="react16.3之前的生命周期">
- 16.3 的生命周期
  <img src="/react16.3.png"  alt="react16.3生命周期">
- 16.4 的生命周期
  <img src="/react16.4.png"  alt="react16.4生命周期">

### React Fiber（时间切片）

- 什么是 React Fiber？
  - Facebook 历时两年对 React 核心算法的一次重新实现
- 目的
  - 解决 js 执行线程占用浏览器主线程，而不把执行权交给渲染线程，造成的页面卡顿问题
- 核心思想
  - Cooperative Scheduling（合作式调度），操作系统常用任务调度策略之一
- 技术实现
  - requestIdleCallback，不过为了兼容性 react 是自己实现的
  - 链表数据结构

### 组件通信

- 父子通信
  - props/状态提升
- 跨组件通信
  - context
- 全局通信
  - redux
  - mobx

### 组件技巧

- Context：组件组件向后代组件传值
  - Provider：提供数据的组件
  - Consumer：消费数据的组件
- 高阶组件：以组件作为参数返回一个新组件
  - 高阶组件就是一个工厂函数
  - 高阶组件是为了保证组件的功能单一性，减少代码入侵
  - 高阶组件是为了扩展基础组件，使其功能更多样化，同时又不改变基础组件本身
- 组件 slot：利用 props.children，实现类似 vue 的 slot 和作用域 slot
- hooks：使函数式组件拥有更多可能

### 组件优化

- class component 优化
  - shouldComponentUpdate
  - PureComponent
- function component 优化
  - React.memo 函数式组件的 PureComponent

### 一些技巧

- setState 并不总是立即更新组件。它会批量推迟更新，想要在获取 setState 的新值可以使用 setState 的第二参数 callback 或者在 componentDidUpdate 生命周期
- setState 参数一有两种类型
  - 对象
  - updater 函数：接收最新的 state 和 props，返回值就是更新内容
- 因为 setState 是批量异步更新的，所以在同一周期内对同一属性多次修改，只会合并更新一次，也就是说是最后一次的起作用，如果需要每次更新而不是更新一次，可以用 updater 函数
- setState 的第二参数 callback 拿到的永远都是最新的批量更新完的 state，哪怕是用 updater 更新数据，拿到的也是**最后修改完毕**的值
- setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的
- 不论是`PureComponent`还是`React.memo`都是数据的浅比较，可以结合`immutable-js`达到更好的优化效果

### hooks

- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
