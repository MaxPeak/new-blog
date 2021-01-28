## 面向对象编程（OOP）

基于类进行扩展和复用

### 三大特点

- 封装
- 继承
- 多态

## 面向切面编程（AOP）

对 OOP 的一种补充增强，把各个模块的重复功能提取出来，抽象成一个切面，比如权限，日志

### 特点

减少代码侵入性，因为这可能会影响到其他的功能

### 实现

js 中可以通过`Proxy`来实现

## 函数式编程（FP）

### 特点

- 函数是“一等公民”
- 模块化、组合
- 引用透明
- 数据不可变性
- 声明式编程

### 声明式编程与命令式编程

- 声明式编程
  以数据结构的形式来表达程序执行的逻辑。它的主要思想是告诉计算机应该做什么，但不指定具体要怎么做
- 命令式编程
  关注计算机执行的步骤，即一步一步告诉计算机先做什么再做什么

```js
// 需求，数组求和
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 命令式编程 需要一步步实现过程
let result = 0;
for (const item of arr) {
  result += item;
}
console.log(result);
// 声明式编程 抽象了过程 只需要知道结果 常用的还有map filter等
let result = arr.reduce((prev, current) => prev + current);
console.log(result);
```

### 相关术语

- 函数组合 Function Composition

  将多个函数合成在一起构成一个新函数，其中一个函数的输出是另一个函数的输入

  ```js
  // 需求：字符串转大写，然后倒序
  let str = "this is str";
  //非组合函数
  function oneLine(str) {
    var res = str.toUpperCase().split("").reverse().join("");
    return res;
  }
  //组合函数
  function compose(...args) {
    return (result) => {
      return args.reduce((result, fn) => {
        return fn(result);
      }, result);
    };
  }
  function stringToUpper(str) {
    return str.toUpperCase();
  }
  function stringReverse(str) {
    return str.split("").reverse().join("");
  }
  let res = compose(stringToUpper, stringReverse);
  console.log(res(str)); // RTS SI SIHT
  ```

  ```js
  // 实现一个表单验证器
  const requireRegexp = (reg, message) => (str) => reg.test(str) && message;
  const isRequired = (message) => (str) => str === "" && message;
  class Validation {
    // 验证队列
    rulesList = [];
    // 需要验证的字符串
    input = null;
    // 入口函数
    data(input) {
      if (typeof input !== "string") throw new Error("required is string");
      this.input = input.trim();
      return this;
    }
    // 规则集
    rules(...rest) {
      this.rulesList = this.rulesList.concat(rest);
      return this;
    }
    // 惰性求值
    run() {
      let input = this.input;
      let result = null;
      for (const item of this.rulesList) {
        result = item(input);
        if (result) return result;
      }
    }
  }

  let test = new Validation();
  let result = test
    .data("test")
    .rules(requireRegexp(/test/, "不能是test"), isRequired("不能为空"))
    .run();
  console.log(result);
  ```

- 柯里化 Currying

  将多参函数转换为单参函数的过程

  ```js
  //常规函数
  const sum = (a, b) => a + b;
  //使用方式
  sum(40, 2);
  //柯里化函数
  const curriedSum = (a) => (b) => a + b;
  //使用方式1
  curriedSum(40)(2); // 42.
  //使用方式2
  const add2 = curriedSum(2); // (b) => 2 + b
  add2(10); // 12
  ```

  ```js
  /**
   * 写一个sum方法 使
   * sum(1,2,3,4,5).valueOf()
   * sum(1,2,3,4)(5).valueOf()
   * sum(1,2,3)(4)(5).valueOf()
   * sum(1,2)(3)(4)(5).valueOf()
   * sum(1)(2)(3)(4)(5).valueOf()
   * 的值都等于15
   * 可传多个参或者单参甚至不传参都不会影响后续链式调用的执行结果
   */
  //IIFE 函数自执行
  const sum = (() => {
    //求和函数
    const add = (...rest) => rest.reduce((a, b) => a + b);
    //存值数组
    let data = [];
    //存值函数
    function fn(...rest) {
      data = data.concat(rest);
      return fn;
    }
    //惰性求和并清空存值数组
    fn.valueOf = function () {
      let result = add(...data);
      data = [];
      return result;
    };
    return fn;
  })();
  let s1 = sum(1, 2, 3, 4, 5).valueOf();
  let s2 = sum(1, 2, 3, 4)(5).valueOf();
  let s3 = sum(1, 2, 3)(4)(5).valueOf();
  let s4 = sum(1, 2)(3)(4)(5).valueOf();
  let s5 = sum(1)(2)(3)(4)(5).valueOf();
  let s6 = sum(1)()(5)(4)(5).valueOf();
  console.log(s1, s2, s3, s4, s5, s6);
  ```

- 纯函数 Purity

  满足以下四点：

  - 相同的输入永远返回相同的输出
  - 不修改函数的输入值
  - 不依赖外部环境状态
  - 无任何副作用

  ```js
  let arr = [1, 2, 3, 4, 5];
  //splice就是非存函数,每次执行都得不到一个可以预料的答案，并且会改变原始数组
  arr.splice(1, 1); // [2]
  arr.splice(1, 1); // [3]
  arr.splice(1, 1); // [4]
  console.log(arr); // [1, 5]
  //slice就是纯函数,返回新数组，不改变本身，执行结果可预测
  let arr1 = [1, 2, 3, 4, 5];
  arr1.slice(2); // [3, 4, 5]
  arr1.slice(2); // [3, 4, 5]
  arr1.slice(2); // [3, 4, 5]
  console.log(arr1); // [1, 2, 3, 4, 5]
  ```

- 偏函数 Partial

  固定函数的一个或者多个参数，然后返回一个新的函数，返回入参函数的剩余函数

  ```js
  //bind就是典型的偏函数
  //好处就是固定重复输入的参数减少输入的次数
  const sum = (a, b) => a + b;
  //使用方式
  sum(40, 2); // 42
  sum(40, 4); // 44
  sum(40, 6); // 46
  //偏函数
  function partial(fn, a) {
    return function (b) {
      return fn.call(this, a, b);
    };
  }
  const parSum = partial(sum, 40);
  parSum(2); // 42
  parSum(4); // 44
  parSum(6); // 46
  ```

- 高阶函数 Higher-Order Functions (HOF)

  以函数为参数并且返回一个函数的函数

  ```js
  // 上述的偏函数也是高阶函数
  const HOF = (fn) => {
    console.log("in");
    // coding...
    return fn;
  };
  ```

- 闭包 Closure

  能够读取其他函数内部变量的函数，可用于：

  - 模块化
  - 数据私有化
  - 缓存数据

  ```js
  //这样就形成了闭包
  function closure() {
    let state = "这是函数内部的变量";
    return function () {
      return state;
    };
  }
  ```

- 惰性求值 Lazy evaluation

  惰性求值是一种按需求值机制，它会延迟对表达式的求值，直到其需要为止

  ```js
  const rand = function* () {
    while (1 < 2) {
      yield Math.random();
    }
  };
  const randIter = rand();
  randIter.next(); // 每个执行都给出一个随机值，表达式按需求值。
  ```

- 副作用 Side effects

  函数副作用是指函数在正常工作任务之外对外部环境所施加的影响。具体地说，函数副作用是指函数被调用，完成了函数既定的计算任务，但同时因为访问了外部数据，尤其是因为对外部数据进行了写操作，从而一定程度地改变了系统环境。函数的副作用也有可能是发生在函数运行期间，由于对外部数据的改变，导致了同步运行的外部函数受到影响

  ```js
  let flag = true;
  // 副作用函数 修改了外部状态
  function effects() {
    // code...
    flag = false;
  }
  ```

- 态射 Morphism

  一种状态到另一种状态的映射

  ```js
  // 类型映射
  const isNumber = (n) => typeof n === "number";
  ```

## 反应式编程（RP）

数据变化，自动响应更新

## 函数式反应型编程（FRP）

FP 和 RP 的结合，消除了 callback，通过 api 的语义，让代码流程更清晰，阅读体验更好
