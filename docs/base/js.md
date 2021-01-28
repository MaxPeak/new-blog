## 类型

js 的每一个值都是一种类型，根据最新的语言标准，有七种类型和一种提案类型：

### Undefined

用 void 0 来获取 undefined，因为 undefined 是一个变量而并非关键字，是可以被修改的，不过在现代浏览器中是可以安全使用的，因为这一行为在 2009 年的 [ECMAScript 5](https://es5.github.io/#x15.1.1.3)被修复了

### Null

因为 null 是 Object 的衍生类型，所以在使用`typeof null`的时候得到的是 object

### Boolean

### String

- String 有最大长度限制(2^53-1),这个长度不是指字符串长度，而是对应的 `Unicode` 编码长度
- JavaScript 字符串把每个 UTF16 单元当作一个字符来处理，所以处理非 BMP（超出 U+0000 - U+FFFF 范围）的字符时，要格外注意

### Number

- JavaScript 中的 Number 类型有 18437736874454810627(即 2^64-2^53+3) 个值
- JavaScript 中的 Number 类型采用 IEEE 754-2008 规定的双精度浮点数规则，所以会有两个问题

  - 进行小数计算会有精度丢失问题，解决办法是把小数转换成整数进行计算得到结果在转换回小数
  - 超过最大安全数无法正确计算和显示，解决办法是使用第三方库或者是使用 BigInt 数据类型

- 特殊的三个值
  - NaN，占用了 9007199254740990，这原本是符合 IEEE 规则的数字
  - Infinity，无穷大
  - -Infinity，负无穷大

### Symbol

Symbol 是 ES6 中引入的新类型，它是一切非字符串的对象 key 的集合，在 ES6 规范中，整个对象系统被用 Symbol 重塑

### Object

Object 是 JavaScript 中最复杂的类型，也是 JavaScript 的核心机制之一

### BigInt(第三阶段提案)

BigInt 是新的数据类型，BigInt 数据类型的目的是比 Number 数据类型支持的范围更大的整数值。在对大整数执行数学运算时，以任意精度表示整数的能力尤为重要。使用 BigInt，整数溢出将不再是问题，此外，可以安全地使用更加准确时间戳，大整数 ID 等，而无需使用变通方法

## 一些冷知识

- 2^53-1 是 js 中的最大安全整数
- `Symbol.iterator` 可以定义 for of 的行为
  ```js
  const o = new Object();
  o[Symbol.iterator] = function () {
    let v = 0;
    return {
      next() {
        return { value: v++, done: v > 10 };
      },
    };
  };
  for (let item of o) {
    console.log(item); // 1 2 3 4 5...9
  }
  ```
- 在对象原型上添加的方法之所以可以在基础类型中使用，是因为`.`运算符提供了一个装箱操作，它会根据基础类型构造一个临时对象，使我们能在基础类型上调用对应的对象方法
- `async` 函数必定返回 `Promise`

## 类型转换

|         |   Null    |  Undefined  | Boolean(true) | Boolean(false) |     Number     |     String     |  Symbol   |  Object  |
| :-----: | :-------: | :---------: | :-----------: | :------------: | :------------: | :------------: | :-------: | :------: |
| Boolean |   false   |    false    |       -       |       -        |  0/NaN-false   |    ""-false    |   true    |   true   |
| Number  |     0     |     NaN     |       1       |       0        |       -        | StringToNumber | TypeError | 拆箱转换 |
| String  |  "null"   | "undefined" |    "true"     |    "false"     | NumberToString |       -        | TypeError | 拆箱转换 |
| Object  | TypeError |  TypeError  |   装箱转换    |    装箱转换    |    装箱转换    |    装箱转换    | 装箱转换  |    -     |

因为 js 是弱类型语言，所以不同类型之间会进行类型转换，在使用`==`运算符的时候会发生非常多的隐式类型转换，并且规则极其复杂，所以大部分情况下我们会用`===`来进行比较，而不是`==`

### StringToNumber

- 字符串到数字的类型转换，存在一个语法结构，类型转换支持十进制、二进制、八进制和十六进制
  - 30
  - 0b111
  - 0o13
  - 0xFF
- 字符串语法还包括正负号科学计数法，可以使用大写或者小写的 e 来表示
  - 1e3
  - -1e-2
- `parseInt`尽量写上第二个参数，一些浏览器会有诡异行为
- 多数情况下，`Number` 是比 `parseInt` 和 `parseFloat` 更好的选择

### NumberToString

- 在较小的范围内，数字到字符串的转换是完全符合你直觉的十进制表示
- 当 Number 绝对值较大或者较小时，字符串表示则是使用科学计数法表示的

### 装箱转换

- 每一种基本类型 Number、String、Boolean、Symbol 在对象中都有对应的类，所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类
- 装箱机制会频繁产生临时对象，在一些对性能要求较高的场景下，我们应该尽量避免对基本类型做装箱转换
- 使用内置的 Object 函数，我们可以在 JavaScript 代码中显式调用装箱能力

```js
const symbolObject = Object(Symbol("a"));
console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true
```

- 每一类装箱对象皆有私有的 Class 属性，这些属性可以用 `Object.prototype.toString` 获取，在 JavaScript 中，没有任何方法可以更改私有的 Class 属性，因此 Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确

### 拆箱转换

- 在 JavaScript 标准中，规定了 ToPrimitive 函数，它是对象类型到基本类型的转换（即，拆箱转换）
- 对象到 String 和 Number 的转换都遵循“先拆箱再转换”的规则。通过拆箱转换，把对象变成基本类型，再从基本类型转换为对应的 String 或者 Number
- 拆箱转换会尝试调用 valueOf 和 toString 来获得拆箱后的基本类型。如果 valueOf 和 toString 都不存在，或者没有返回基本类型，则会产生类型错误 TypeError

```js
const o = {
  valueOf: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

o * 2;
// valueOf
// toString
// TypeError
```

- 到 String 的拆箱转换会优先调用 toString。我们把刚才的运算从 o\*2 换成 String(o)，那么你会看到调用顺序就变了

```js
const o = {
  valueOf: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

String(o);
// toString
// valueOf
// TypeError
```

- 在 ES6 之后，还允许对象通过显式指定 @@toPrimitive Symbol 来覆盖原有的行为

```js
const o = {
  valueOf: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

o[Symbol.toPrimitive] = () => {
  console.log("toPrimitive");
  return "hello";
};
console.log(o + "");
// toPrimitive
// hello
```

### typeof

- typeof 的运算结果，与运行时类型的规定有很多不一致的地方，下表列出了对应的结果
  | 示例表达式 | typeof 结果 | 运行时类型 |
  | :----------: | :---------: | :--------: |
  | null | object | Null |
  | {} | object | Object |
  | function(){} | function | Object |
  | 3 | number | Number |
  | "ok" | string | String |
  | true | boolean | Boolean |
  | void 0 | undefined | Undefined |
  | Symbol("a") | symbol | Symbol |
- 在表格中，多数项是对应的，但是请注意 object——Null 和 function——Object 是特例，我们理解类型的时候需要特别注意这个区别
- 从一般语言使用者的角度来看，毫无疑问，我们应该按照 typeof 的结果去理解语言的类型系统。但 JavaScript 之父本人也在多个场合表示过，typeof 的设计是有缺陷的，只是现在已经错过了修正它的时机

## js 对象的两类属性

对 JavaScript 来说，属性并非只是简单的名称和值，JavaScript 用一组特征（attribute）来描述属性（property）

### 数据属性

- value：属性的值
- writable：决定属性能否被赋值
- enumerable：决定 for in 能否枚举该属性
- configurable：决定该属性能否被删除或者改变特征值

### 访问器属性

- getter：函数或 undefined，在取属性值时被调用
- setter：函数或 undefined，在设置属性值时被调用
- enumerable：决定 for in 能否枚举该属性
- configurable：决定该属性能否被删除或者改变特征值

其中`writable`，`enumerable`,`configurable`默认都是`true`,用代码验证下：

```js
const o = { a: 1 };
o.b = 2;
//a 和 b 皆为数据属性
Object.getOwnPropertyDescriptor(o, "a"); // {value: 1, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o, "b"); // {value: 2, writable: true, enumerable: true, configurable: true}
```

要改变其默认值，可以使用`Object.defineProperty`

```js
const o = { a: 1 };
Object.defineProperty(o, "b", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true,
});
//a和b都是数据属性，但特征值变化了
Object.getOwnPropertyDescriptor(o, "a"); // {value: 1, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o, "b"); // {value: 2, writable: false, enumerable: false, configurable: true}
o.b = 3;
console.log(o.b); // 2
```

在创建对象的时候，可以使用 get 和 set 关键字来创建访问器属性

```js
const o = {
  get a() {
    return 1;
  },
};

console.log(o.a); // 1
```

访问器属性跟数据属性不同，每次访问属性都会执行 getter 或者 setter 函数

## 原型

- 对象的私有字段`[[prototype]]`就是对象的原型
- 读一个属性，如果对象本身没有，会继续访问对象的原型，直到原型为空或者找到为止
- ES6 以来，js 提供了一系列的内置函数，让我们更加方便的访问操作原型
  - Object.create:根据指定的原型创建新对象，原型可以是 null
  - Object.getPrototypeOf:获得一个对象的原型
  - Object.setPrototypeOf:设置一个对象的原型

## new 操作符做了那些事

- 以构造器的 prototype 属性（注意与私有字段 [[prototype]] 的区分）为原型，创建新对象
- 将 this 和调用参数传给构造器并执行
- 如果构造器返回的是对象，则返回，否则返回第一步创建的对象

```js
function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, arg);
  return res instanceof Object ? res : obj;
}
function A(name) {
  this.name = name;
}
let a = _new(A, "小明");
let b = _new(A, "小红");

console.log(a.prototype === b.prototype); // true
console.log(a, b);
console.log(a instanceof A); // true
```

## js 中对象的分类

### 宿主对象

由 js 宿主环境提供，它们的行为完全有宿主环境决定

- 浏览器环境：window
- nodejs 环境：global

### 内置对象

js 提供的对象

- 固有对象：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例
  > ECMA 为我们提供了 150+的固有对象，[这里可以查看](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-well-known-intrinsic-objects)
- 原生对象：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象
  | 基本类型 | 基础功能和数据结构 | 错误类型 | 二进制操作 | 带类型的数组 |
  | :------: | :----------------: | :------------: | :--------------: | :---------------: |
  | Boolean | Array | Error | ArrayBuffer | Float32Array |
  | String | Date | EvalError | ShareArrayBuffer | Float64Array |
  | Number | RegExp | RangeError | DataView | Int8Array |
  | Symbol | Promise | ReferenceError | | Int16Array |
  | Object | Proxy | SyntaxError | | Int32Array |
  | | Map | TypeError | | UInt8Array |
  | | WeakMap | URIError | | UInt16Array |
  | | Set | | | UInt32Array |
  | | WeakSet | | | UInt8ClampedArray |
  | | Function | | | |
- 普通对象：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承
- 特殊行为的对象
  - Array：Array 的 length 属性根据最大的下标自动发生变化
  - Object.prototype:作为所有正常对象的默认原型，不能给它设置原型
  - String：为了支持下标运算，String 的正整数属性访问会去字符串里面查找
  - Arguments：Arguments 的非负整数型下标属性跟对应的变量联动
  - 模块的 namespace 对象：特殊的地方非常多，跟普通的对象完全不一样，尽量只用于 import
  - 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊
  - bind 后的 function：跟原来的函数相关联

## 事件循环

运行机制不同于[node 环境](./nodejs#事件循环)

### 宏观任务（macrotask）

- script 整体代码
- setTimeout/setInterval
- I/O 操作
- UI 渲染

### 微观任务（microtask）

- promise
- MutationObserver
- 执行时机：microtask 在事件循环的 macrotask 执行完之后执行

## ES 模块机制

### import

```js
// 编译时执行（静态执行）
// import 语句会执行所加载的模块，如果多次重复执行同一句 import 语句，那么只会执行一次，而不会执行多次

// 仅执行，不输入
import "my_module";

// 具名导入
import { name } from "my_module";

// 全部导入
import * as nickname from "my_module";

// 匿名导入
import name from "my_module";
// 等同于
import { default as name } from "my_module";

// 匿名和具名一起导入
import _, { each, forEach } from "lodash";
```

### export

```js
// 必须导出一个接口，而不能是一个值
// 导出的是值的引用，相当于是动态绑定的，即可以用 setTimeout 延迟改变导出的值，导入的值也会发生变化

// 具名导出
// 第一种
export const name = "Scott";

// 第二种
const name = "Scott";
export { name };

// 匿名导出
export default name;
// 等同于
export { name as default };
```

### 复合写法

```js
export { foo, bar } from "my_module";

export { default } from "my_module";

export { es6 as default } from "my_module";

export { default as es6 } from "my_module";

export * as es6 from "my_module";
```

## 闭包

闭包就是一个能够读取其他函数内部变量的函数

```js
//这样就形成了闭包
function closure() {
  let state = "这是函数内部的变量";
  return function () {
    return state;
  };
}
```

## 执行上下文

任何语句的执行都依赖上下文，不同的上下文语句效果会发生改变

### ES3

- scope：作用域，也常常被叫做作用域链
- variable object：变量对象，用于存储变量的对象
- this value：this 值

### ES5

- lexical environment：词法环境，当获取变量时使用
- variable environment：变量环境，当声明变量时使用
- this value：this 值

### ES7

- lexical environment：词法环境，当获取变量或者 this 值时使用
- variable environment：变量环境，当声明变量时使用
- code evaluation state：用于恢复代码执行位置
- Function：执行的任务是函数时使用，表示正在被执行的函数
- ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码
- Realm：使用的基础库和内置对象实例
- Generator：仅生成器上下文有这个属性，表示当前生成器
- IIFE(立即执行函数)

## 控制型语句一些组合行为

|           | break    | continue | return   | throw |
| --------- | -------- | -------- | -------- | ----- |
| if        | 穿透     | 穿透     | 穿透     | 穿透  |
| switch    | 消费     | 穿透     | 穿透     | 穿透  |
| for/while | 消费     | 消费     | 穿透     | 穿透  |
| function  | 报错     | 报错     | 消费     | 穿透  |
| try       | 特殊处理 | 特殊处理 | 特殊处理 | 消费  |
| catch     | 特殊处理 | 特殊处理 | 特殊处理 | 穿透  |
| finally   | 特殊处理 | 特殊处理 | 特殊处理 | 穿透  |

## JavaScript 的词法定义

- WhiteSpace 空白字符
- LineTerminator 换行符
- Comment 注释
- Token 词
  - IdentifierName 标识符名称，典型案例是我们使用的变量名，注意这里关键字也包含在内了
  - Punctuator 符号，我们使用的运算符和大括号等符号
  - NumericLiteral 数字直接量，就是我们写的数字
  - StringLiteral 字符串直接量，就是我们用单引号或者双引号引起来的直接量
  - Template 字符串模板，用反引号` 括起来的直接量
