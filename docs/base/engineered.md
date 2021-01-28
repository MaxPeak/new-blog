## webpack

### entry

```js
// 程序入口
module.exports = {
  // 常规写法
  entry: "path",
  // webpack 会创建过个主入口，然后把他们一起注入到一个"chunk"
  entry: ["path1", "path2"],
  // 常用于多页开发
  entry: { key: "path" },
};
```

### output

```js
// 程序输入
module.exports = {
  // 常规写法
  output: { filename: "filename", path: "path" },
  // 配合entry常用于多页开发
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
};
```

### loader

```js
module.exports = {
  module: {
    // loader主要用于把webpack不认识的文件类型转换成能认识的类型
    rules: [
      // test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件
      // use 属性，表示进行转换时，应该使用哪个 loader
      // options 属性，用于一些配置参数
      { test: /\.css$/, use: "css-loader", options: {} },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
};
```

### plugins

```js
module.exports = {
  // plugins主要用于loader无法实现的其他事，插件会经历整个完整的webpack生命周期，这也是webpack的主要功能
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/app.html"),
    }),
  ],
};
```

### demo

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  // 程序入口
  entry: {
    app: ["@babel/polyfill", path.join(__dirname, "src/app.js")],
  },
  // 代码调试
  devtool: "inline-source-map",
  // 开发环境
  mode: "development",
  // devServer配置
  devServer: {
    compress: true, // gzip压缩
    host: "0.0.0.0", // ip 方便局域网其他同事访问
    hot: true, // 热更新
    historyApiFallback: true, // 解决启动后刷新404
    port: 8000, // 端口
    open: true, // 自动打开浏览器
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    // 复制模板html把打包后的js、css添加到html中
    new HtmlWebpackPlugin({
      filename: "index.html",
      // devServer默认读取这个文件
      template: path.join(__dirname, "src/app.html"),
    }),
  ],
  // 解析路径，查找模块的时候使用
  resolve: {
    // 一般写模块不会写后缀，在这里配置好相应的后缀，那么当我们不写后缀时，会按照这个后缀优先查找
    extensions: [".js", ".vue", ".json"],
    // 路径别名
    alias: {
      "@pages": path.join(__dirname, "src/pages"),
      "@components": path.join(__dirname, "src/components"),
      "@routes": path.join(__dirname, "src/routes.js"),
      "@images": path.join(__dirname, "src/images"),
    },
  },
  module: {
    rules: [
      {
        // enforce:pre表示这个loader要在别的loader执行前执行
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "cache-loader",
          },
          {
            loader: "thread-loader",
          },
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      {
        // 后缀名为js的文件用babel管理
        test: /\.(js)$/,
        // cacheDirectory是用来缓存编译结果，下次编译加速
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "src"),
      },
      {
        // 后缀名为css的文件用style-loader/css-loader管理
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 后缀名为png|jpg|gif的文件用url-loader管理
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 小于等于10k的图片转换成base64直接插入html中，减少http请求
              limit: 10000,
            },
          },
        ],
      },
      {
        // 后缀名为woff|woff2|eot|ttf|otf的文件用file-loader管理
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
};
```

## docker

docker 是基于 go 语言实现的，解决了运行环境和配置问题的软件容器，方便做持续集成并有助于整体发布的容器虚拟技术

### 与传统虚拟机之前的区别

- 传统虚拟机：包含一整套完整的操作系统，过于庞大，且启动时间慢(分钟级)
- 容器虚拟技术：不用包含一整套完整的操作系统，而是对进程进行隔离，只需要将软件运行所需要的所有资源打包到一个隔离的容器中即可，更轻量，更快(秒级)

### 核心概念

- 仓库：仓库是存放镜像的场所，仓库分为公开仓库和私有仓库，最大的公开仓库是 Docker Hub，国内的公开仓库包括阿里云，网易云等
- 镜像：镜像就像是面向对象中的类，是一个**只读**的
- 容器：容器就是镜像的实例，每个容器相互独立相互隔离，它可以被启动、开始、停止、删除

### Dockerfile

Dockerfile 是用来描述文件的构成的文本文档，其中包含了用户可以在使用行调用以组合 Image 的所有命令，用户还可以使用 Docker build 实现连续执行多个命令指今行的自动构建。通过编写 Dockerfile 生磁镜像，可以为开发、测试团队提供基本一致的环境，从而提升开发、测试团队的效率，不用再为环境不统一而发愁，同时运维也能更加方便地管理我们的镜像。

#### 常用语法

| 命令       | 说明                                                                                    |
| ---------- | --------------------------------------------------------------------------------------- |
| FROM       | 基于那个镜像来实现                                                                      |
| MAINTAINER | 镜像的创建者                                                                            |
| ENV        | 声明环境变量                                                                            |
| RUN        | 执行的命令                                                                              |
| ADD        | 添加宿主机文件到容器里，有需要解压的文件会自动解压                                      |
| COPY       | 添加宿主机文件到容器里                                                                  |
| WORKDIR    | 工作目录                                                                                |
| EXPOSE     | 容器内应用可使用的端口                                                                  |
| CMD        | 容器启动后所执行的程序，如果执行 docker run 后面跟启动命令会被覆盖掉                    |
| ENTRYPOINT | 与 CMD 功能相同，但需要 docker run 不会覆盖，如果过需要覆盖可增加参数-entrypoint 来覆盖 |
| VOLUME     | 将宿主机的目录挂载到容器里                                                              |

#### 编写优雅地 Dockerfile

- Dockerfile 文件不宜过长，层级越多最终制作出来的镜像也就越大。
- 构建出来的镜像不要包含不需要的内容，如日志、安装临时文件等。
- 尽量使用运行时的基础镜像，不需要将构建时的过程也放到运行时的 Dockerfile 里

#### dockerignore 文件

```dockerignore
**/node_modules
**/dist
```

#### demo

```Dockerfile
FROM node:10
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
```

### 总结

Docker 本身就是一个容器运行载体或者称之为管理引擎。我们把应用程序和配置依赖打包成一个可交付的运行环境，这个打包好的运行环境就是镜像文件(image)。只有通过这个镜像文件才能生成容器(container)。镜像可以看做是容器的模板。docker 通过镜像生成容器的实例。同一个镜像文件可以生成多个同时运行的容器实例。

- 镜像文件生成容器实例，镜像文件本身也是一个文件
- 一个容器运行一种服务，需要的时候通过 docker 客户端创建一个对应的运行实例，也就是我们的容器
- 仓库就是存放了一堆镜像的地方，我们可以把镜像发布到仓库，需要的时候从仓库拉取下来使用

## nginx

Nginx 是一个高效可靠的 web 服务和代理中间件，负载均衡和反向代理是最常用的功能，如果是 history 模式的单页应用，也会用它进行路由的重定向处理

```nginx
# 每个指令必须有分号结束

# 配置用户或者组，默认为nobody
user  nginx;
# 允许生成的进程数
worker_processes  1;
# 指定日志级别
error_log  /var/log/nginx/error.log warn;
# 指定nginx进程运行文件存放地址
pid        /var/run/nginx.pid;
# events块：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等
events {
  # 最大连接数，默认为512
  worker_connections  1024;
}
# http块：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等
http {
  # 文件扩展名与文件类型映射表
  include       /etc/nginx/mime.types;
  # 默认文件类型，默认为text/plain
  default_type  application/octet-stream;
  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
  # 服务日志
  access_log  /var/log/nginx/access.log  main;
  # 允许sendfile方式传输文件，默认为off，可以在http块，server块，location块
  sendfile        on;
  # 每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限
  sendfile_max_chunk 100k;
  # 连接超时时间，默认为75s，可以在http，server，location块
  keepalive_timeout  65;
  # server块：配置虚拟主机的相关参数，一个http中可以有多个server
  server {
    # 单连接请求上限次数
    keepalive_requests 120;
    # 监听端口
    listen       80;
    # 服务域名
    # 支持多域名配置
    server_name www.barretlee.com barretlee.com;
    # 支持泛域名解析
    server_name *.barretlee.com;
    # 支持对于域名的正则匹配
    server_name ~^\.barret\.com$;
    server_name  localhost;
    # location块：配置请求的路由，以及各种页面的处理情况
    location / {
      # 根目录
      root   /app;
      # 设置默认页
      index  index.html;
      # history模式的单页应用重定向
      try_files $uri $uri/ /index.html;
    }
    # 错误页
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   /usr/share/nginx/html;
    }
    # URI匹配
    # 完全匹配  =
    # 大小写敏感 ~
    # 忽略大小写 ~*
    # 前半部分匹配 ^~
    # 可以使用正则，如：location ~* \.(gif|jpg|png)$ { }
    # 如果以上都未匹配，会进入 /
    location  ~*^.+$ {
      # 请求转向mysvr 定义的服务器列表
      proxy_pass  http://mysvr;
      # 拒绝的ip
      deny 127.0.0.1;
      # 允许的ip
      allow 172.18.5.54;
    }
  }
}
```

## git

git 是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。

[常用指令](/helper/command#git)

### 工作流

git 工作流：又叫分支管理策略，目的是解决多人开发中的诸多问题，例如版本迭代、bug 修复、新功能添加等，从而更好的管理项目代码，工作流不涉及任何指令，只是一个规则

#### 主要分支

- master：master 分支永远都是发布状态，只用于发布代码
- develop：develop 分支保持最新的开发进度

#### 协助分支

- feature：主要用于做功能开发和常规 bug 修复
- release：主要用于做预发布版本，所有的测试在这个分支上进行，测试出现的问题直接在这个分支上修改
- hotfix：主要用于线上紧急 bug 修复

### 提交规范

目的是规范提交信息，方便团队其他成员阅读，也方便自动生成 CHANGELOG 文件

#### 格式

- Header

  - type(必须)

    - feat:新功能
    - fix:修补 bug
    - docs:修改文档，如 README 等
    - style:修改空格，缩进等不改变代码逻辑的变动
    - refactor:重构代码
    - test:测试用例
    - chore:构建过程或者辅助工具的变动
    - revert:回滚版本，撤销以前某个 commit，后面跟上被撤销 commit 的 Header
    - ci:更改了 CI 配置或者脚本
    - perf:优化相关，比如优化性能或者开发体验

  - scope:用于说明 commit 影响的范围，可选值。通常是文件、路径、功能等
  - subject:commit 目的的简短描述。不超过 50 个字符

- Body:commit 的详细描述
- Footer

  - Break Changes: 不兼容变动；BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法
  - Closes： 关闭 Issue；如果当前 commit 针对某个 issue，那么可以在 Footer 部分关闭这个 issue；如： Closes #123, #245, #992

### gitignore

不需要纳入 git 版本控制的文件或目录可以在 .gitignore 文件中定义

```gitignore
#               表示此为注释,将被Git忽略
*.a             表示忽略所有 .a 结尾的文件
/TODO           表示仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/          表示忽略 build/目录下的所有文件，过滤整个build文件夹；
doc/*.txt       表示会忽略doc/notes.txt但不包括 doc/server/arch.txt

bin/:           表示忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
/bin:           表示忽略根目录下的bin文件
/*.c:           表示忽略cat.c，不忽略 build/cat.c
**/foo:         表示忽略/foo,a/foo,a/b/foo等
a/**/b:         表示忽略a/b, a/x/b,a/x/y/b等
!/bin/run.sh    表示不忽略bin目录下的run.sh文件
*.log:          表示忽略所有 .log 文件
config.php:     表示忽略当前路径的 config.php 文件

/mtk/           表示过滤整个文件夹
/mtk/do.c       表示过滤某个具体文件
```
