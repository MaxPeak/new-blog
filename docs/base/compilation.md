## AST

### 什么是 AST 抽象语法树

:::tip
在计算机科学中，抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。比如，嵌套括号被隐含在树的结构中，并没有以节点的形式呈现；而类似于 if-condition-then 这样的条件跳转语句，可以使用带有两个分支的节点来表示。

和抽象语法树相对的是具体语法树（通常称作分析树）。一般的，在源代码的翻译和编译过程中，语法分析器创建出分析树，然后从分析树生成 AST。一旦 AST 被创建出来，在后续的处理过程中，比如语义分析阶段，会添加一些信息。
:::

### 它能做什么

它更多的是做代码编译阶段的事，因为这个是属于编译原理里面的基础知识， babel 就是用的 AST 来进行的 ES6 语法转 ES5 语法，只是写新的 class 和 API 是用的 polyfill 来实现的

### 什么时候需要用到

在读写源代码文件的时候可以用到，比 `file` 模块更加优雅

### 例子

改写源码中的函数为可 exports.XXX 形式

```js
// 源码 demo.js
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function commonDivision(a, b) {
  while (b !== 0) {
    if (a > b) {
      a = sub(a, b);
    } else {
      b = sub(b, a);
    }
  }
  return a;
}
```

```js
#!/usr/bin/env node

// 主程序 main.js
const recast = require("recast");
const {
  identifier: id,
  expressionStatement,
  memberExpression,
  assignmentExpression,
  arrowFunctionExpression,
} = recast.types.builders;

const fs = require("fs");
const path = require("path");
// 截取参数
const options = process.argv.slice(2);

//如果没有参数，或提供了-h 或--help选项，则打印帮助
if (
  options.length === 0 ||
  options.includes("-h") ||
  options.includes("--help")
) {
  console.log(`
    采用commonjs规则，将.js文件内所有函数修改为导出形式。

    选项： -r  或 --rewrite 可直接覆盖原有文件
    `);
  process.exit(0);
}

// 只要有-r 或--rewrite参数，则rewriteMode为true
let rewriteMode = options.includes("-r") || options.includes("--rewrite");

// 获取文件名
const clearFileArg = options.filter((item) => {
  return !["-r", "--rewrite", "-h", "--help"].includes(item);
});

// 只处理一个文件
let filename = clearFileArg[0];

const writeASTFile = function (ast, filename, rewriteMode) {
  const newCode = recast.print(ast).code;
  if (!rewriteMode) {
    // 非覆盖模式下，将新文件写入*.export.js下
    filename = filename
      .split(".")
      .slice(0, -1)
      .concat(["export", "js"])
      .join(".");
  }
  // 将新代码写入文件
  fs.writeFileSync(path.join(process.cwd(), filename), newCode);
};

recast.run(function (ast, printSource) {
  let funcIds = [];
  recast.types.visit(ast, {
    visitFunctionDeclaration(path) {
      //获取遍历到的函数名、参数、块级域
      const node = path.node;
      const funcName = node.id;
      const params = node.params;
      const body = node.body;

      funcIds.push(funcName.name);
      const rep = expressionStatement(
        assignmentExpression(
          "=",
          memberExpression(id("exports"), funcName),
          arrowFunctionExpression(params, body)
        )
      );
      path.replace(rep);
      return false;
    },
  });

  recast.types.visit(ast, {
    visitCallExpression(path) {
      const node = path.node;
      if (funcIds.includes(node.callee.name)) {
        node.callee = memberExpression(id("exports"), node.callee);
      }
      return false;
    },
  });

  writeASTFile(ast, filename, rewriteMode);
});
```
