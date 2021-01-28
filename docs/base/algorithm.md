## 基本概念

> 算法（Algorithm）是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，算法代表着用系统的方法描述解决问题的策略机制。也就是说，能够对一定规范的输入，在有限时间内获得所要求的输出。如果一个算法有缺陷，或不适合于某个问题，执行这个算法将不会解决这个问题。不同的算法可能用不同的时间、空间或效率来完成同样的任务。一个算法的优劣可以用空间复杂度与时间复杂度来衡量

### 特征

- 又穷性
- 确切性
- 输入项
- 输出项
- 可行性

### 评定

- 时间复杂度（完成算法所需要的时间）
- 空间复杂度（完成算法所需要的内存占用率）
- 正确性
- 可读性
- 健壮性

### 方法

- 递推法
- 递归法
- 穷举法
- 贪心算法
- 分治法
- 动态规划
- 迭代法
- 分支界限法
- 回溯法

## 为什么需要算法

优化程序，提高执行效率

## 时间复杂度

:::tip
一个算法在执行过程中所消耗的时间取决于下面的因素:

- （1）算法所需数据输入的时间
- （2）算法编译为可执行程序的时间
- （3）计算机执行每条指令所需的时间
- （4）算法语句重复执行的次数

其中（1）依赖于输入设备的性能，若是脱机输入，则输入数据的时间可以忽略不计。（2）（3）取决于计算机本身执行的速度和编译程序的性能。因此，习惯上将算法语句重复执行的次数作为算法的时间量度

```js
// 执行一次
const add = (num) => num + 1;

// 执行n次
const loopAdd = (x, y) => {
  for (let i = 0; i < y; i++) {
    x++;
  }
};

// 执行n*n次
const doubleLoopAdd = (x, y) => {
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < y; j++) {
      x++;
    }
  }
};
```

一般情况下，n 为问题规模（大小）的量度，如数组的长度、矩阵的阶、图中的顶点数等等。
对于 add 函数来说，问题规模量度为常数（1）；对于数组排序问题来说，问题规模量度为输入数组的长度（记为 n）；对于 n 阶矩阵相加来说，问题规模量度为矩阵阶数的平方（记为 n^2）。

为了给出算法通用的时间量度，用数学概念来描述算法的执行次数，可以把一个算法中语句的执行次数称为语句频度或时间频度，记为 T(n)。当问题规模 n 不断变化时，时间频度 T(n)也会不断变化，我们需要评估当 n 不断变化时，时间频度 T(n)的变化规律。

若有某个辅助函数 f(n)，当 n 趋向于无穷大时，如果 T(n)/ f(n)的极限为不等于零的常数，则认为 T(n)与 f(n)是同量级的函数，记作：T(n) =O(f(n))，O(f(n))称为算法的渐进时间复杂度，简称时间复杂度。

**渐进时间复杂度表示的意义是：**

- 在较复杂的算法中，进行精确分析是非常复杂的
- 一般来说，我们并不关心 T(n)的精确度量，而只是关心其量级

T (n) = O(f (n)) 表示存在一个常数 C，当 n 趋于正无穷大时，总有 T (n) ≤ C \* f(n)，其意义是 T(n)在 n 趋于正无穷大时跟 f(n)基本接近，因此完全可以用 f(n)来表示 T(n)。

O(f (n))通常取执行次数中最高次方或最大指数部分的项。例如：

- （1）阵列元素相加为 2n+3 = O(n)
- （2）矩阵相加为 2n^2+2n+1 = O(n^2)
- （3）矩阵相乘为 2n^3+4n^2+2n+2 = O(n^3)

在各种不同的算法中，若算法语句的执行次数为常数，则算法的时间复杂度为 O(1)，按数量级递增排列，常见的时间复杂度量有：

- （1）O(1)：常量阶，运行时间为常量
- （2）O(logn)：对数阶，如二分搜索算法
- （3）O(n)：线性阶，如 n 个数内找最大值
- （4）O(nlogn)：对数阶，如快速排序算法
- （5）O(n^2)：平方阶，如选择排序，冒泡排序
- （6）O(n^3)：立方阶，如两个 n 阶矩阵的乘法运算
- （7）O(2^n)：指数阶，如 n 个元素集合的所有子集的算法
- （8）O(n!)：阶乘阶，如 n 个元素全部排列的算法

**评估算法时间复杂度的具体步骤是：**

- （1）找出算法中重复执行次数最多的语句的频度来估算算法的时间复杂度
- （2）保留算法的最高次幂，忽略所有低次幂和高次幂的系数
- （3）将算法执行次数的数量级放入大 Ο 记号中

```js
// num + 1不在任何循环体内，则它的时间频度为1，其执行时间是个常量，对应的时间复杂度为O(1)常数阶
const add = (num) => num + 1;

// x++被重复执行n次，其时间频度为n，对应的时间复杂度为O(n)线性阶
const loopAdd = (x, y) => {
  for (let i = 0; i < y; i++) {
    x++;
  }
};

// x++被重复执行n*n次，其时间频度为n^2，对应的时间复杂度为O(n^2)平方阶
const doubleLoopAdd = (x, y) => {
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < y; j++) {
      x++;
    }
  }
};
```

对于较为复杂的算法，可以将它们分割成容易估算的几个部分，然后利用 O 的求和原则得到整个算法的时间复杂度。例如，若算法的两个部分的时间复杂度分别为 T1(n)=O(f(n))和 T2(n)=O(g(n))，则总的时间复杂度为:

`T(n)= T1(n)+ T2(n)=O(max(f(n), g(n)))`

然而，很多算法的运行时间不仅依赖于问题的规模，也与处理的数据集有关。例如，有的排序算法对某些原始数据（如自小至大有序），则其时间复杂度为 O(n)，而对另一些数据可达 O(n^2)。因此，**在估算算法的时间复杂度时，均以数据集中最坏的情况来估算**
:::

## 一些经典的算法思想

### 递归

```ts
/**
 * 递归(Recursion):在计算机科学和数学中，指在函数的定义中使用函数自身
 * 递归的满足条件：
 * 1、自己调用自己
 * 2、边界条件（终止条件），防止无限递归
 * js的尾递归优化：https://www.ruanyifeng.com/blog/2015/04/tail-call.html
 */

// 斐波拉契数列（Fibonacci sequence）
export const fibonacci = (n: number) => {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
// 尾递归优化
export const fibonacci1 = (n: number, n1: number, n2: number) => {
  if (n === 1 || n === 2) return n2;
  return fibonacci1(n - 1, n2, n1 + n2);
};
// 阶乘
export const factorial = (n: number) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
// 尾递归优化
export const factorial1 = (n: number, total: number) => {
  if (n === 1) return total;
  return factorial1(n - 1, n * total);
};

export const testRecursion = () => {
  console.time("普通斐波拉契数列");
  fibonacci(15);
  console.timeEnd("普通斐波拉契数列");
  console.time("尾递归优化斐波拉契数列");
  fibonacci1(15, 1, 1);
  console.timeEnd("尾递归优化斐波拉契数列");

  console.time("普通阶乘");
  factorial(5);
  console.timeEnd("普通阶乘");
  console.time("尾递归优化阶乘");
  factorial1(5, 1);
  console.timeEnd("尾递归优化阶乘");
};
```

### 滑动窗口

```ts
/**
 * 滑动窗口(Sliding window)：滑动窗口算法可以用以解决数组/字符串的子元素问题，它可以将嵌套的循环问题，转换为单循环问题，降低时间复杂度
 */
```

### 动态规划

```ts
/**
 * 动态规划(Dynamic Programming)简称DP，是一种将复杂问题分解成更小的子问题来解决的优化技术
 * 用动态规划解决问题时，要遵循三个重要步骤：
 * 1、定义子问题
 * 2、实现要反复执行来解决子问题的部分（递归）
 * 3、识别并求解出边界条件
 */

/**
 * 最少硬币找零问题
 * 最少硬币找零维问题是硬币找零问题的变种，硬币找零问题是给出要找零的钱数，以及可用的硬币面额及其数量，找出多少种找零方法。
 * 最少硬币找零是给出要找零的钱数，以及可用的硬币面额及其数量，找出所需的最少硬币个数。
 * 例如，美国有以下硬币：1,5,10,25，如何找36美分的零钱，我们可以用1个25美分，1个10美分，1个1美分，如何将这个解答转换成算法？
 */
export class MinCoinChange {
  cache: any;
  coins: number[];
  constructor(coins: number[]) {
    this.coins = coins;
    this.cache = {};
  }
  makeChange(amount: number) {
    if (amount <= 0) return [];
    if (this.cache[amount]) return this.cache[amount];
    let min = [];
    let newMin = [];
    let newAmount = null;
    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i];
      newAmount = amount - coin;
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || newAmount === 0)
      ) {
        min = [coin].concat(newMin);
      }
    }
    return (this.cache[amount] = min);
  }
}
export const testMinCoinChange = () => {
  const min = new MinCoinChange([1, 5, 10, 25]);
  console.log(min.makeChange(36));
};

/**
 * 背包问题，背包问题是一个组合优化问题。
 * 给定一个固定大小、能够携带重W的背包，以及一组有价值和重量的物品，找出一个最佳解决方案，使得装入背包的物品总重量不超过W且总价值最大
 */
/**
 * @param capacity 背包重量
 * @param weights 一组重量
 * @param values 一组值
 * @param n
 */
export const knapSack = (
  capacity: number,
  weights: number[],
  values: number[],
  n: number
) => {
  const ks = [];

  // 创建矩阵
  for (let i = 0; i <= n; i++) {
    ks[i] = [];
  }

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]];
        const b = ks[i - 1][w];
        ks[i][w] = a > b ? a : b;
      } else {
        ks[i][w] = ks[i - 1][w];
      }
    }
  }
  findValues(n, capacity, ks, weights, values);
  return ks[n][capacity];
};
export const findValues = (
  n: number,
  capacity: number,
  ks: any[],
  weights: number[],
  values: number[]
) => {
  while (n > 0 && capacity > 0) {
    if (ks[n][capacity] !== ks[n - 1][capacity]) {
      console.log(
        `物品：${n}, 重量：${weights[n - 1]}, 价值：${values[n - 1]}`
      );
      n--;
      capacity -= ks[n][capacity];
    } else {
      n--;
    }
  }
};
export const testKnapSack = () => {
  const values = [3, 4, 5];
  const weights = [2, 3, 4];
  const capacity = 5;
  const n = values.length;
  console.log(
    `背包总量:${capacity}`,
    "最优价值：",
    knapSack(capacity, weights, values, n)
  );
};

/**
 * 最长公共子序列：找出两个字符串序列的最长子序列的长度
 * 最长子序列：两个字符串序列中以相同顺序出现，但不要求连续的字符串序列
 */
export const lcs = (str1: string, str2: string) => {
  const m = str1.length;
  const n = str2.length;
  const l = [];
  const solution = [];
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
      solution[i][j] = "0";
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
        solution[i][j] = "diagonal";
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b; // max(a,b)
        solution[i][j] = l[i][j] === l[i - 1][j] ? "top" : "left";
      }
    }
  }
  return printSolution(solution, str1, m, n);
};
export const printSolution = (
  solution: any[],
  str: string,
  m: number,
  n: number
) => {
  let a = m;
  let b = n;
  let x = solution[a][b];
  let answer = "";
  while (x !== "0") {
    if (solution[a][b] === "diagonal") {
      answer = str[a - 1] + answer;
      a--;
      b--;
    } else if (solution[a][b] === "left") {
      b--;
    } else if (solution[a][b] === "top") {
      a--;
    }
    x = solution[a][b];
  }
  return answer;
};
export const testLcs = () => {
  console.log("结果：", lcs("acbaed", "abcadf"));
};

/**
 * 矩阵链相乘
 */
export const printOptimalParenthesis = (s: any[], i: number, j: number) => {
  if (i === j) {
    console.log("A[" + i + "]");
  } else {
    console.log("(");
    printOptimalParenthesis(s, i, s[i][j]);
    printOptimalParenthesis(s, s[i][j] + 1, j);
    console.log(")");
  }
};
export const matrixChainOrder = (p: number[]) => {
  const n = p.length;
  const m = [];
  const s = [];
  for (let i = 1; i <= n; i++) {
    m[i] = [];
    m[i][i] = 0;
  }
  for (let i = 0; i <= n; i++) {
    s[i] = [];
    for (let j = 0; j <= n; j++) {
      s[i][j] = 0;
    }
  }
  for (let l = 2; l < n; l++) {
    for (let i = 1; i <= n - l + 1; i++) {
      const j = i + l - 1;
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (let k = i; k <= j - 1; k++) {
        const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) {
          m[i][j] = q;
          s[i][j] = k;
        }
      }
    }
  }
  printOptimalParenthesis(s, 1, n - 1);
  return m[1][n - 1];
};
export const testMatrixChainOrder = () => {
  console.log("最少运算次数：", matrixChainOrder([10, 100, 5, 50, 1]));
};
```

### 贪心算法

```ts
/**
 * 贪心算法(greedy algorithm)，是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。
 */

// 最少硬币找零
export const minCoinChange = (coins: number[], amount: number) => {
  const change: number[] = [];
  let total = 0;
  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  }
  return change;
};

// 矩阵相乘
export const matrixChainOrderTs = (p: number[], i = 1, j = p.length - 1) => {
  if (i === j) {
    return 0;
  }

  let min = Number.MAX_SAFE_INTEGER;

  for (let k = i; k < j; k++) {
    const count =
      matrixChainOrderTs(p, i, k) +
      matrixChainOrderTs(p, k + 1, j) +
      p[i - 1] * p[k] * p[j];

    if (count < min) {
      min = count;
    }
  }

  return min;
};

// 最长公共子序列
export const lcsTs = (
  wordX: string,
  wordY: string,
  m = wordX.length,
  n = wordY.length
) => {
  if (m === 0 || n === 0) {
    return 0;
  }

  if (wordX[m - 1] === wordY[n - 1]) {
    return 1 + lcsTs(wordX, wordY, m - 1, n - 1);
  } else {
    const a = lcsTs(wordX, wordY, m, n - 1);
    const b = lcsTs(wordX, wordY, m - 1, n);
    return a > b ? a : b;
  }
};

// 背包问题
export const knapSackTs = (
  capacity: number,
  weights: number[],
  values: number[]
) => {
  const n = values.length;
  let load = 0;
  let val = 0;

  for (let i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= capacity - load) {
      val += values[i];
      load += weights[i];
    } else {
      const r = (capacity - load) / weights[i];
      val += r * values[i];
      load += weights[i];
    }
  }
  return val;
};
export const testKnapSackTs = () => {
  const values = [3, 4, 5];
  const weights = [2, 3, 4];
  const capacity = 5;
  console.log("背包问题:", knapSackTs(capacity, weights, values));
};
```

### LRU 算法

```ts
/**
 * LRU(Least recently used)最近最少使用算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”
 * LRU 缓存算法的核心数据结构就是哈希链表，双向链表和哈希表的结合体
 */
export class Node {
  key: number;
  val: number;
  next: Node;
  prev: Node;
  constructor(k: number, v: number) {
    this.key = k;
    this.val = v;
    this.next = null;
    this.prev = null;
  }
}
export class DoubleList {
  private head: Node;
  private tail: Node;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  public append(node: Node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  public remove(node: Node) {
    if (node === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.length--;
  }
  public removeFirst() {
    if (this.head === this.tail) return null;
    const head = this.head;
    this.remove(this.head);
    return head;
  }
  public size() {
    return this.length;
  }
}

class LRUCache {
  private map: Map<number, Node>;
  private cache: DoubleList;
  private cap: number;
  constructor(capacity: number) {
    this.cap = capacity;
    this.map = new Map();
    this.cache = new DoubleList();
  }
  /**
   * 将某个 key 提升为最近使用
   * @param key
   */
  private makeRecently(key: number) {
    const node = this.map.get(key);
    this.cache.remove(node);
    this.cache.append(node);
  }
  /**
   * 添加最近使用
   * @param key
   * @param val
   */
  private addRecently(key: number, val: number) {
    const node = new Node(key, val);
    this.cache.append(node);
    this.map.set(key, node);
  }
  /**
   * 删除
   * @param key
   */
  private remove(key: number) {
    const node = this.map.get(key);
    this.cache.remove(node);
    this.map.delete(key);
  }
  /**
   * 删除最久未使用
   */
  private removeLeastRecently() {
    const node = this.cache.removeFirst();
    this.map.delete(node.key);
  }
  public get(key: number) {
    if (!this.map.has(key)) return -1;
    this.makeRecently(key);
    return this.map.get(key).val;
  }
  public put(key: number, val: number) {
    if (this.map.has(key)) {
      this.remove(key);
      this.addRecently(key, val);
      return;
    }
    if (this.cache.size() >= this.cap) {
      this.removeLeastRecently();
    }
    this.addRecently(key, val);
  }
}
export const testDoubleList = () => {
  const link = new DoubleList();
  const node1 = new Node(1, 1);
  const node2 = new Node(2, 2);
  const node3 = new Node(3, 3);
  console.log("add:1", link.append(node1));
  console.log("add:2", link.append(node2));
  console.log("add:3", link.append(node3));
  console.log(link);
  console.log("remove 2:", link.remove(node2));
  console.log(link);
  console.log("remove first:", link.removeFirst());
  console.log(link);
};
// testDoubleList();
export const testLRUCache = () => {
  const lru = new LRUCache(3);
  console.log("get 1:", lru.get(1));
  console.log("put 1", lru.put(1, 1));
  console.log("put 2", lru.put(2, 2));
  console.log("put 3", lru.put(3, 3));
  console.log("get 1:", lru.get(1));
  console.log("put 4", lru.put(4, 4));
  console.log("put 5", lru.put(5, 5));
  console.log(lru);
};
```

## 常用算法

### 排序

```ts
/**
 * 排序算法(Sort)
 * 排序算法非常多，常见的有冒泡排序、选择排序、插入排序、归并排序、快速排序、堆排序、计数排序、桶排序、基数排序
 *
 * 各个浏览器的排序都使用了不同的方法：
 * Google Chrome：插入排序和快速排序 https://github.com/v8/v8/blob/4.2-lkgr/src/array.js
 * Mozilla Firefox：归并排序 https://github.com/mozilla/gecko-dev/blob/master/js/src/builtin/Array.js
 * Safari：归并排序和桶排序 https://github.com/WebKit/webkit/blob/master/Source/JavaScriptCore/builtins/ArrayPrototype.js#L423
 * Microsoft Edge 和 IE(9+)：快速排序 https://github.com/Microsoft/ChakraCore/blob/master/lib/Common/DataStructures/QuickSort.h
 *
 * 就前端业务场景而言个人认为快速排序基本就能完全满足平常排序需求，快速排序也是Google和Microsoft这样的顶级大厂所使用的排序方法，因为真实情况快速排序要比其他的排序更优秀
 * 为什么在平均情况下快速排序比堆排序要优秀？https://www.zhihu.com/question/23873747
 * 为什么说快速排序是性能最好的排序算法？https://blog.csdn.net/qq_36770641/article/details/82669788
 * 参考网站：https://hufangyun.com/2017/sort-array/
 */

export const quickSort = (arr: any[]) => {
  return quick(arr, 0, arr.length - 1);
};
export const quick = (arr: any[], left: number, right: number) => {
  if (arr.length <= 1) return;
  // 分离较大值和较小值的索引
  const index = partition(arr, left, right);
  // 如果存在较小值
  if (left < index - 1) {
    quick(arr, left, index - 1);
  }
  // 如果存在较大值
  if (right > index) {
    quick(arr, index, right);
  }
  return arr;
};
export const partition = (arr: any[], left: number, right: number) => {
  // 选择中间项作为主元
  const pivot = arr[Math.floor((left + right) / 2)];
  // 只要left指针没有和right指针相互交错，就执行划分操作
  while (left <= right) {
    // 移动left指针直到找到比主元大的元素
    while (arr[left] < pivot) {
      left++;
    }
    // 移动right指针直到找到比主元小的元素
    while (arr[right] > pivot) {
      right--;
    }
    // 左项比右项大，交换值
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // 继续移动指针
      left++;
      right--;
    }
  }
  return left;
};

export const testQuickSort = () => {
  const list = [1, 2, 3, 4, 5, 6, 5, 4, 3, 3, 2, 5, 6, 8];
  quickSort(list);
  console.log("quickSort:", list);
};
```

#### 冒泡排序

```js
// 稳定排序 O(n²)
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //交换值
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
console.time("arr");
bubbleSort(arr);
console.log(arr);
console.timeEnd("arr");
```

#### 选择排序

```js
// 不稳定排序 O(n²)
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function selectionSort(arr) {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
console.time("arr");
selectionSort(arr);
console.log(arr);
console.timeEnd("arr");
```

#### 插入排序

```js
// 稳定排序 O(n²)
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function insertSort(arr) {
  let len = arr.length;
  let j;
  for (let i = 1; i < len; i++) {
    const element = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > element) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = element;
  }
}
console.time("arr");
insertSort(arr);
console.log(arr);
console.timeEnd("arr");
```

#### 归并排序

```js
// 稳定排序 O(log 2n²)
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function mergeSplit(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mergeSort(mergeSplit(left), mergeSplit(right));
}
function mergeSort(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
console.time("arr");
console.log(mergeSplit(arr));
console.timeEnd("arr");
```

#### 快速排序

```js
// 不稳定排序 O(log 2 n²)
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function quickSork(arr) {
  quick(arr, 0, arr.length - 1);
}
function quick(arr, left, right) {
  //基准 默认以左侧开始
  let point = left;
  //标点 默认以基准后一个开始
  let index = point + 1;
  for (let i = index; i <= right; i++) {
    //当前值小于基准，交换位置
    if (arr[i] < arr[point]) {
      //交换位置
      [arr[i], arr[index]] = [arr[index], arr[i]];
      //标点改变
      index++;
    }
  }
  //自减校准标点
  index--;
  //结束遍历之后把基准值和最后一个标点交换位置
  [arr[point], arr[index]] = [arr[index], arr[point]];
  let leftEnd = index - 1;
  let rightStart = index + 1;
  if (leftEnd > left) {
    quick(arr, point, leftEnd);
  }
  if (rightStart < right) {
    quick(arr, rightStart, right);
  }
}
console.time("arr");
quickSork(arr);
console.log(arr);
console.timeEnd("arr");
```

#### 堆排序

```js
// 不稳定排序 O(log 2 n²)
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function heapSort(arr) {
  let len = arr.length;
  for (let j = len; j > 1; j--) {
    let i = Math.floor(j / 2) - 1;
    heap(arr, i, j);
  }
}
function heap(arr, i, len) {
  //找出最大值并交换
  while (i >= 0) {
    let left = i * 2 + 1,
      right = i * 2 + 2,
      maxIndex = i;
    //更新最大值
    if (left < len && arr[left] > arr[maxIndex]) {
      maxIndex = left;
    }
    if (right < len && arr[right] > arr[maxIndex]) {
      maxIndex = right;
    }
    //交换值
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    i--;
  }
  //把最大值与末尾进行交换
  [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]];
}
console.time("arr");
heapSort(arr);
console.log(arr);
console.timeEnd("arr");
```

#### 计数排序

```js
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function countSort(arr) {
  let list = [];
  arr.forEach((item) => {
    if (!list[item]) list[item] = 0;
    list[item]++;
  });
  let j = 0;
  list.forEach((item, i) => {
    while (item > 0) {
      arr[j++] = i;
      item--;
    }
  });
}
console.time("arr");
countSort(arr);
console.log(arr);
console.timeEnd("arr");
```

#### 桶排序

```js
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function bucketSort(arr) {
  let len = arr.length;
  let bucketSize = 10;
  let bucketArr = [];
  for (let i = 0; i < len; i++) {
    let index = Math.floor(arr[i] / bucketSize);
    if (!bucketArr[index]) bucketArr[index] = [];
    bucketArr[index].push(arr[i]);
  }
  let j = 0;
  for (let i = 0; i < bucketArr.length; i++) {
    quickSork(bucketArr[i]);
    bucketArr[i].forEach((item) => {
      arr[j++] = item;
    });
  }
}
console.time("arr");
bucketSort(arr);
console.log(arr);
console.timeEnd("arr");
```

#### 基数排序

```js
// 适用范围整数和正数
let arr = [4, 5, 6, 8, 2, 3, 1, 7];
function radixSort(arr) {
  let len = arr.length;
  let max = arr[0];
  let radixArr = [];
  arr.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });
  let maxDigit = 1;
  while (max >= 10) {
    max /= 10;
    maxDigit++;
  }
  let x = 10;
  y = 1;
  for (let i = 0; i < maxDigit; i++) {
    const element = [i];
    for (let j = 0; j < len; j++) {
      let v = Math.floor((arr[j] % x) / y);
      if (!radixArr[v]) radixArr[v] = [];
      radixArr[v].push(arr[j]);
    }
    x *= 10;
    y *= 10;
    let index = 0;
    for (let j = 0; j < radixArr.length; j++) {
      if (!radixArr[j]) continue;
      radixArr[j].forEach((item) => {
        arr[index++] = item;
      });
    }
  }
}
console.time("arr");
radixSort(arr);
console.log(arr);
console.timeEnd("arr");
```

### 去重

```ts
/**
 * 去重(Unique)：删除重复项，保持列表项的唯一
 */
export const unique = <T>(arr: T[], callbackfn: (value: T) => any): T[] => {
  const map = new Map();
  const result = [];
  for (const item of arr) {
    const fnRes = callbackfn(item);
    if (fnRes === undefined || fnRes === null || map.get(fnRes)) continue;
    map.set(fnRes, item);
    result.push(item);
  }
  return result;
};
export const testUnique = () => {
  const list = [1, 2, 3, 4, 5, 6, 5, 4, 3, 3, 2, 5, 6, 8];
  const list1 = [
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 1, name: "name3" },
    { id: 3, name: "name4" },
    { id: 5, name: "name5" },
  ];
  const list2 = [
    { flag: list, name: "name1" },
    { flag: 2, name: "name2" },
    { flag: list, name: "name3" },
    { flag: 3, name: "name4" },
    { flag: 5, name: "name5" },
  ];
  const list3 = [
    { flag: "A", name: "name1" },
    { flag: "B", name: "name2" },
    { flag: "A", name: "name3" },
    { flag: "C", name: "name4" },
    { flag: "a", name: "name5" },
  ];
  // 普通数组
  console.log(
    "普通数组:",
    unique(list, (item) => item)
  );
  // 对象数组
  console.log(
    "对象数组:",
    unique(list1, (item) => item.id)
  );
  // 支持任意数据结构作比较
  console.log(
    "支持任意数据结构作比较:",
    unique(list2, (item) => item.flag)
  );
  console.log(
    "支持任意数据结构作比较:",
    unique(list3, (item) => item.flag)
  );
};
```

### 搜索

```ts
/**
 * 搜索算法常见的有两种：
 * 1、顺序搜索也叫线性搜索(Search)：逐个遍历对比结果
 * 2、二分搜索(Binary search)：分治思想，要求被搜索的数组需要先排序
 */

export const bs = (arr: any[], value: any) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const center = arr[mid];
    if (center < value) {
      low = mid + 1;
    } else if (center > value) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
export const testBs = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  console.log("bs:", bs(arr, 3));
};
```

## 几个常见的算法小例子

### 斐波拉契数列

- 递归法

```js
function fn(n) {
  if (n === 1 || n === 2) return 1;
  return fn(n - 1) + fn(n - 2);
}
console.log(fn(6));
// 弊端，输入的n过大会导致栈溢出
// fn(100) 栈溢出
```

- 尾递归优化版

```js
function fn(n, sum1, sum2) {
  if (n <= 1) return sum2;
  return fn(n - 1, sum2, sum1 + sum2);
}
// 优化之后的fn输入更大的值都毫无压力
// fn(1000) 毫无压力
```

- 迭代法

```js
function fn(n) {
  let n1 = 1,
    n2 = 1,
    res = 1;
  for (let i = 2; i < n; i++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
}
console.log(fn(6));
```

### 手动实现 min 函数和 max 函数

- min

```js
const min = (...rest) => {
  if (rest.length < 2) throw "参数必须大于等于两位数";
  let [result] = rest;
  for (const item of rest) {
    result = result >= item ? item : result;
  }
  return result;
};

console.log(min(4, 9));
```

- max

```js
const max = (...rest) => {
  if (rest.length < 2) throw "参数必须大于等于两位数";
  let [result] = rest;
  for (const item of rest) {
    result = result >= item ? result : item;
  }
  return result;
};

console.log(max(4, 9));
```

### 统计字符串次数

- 迭代法

```js
let str = "我最多最ssss多多啊";
function fn(str) {
  let obj = {};
  let max = 0;
  let res = null;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
    if (obj[str[i]] > max) {
      max = obj[str[i]];
      res = str[i];
    }
  }
  return { res, max };
}
console.log(fn(str));
```

- 利用 `reduce`

```js
let str = "我最多最ssss多多啊";
function fn1(str) {
  let res = str.split("").reduce((a, b) => {
    return (a[b] = a[b] ? ++a[b] : 1), a;
  }, {});
  let max = 0;
  let result = null;
  for (const key in res) {
    if (res[key] > max) {
      max = res[key];
      result = key;
    }
  }
  return { result, max };
}
console.log(fn(str));
```

### 百钱百鸡

100 文买 100 只鸡，每种鸡都要有，公鸡/5 文 母鸡/3 文 3 小鸡/1 文

```js
// 不会算法，一般就是直接三for循环
for (let x = 1; x < 100; x++) {
  for (let y = 1; y < 100; y++) {
    for (let z = 1; z < 100; z++) {
      if (x + y + z === 100 && x * 5 + y * 3 + z / 3 === 100) {
        console.log(x, y, z);
      }
    }
  }
}
// total：100*100*100 = 1000000
```

```js
// 有点基础的会思考优化成双for
for (let x = 1; x < 100; x++) {
  for (let y = 1; y < 100; y++) {
    let z = 100 - x - y;
    if (x * 5 + y * 3 + z / 3 === 100) {
      console.log(x, y, z);
    }
  }
}
// total：100*100 = 10000
```

```js
// 最终极致优化

/*
  解方程
  x,y,z

  x+y+z = 100        ①
  5x+3y+z/3 = 100    ②

  ②*3
  15x+9y+z = 300

  ③-①
  14x+8y = 200
  7x+4y = 100
  4y = 100 - 7x
  y = 25 - 7x/4

  设 k = x/4
      x = 4*k = 4k
      y = 25 -7k
      z = 100 - y - x = 100 - 25 + 7k - 4k = 75 + 3k
  已知 x,y,z都不能大于100，也不能小于0，求k的取值
  x<25  x<4  x<9
*/

let x, y, z;
for (let i = 1; i < 4; i++) {
  x = 4 * i;
  y = 25 - 7 * i;
  z = 75 + 3 * i;
  if (x + y + z === 100 && x * 5 + y * 3 + z / 3 === 100) {
    console.log(x, y, z);
  }
}
// total：3 * 4 = 12
```
