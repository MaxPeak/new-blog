## NodeJs 是什么

- 它是一个 Javascript 运行环境
- 依赖于 Chrome V8 引擎进行代码解释
- 事件驱动
- 非阻塞 I/O
- 轻量、可伸缩，适于实时数据交互应用
- 单进程，单线程

## 优点

- 高并发（最重要的优点）
- 适合 I/O 密集型应用

## 缺点

- 不适合 CPU 密集型应用
- 只支持单核 CPU，不能充分利用 CPU

## 事件循环

node11 之前运行机制不同于[浏览器环境](./js#事件循环)

### libuv 引擎的 6 个阶段

- timers 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调
- I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调
- idle, prepare 阶段：仅 node 内部使用
- poll 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里
- check 阶段：执行 setImmediate() 的回调
- close callbacks 阶段：执行 socket 的 close 事件回调

### 宏任务（macrotask）

- script 整体代码
- setTimeout/setInterval
- setImmediate
- I/O 操作

### 微任务（microtask）

- process.nextTick
- promise

### 其他

- process.nextTick 独立在 event loop 之外，它有自己的队列，它优先于微任务队列
- 执行时机：microtask 在事件循环的各个阶段之间执行
- node11 之后执行时机和浏览器一致了！

## 模块机制

导出导出遵从 CommonJS 规范（运行时加载）

### 导入

```js
// 运行时执行
// 导出的可以是任何的 js 数据类型

const name = require("");
```

### 导出

```js
// 导出的值会被缓存
// 导出的是一个值得拷贝

module.exports = {};
exports = {};

// export和module.exports的区别
// require执行寻找的是其他模块的module.exports这个属性，值默认为{}
// exports是module.exports这个属性的简写形式，相当于global.exports = module.exports(对象引用关系)
// 所以在导出时用exports简写形式时不能直接等号赋值，只能用.去扩展，而用module.exports可以直接等号赋值也可以用.扩展
// 大多数情况建议用module.exports，这样会减少不必要的麻烦
```

## npm

### 常用指令

- `-g` 全局安装
- `--save` 安装的模块在 dependencies 里面 (简写 npm -S)
- `--save-dev` 安装的模块在 devDependencies 里面(简写 npm -D)
- `-y` 默认全部确定，一般在 init 的时候使用
- `npm init` 初始化项目环境
- `npm install` 下载安装模块 (简写 npm i)
- `npm uninstall` 删除模块

### 上传包

在 npm 官网需要有一个账号

- 在本地创建模块文件夹
- 初始化项目环境 `npm init`
- 编写代码
- 修改`package.json`文件

  - name:包名字（起名时不要有与 npm 里面有重复）
  - version：包版本，x.x.x 的格式，符合语义化版本规则
  - description：描述信息
  - bin：执行脚本的软连接，写脚手架需要用到
  - main：项目入口地址（CommonJS 规范）
  - module：项目入口地址（es6 规范）
  - types：ts 类型文件申明
  - scripts：指定了运行脚本命令的 npm 命令行缩写，默认是空的 test
  - keywords：包的关键词，便于 npm 检索
  - author：作者信息，一般提供 github 地址
  - license: 许可证，默认是 ISC、有的默认是 MIT
  - files：包含在项目中的文件(夹)数组，可以声明一个.gitignore 来忽略部分文件
  - repository：项目代码仓库地址
  - homepage: 项目主页 url，（包的官网）
  - config：字段用于添加命令行的环境变量
  - dependencies：在生产环境中需要用到的依赖
  - devDependencies：在开发、测试环境中用到的依赖

- 在控制台输入 `npm login` 进行登录（用户名，密码，邮箱）
- 上传你的模块 `npm publish`

### 更新包

- 修改`package.json`的版本号
- 上传你的模块 `npm publish`

### 删除包

- `npm unpublish -f` 包名

### npx

npm5.2 之后新增了 npx 命令，其目的是为了避免全局安装一些模块，比如 create-react-app，以前使用需要-g 全局安装，使用 npx 模块就不需要全局安装，直接`npx create-react-app projectName`就可以了，在执行 npx 的时候，会将 create-react-app 下载到一个临时目录，使用以后再删除，这样既能保持本地全局模块的干净，也能保证每次都是最新的 cli 版本

- `npx @vue/cli create projectName`
- `npx create-react-app projectName`

### npm init

npm6.1 之后增加的一个更加方便得快捷使用 cli 的命令，简单来说就是你执行 `npm init thinkjs` 的话 npm 会补全模块名为 `create-thinkjs` 并执行 `npx create-thinkjs`，vite 就是这样做的，`npm init @vitejs/app projectName`相当于`npx create-vite-app projectName`

### 如何写脚手架

```json
// package.json
"bin": {
  "vue": "bin/vue.js"
}
```

```js
// bin/vue.js

// 这句话必须加，为了保证不同电脑的node路径一致，并且必须是文件开头第一行
#!/usr/bin/env node

// code...
```

## 常用的几个全局变量

- \_\_dirname：当前执行脚本所在目录
- \_\_filename：当前执行脚本的文件名
- process：进程状态对象
  - process.argv：命令行参数集合
  - process.env：环境变量
