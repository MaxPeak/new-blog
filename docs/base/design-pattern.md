## 适配器模式

将一个类的接口转换成另一个接口，已满足用户需求，解决接口不一致产生的兼容问题

```js
// 需要把不同的数据结构转换成相同的数据结构
// 打个比方 我的页面需要的数据结构为
const data = [
  ["小明", 18, "男"],
  ["小红", 16, "女"],
];
// 而接口返回的数据结构为
const data1 = [
  {
    name: "小明",
    age: 18,
    sex: "男",
  },
  {
    name: "小红",
    age: 16,
    sex: "女",
  },
];
// 而且后续可能接口返回的数据还要改，所以这个时候为了保证最少的代码改动，应该把data1转换成data
const conversion = (data) => {
  return data.map((item) => Object.values(item));
};

const result = conversion(data1); // data1 => data
```

## 桥接模式

将抽象部分与它的实现部分分离，使它们都可以独立变化

```js
// 传统获取dom，限制了参数类型
document.getElementById("id");
document.getElementsByClassName("class");

// 桥接模式，可以传不同类型的参数，达到相同的效果
document.querySelector("id/class/other...");
```

```js
class A {}
class B {}
class C {}
class D {}

//桥接成一个新的类
class One {
  constructor() {
    this.a = new A();
    this.b = new B();
  }
}

//桥接成一个新的类
class Tow {
  constructor() {
    this.a = new C();
    this.b = new D();
  }
}
```

## 建造者模式

将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示

```js
const Builder = (() => {
  //通过人数，规划户型
  function room(person) {
    if (person > 3 || person === 3) {
      this.rooms = `三室一厅双卫`;
    } else if (person === 2) {
      this.rooms = `两室一厅一卫`;
    } else if (person === 1) {
      this.rooms = `一室一厅一卫`;
    } else {
      throw new Error(`人数信息错误`);
    }
  }
  //通过金额，规范面积
  function space(money) {
    if (money < 30) {
      throw new Error("预算太低");
    }
    this.m = money;
  }
  //通过风格，直接设计
  function desgin(style) {
    this.style = style;
  }

  //建构部分
  return class {
    constructor(person, money, style) {
      room.call(this, person);
      space.call(this, money);
      desgin.call(this, style);
    }
  };
})();

let a = new Builder(3, 100, "科技简约");
console.log(a);
```

## 职责链模式

使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连一条链，并沿着这条链传递请求，直到有一个对象处理它

```js
//原型链，作用域链就是典型的职责链模式
//假定一个拨款审批流程
class Chain {
  constructor() {
    //利用数组有序的特点来储存
    this.chain = [];
    //记录索引
    this.index = 0;
  }
  init(list) {
    list.forEach((item) => this.chain.push(item));
  }
  grant(money) {
    //next函数中去执行下一个函数
    let next = () => this.chain[this.index++](money, next);
    //初始先执行第一个函数，满足条件不执行next函数，函数执行终止，不满足条件继续执行下一个函数，直至没有调用next函数为止
    this.chain[this.index++](money, next);
  }
}
function a(money, next) {
  if (money <= 1000) {
    console.log("a审批");
  } else {
    next();
  }
}
function b(money, next) {
  if (money <= 5000) {
    console.log("b审批");
  } else {
    next();
  }
}
function c(money, next) {
  if (money <= 10000) {
    console.log("c审批");
  } else {
    next();
  }
}
//最后一个不执行next函数
function d(money, next) {
  console.log("d审批");
}
let aaa = new Chain();
aaa.init([a, b, c, d]);
aaa.grant(500);
aaa.grant(5000);
aaa.grant(10000);
aaa.grant(50000);
```

## 命令模式

将请求与实现解耦并封装成独立对象，从而使不同的请求对客户端的实现参数化

```js
//模拟一个画画的功能
let Draw = (() => {
  //命令列表
  let cmdList = {
    rect(...param) {
      box.style.cssText += `width:100px;height:100px;`;
      console.log(...param);
    },
    background(...param) {
      box.style.cssText += `background-color:skyblue;`;
      console.log(...param);
    },
    border(...param) {
      box.style.cssText += `border:1px solid #000;`;
      console.log(...param);
    },
  };
  return {
    //执行命令
    execute(list) {
      list.forEach((item) => {
        let { command, param } = item;
        cmdList[command] && cmdList[command](...param);
      });
    },
    //添加命令
    addCmd(key, value) {
      cmdList[key] = value;
    },
    //删除命令
    removeCmd(key) {
      Reflect.deleteProperty(cmdList, key);
    },
  };
})();

Draw.execute([
  { command: "rect", param: [1, 1] },
  { command: "background", param: [2, 2] },
  { command: "border", param: [3, 3] },
]);
Draw.addCmd("move", function (...param) {
  box.style.cssText += `margin-left:100px;margin-top:100px;`;
  console.log(...param);
});
Draw.execute([{ command: "move", param: [4, 4] }]);
```

## 组合模式

操作单个对象和组合对象具有一致性

```js
// 链式调用
$("div").css("backgroundColor", "red").on("click");
```

```js
// 模拟菜单
//主菜单类
class Menu {
  constructor(id) {
    this.id = id;
    this.children = [];
  }
  //添加
  add(item) {
    this.children.push(item);
    return this;
  }
  //打印
  print() {
    console.group(`第${this.id}桌：`);
    this.children.forEach((item) => {
      item.print();
    });
    console.groupEnd();
  }
}

//子菜单类
class SubMenu {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  //添加
  add(item) {
    this.children.push(item);
    return this;
  }
  //打印
  print() {
    console.group(this.name);
    this.children.forEach((item) => {
      item.print();
    });
    console.groupEnd();
  }
}

//菜品类
class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  //打印
  print() {
    console.log(`菜名：${this.name},价格：${this.price}`);
  }
}

//添加菜品
let food1 = new Food("爆炒牛肉", 20);
let food2 = new Food("子姜炒肉", 15);
let food3 = new Food("紫菜蛋汤", 12);
let food4 = new Food("泡芙", 15);
let food5 = new Food("冰淇淋", 10);
let food6 = new Food("豆奶", 8);
let food7 = new Food("王老吉", 8);

//添加子菜单
let subMenu1 = new SubMenu("主菜");
subMenu1.add(food1).add(food2).add(food3);
let subMenu2 = new SubMenu("甜品");
subMenu2.add(food4).add(food5);
let subMenu3 = new SubMenu("饮料");
subMenu3.add(food6).add(food7);

//添加主菜单
let menu = new Menu(1);
menu.add(subMenu1).add(subMenu2).add(subMenu3);
menu.print();
```

## 装饰者模式

在不改变原对象的基础上，对其进行包装扩展，以满足更复杂的需求

```ts
// 本质上可以看成是一种高阶函数，比如现在的ts的装饰器语法就是这样的思想和实现

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable()
  get x() {
    return this._x;
  }

  @configurable()
  get y() {
    return this._y;
  }
}

// 装饰器
function configurable() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("hello");
  };
}
```

```js
class Teacher {
  constructor(name) {
    this.name = name;
  }
}
let a = new Teacher("小明");
let b = new Teacher("小红");
console.log(a, b);
// 想为Teacher类添加一个age属性，又不想修改类本身
function Decorator(age) {
  this.age = age;
}
Decorator.call(a, 18);
Decorator.call(b, 26);
console.log(a, b);
```

## 外观模式

为一组复杂的子接口提供一个更高级的统一接口，以便更方便的去实现子接口的功能

```js
// 一般我们在做浏览器兼容处理的时候就是用的这个模式
var div = document.getElementById("div");
addEvent(div, "click", function (e) {
  console.log(e);
});

function addEvent(ele, eName, eFn) {
  if (document.addEventListener) {
    //非IE
    ele.addEventListener(eName, eFn);
  } else {
    //IE
    ele.attachEvent("on" + eName, function () {
      eFn.call(ele, window.event);
    });
  }
}
```

## 工厂模式

批量生产

```js
const shop = (type) => {
  //牛排
  class Steak {
    constructor() {
      this.price = 30;
      this.time = 25;
    }
  }
  //烧烤
  class Grill {
    constructor() {
      this.price = 20;
      this.time = 15;
    }
  }
  //面条
  class Noodles {
    constructor() {
      this.price = 15;
      this.time = 10;
    }
  }

  let typeObj = {
    Steak: new Steak(),
    Grill: new Grill(),
    Noodles: new Noodles(),
  };

  return typeObj[type];
};

let a = shop("Steak");
let b = shop("Grill");
let c = shop("Noodles");
console.log(a, b, c);
```

```js
const Shop = (() => {
  let shopList = {
    Steak() {
      this.price = 30;
      this.time = 25;
    },
    Grill() {
      this.price = 25;
      this.time = 20;
    },
    Noodles() {
      this.price = 20;
      this.time = 15;
    },
  };
  return class {
    constructor(type) {
      this._name = type;
      try {
        shopList[type].call(this);
      } catch (error) {
        throw new Error("没有此商品");
      }
    }
    done() {
      console.log(`${this._name}制作用时${this.time}价格${this.price}`);
    }
  };
})();

new Shop("Steak").done();
new Shop("Grill").done();
```

## 享元模式

通过共享大量细粒度的对象，避免拥有相同内容造成额外的开销

```js
div1.onclick = function () {
  console.log(this.id);
};
div2.onclick = function () {
  console.log(this.id);
};
div3.onclick = function () {
  console.log(this.id);
};

// 享元构建后
function fn() {
  console.log(this.id);
}
div1.onclick = div2.onclick = div3.onclick = fn;
```

```js
// 享元搭配单例使用
const ClassInfo = (() => {
  //老师类
  let SingleTeacher = (() => {
    let team = {};
    return class {
      constructor(id, name, sex) {
        if (team[id]) return team[id];
        team[id] = this;
        this.id = id;
        this.name = name;
        this.sex = sex;
      }
    };
  })();

  //接口类
  return class {
    constructor(id, name, sex, time) {
      //课程时间不同，但是老师相同，只有三位，把三位老师抽象出来，节省内存开销
      this.teacher = new SingleTeacher(id, name, sex);
      this.time = time;
    }
  };
})();

const week = [
  new ClassInfo("111", "小明", "男", "周一10:00"),
  new ClassInfo("222", "小红", "女", "周一14:00"),
  new ClassInfo("333", "小黑", "男", "周一20:00"),
  new ClassInfo("111", "小明", "男", "周二10:00"),
  new ClassInfo("222", "小红", "女", "周二14:00"),
  new ClassInfo("333", "小黑", "男", "周二20:00"),
  new ClassInfo("111", "小明", "男", "周三10:00"),
  new ClassInfo("222", "小红", "女", "周三14:00"),
  new ClassInfo("333", "小黑", "男", "周三20:00"),
  new ClassInfo("111", "小明", "男", "周四10:00"),
];

//验证是否共用了共一个老师实例
console.log(week[0].teacher === week[3].teacher);
```

## 解释器模式

定义一种文法的表示，并定义一种解释器，通过这个解释器来解析对应文法的内容

```js
// 比如jq的选择器，传对应的字符串(文法)找到对应的解释器，找到元素
//解释器
function createDOM(str) {
  //创建文档片段
  let frag = document.createDocumentFragment();
  //解析文法
  //去掉所有空格
  str = str.replace(/\s/g, "");
  let arr = str.match(/(([a-z]*)(\{(.*)\})?)\*?(\d*)/i);
  let tagName = arr[2];
  let tagText = arr[4] || "";
  let tagNum = arr[5] * 1 || 1;
  for (let i = 0; i < tagNum; i++) {
    let ele = document.createElement(tagName);
    ele.innerText = tagText;
    frag.append(ele);
  }
  return frag;
}
console.log(createDOM("div{aaa} * 10"));
```

## 迭代器模式

在不暴露对象内部结构的同时，可以顺序的访问集合对象内部的各个元素

```js
//内部迭代器(不能控制迭代流程)
//典型的就是 forEach之类的方法
let arr = [1, 2, 3];
arr.forEach((item) => {
  console.log(item);
});

//外部迭代器(手动控制迭代流程)
//es6里面的iterator就是典型的外部迭代器
let arr1 = [1, 2, 3];
let item = arr1[Symbol.iterator]();
console.log(item.next());
console.log(item.next());
console.log(item.next());
console.log(item.next());
```

```js
//手动实现一个外部迭代器
let iterator1 = (() => {
  let index = 0,
    length = 0;
  return function (array) {
    if (length) {
      length = array.length;
    }
    return {
      next() {
        return {
          value: array[index++],
          done: index > length,
        };
      },
    };
  };
})();
console.log(iterator1(arr1).next());
console.log(iterator1(arr1).next());
console.log(iterator1(arr1).next());
console.log(iterator1(arr1).next());
```

## 中介者模式

通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低它们之间的耦合，把多对多的关系变成一对多的关系

```js
// 模拟一个团队游戏
//中介
let playerMediator = (() => {
  //队伍信息
  let teamInfo = {};
  return {
    addPlayer(player) {
      let { team } = player;
      //队伍初始化
      if (!teamInfo[team]) teamInfo[team] = [];
      //分组
      teamInfo[team].push(player);
    },
    playerDie(player) {
      let { team } = player;
      //检测该队是否全部阵亡
      let isAllDie = true;
      for (const item of teamInfo[team]) {
        if (item.live) {
          //只要有存活的就没有阵亡
          isAllDie = false;
        }
      }
      //如果该队全部阵亡
      if (isAllDie) {
        //宣布该队失败
        teamInfo[team].forEach((item) => {
          item.lose();
        });
        //移出该队在游戏中的信息
        Reflect.deleteProperty(teamInfo, team);
        //检测是否只剩下一个队
        let winList = Object.keys(teamInfo);
        if (winList.length === 1) {
          //只剩下一个队宣布该队胜利
          teamInfo[winList[0]].forEach((item) => {
            item.win();
          });
        }
      }
    },
  };
})();

// 玩家
class Player {
  constructor(name, team) {
    this.name = name;
    this.team = team;
    this.live = true;
    // 中介开始操作了
    playerMediator.addPlayer(this);
  }
  win() {
    console.log(`${this.name}胜利了`);
  }
  lose() {
    console.log(`${this.name}失败了`);
  }
  die() {
    this.live = false;
    playerMediator.playerDie(this);
  }
}

let p1 = new Player("p1", "red");
let p2 = new Player("p2", "red");
let p3 = new Player("p3", "blue");
let p4 = new Player("p4", "blue");
let p5 = new Player("p5", "green");
let p6 = new Player("p6", "green");
console.log(p1);
p1.die();
p2.die();
p3.die();
p4.die();
```

## 备忘录模式

在不破坏对象封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后使用

```js
//用来缓存请求的数据，这样就不用多次请求
let data = {};
oBtn.onclick = function () {
  if (oDiv.innerHTML) {
    oDiv.innerHTML = "";
    return;
  }
  //假装发送一个请求
  //为了减少请求次数，就可以使用备忘录模式
  if (data.content) {
    show(data.content);
  } else {
    setTimeout(() => {
      let msg = {
        p1: "p1",
        p2: "p2",
      };
      data.content = msg;
      show(msg);
    });
  }
};
function show(data) {
  oDiv.innerHTML = `
        <p>${data.p1}</p>
        <p>${data.p2}</p>
      `;
}
```

## 观察者模式

又叫发布订阅模式,定义了一种一对多的关系，让多个观察者对象同时监听某一个对象，当该对象发生改变时，多个观察者对象也做出相应的改变

```js
// 事件绑定就是一种观察者模式，事件触发的时候(发布订阅)，就执行对应的事件函数（订阅者）
class Observer {
  constructor() {
    this.list = {};
  }
  //订阅
  on(name, handler) {
    if (!this.list[name]) this.list[name] = [];
    this.list[name].push(handler);
  }
  //退订
  off(name, cb) {
    if (!this.list[name]) return;
    let index = this.list[name].indexOf(cb);
    if (index === -1) return;
    this.list[name].splice(index, 1);
  }
  //发布
  emit(name, ...rest) {
    if (!this.list[name]) return;
    this.list[name].forEach((item) => {
      item.call(this, ...rest);
    });
  }
}

function fn1() {
  console.log(1);
}
function fn2() {
  console.log(2);
}
function fn3() {
  console.log(3);
}

let o = new Observer();
o.on("demo", fn1);
o.on("demo", fn2);
o.on("demo", fn3);
document.onclick = function () {
  o.emit("demo");
  o.off("demo", fn2);
};
```

## 原型模式

```js
class Parent {
  constructor() {}
}

class children extends Parent {
  constructor() {
    super();
  }
}
```

## 代理模式

为对象提供一个代理，用来控制对这个对象的访问

```js
let xiaohong = (() => {
  let target = {
    name: "小红",
    age: 16,
    sex: "女",
  };
  return function (info) {
    let handler = {
      get(target, key) {
        if (info === "xiaoming") {
          return target[key];
        } else {
          return "你不能访问";
        }
      },
    };
    return new Proxy(target, handler);
  };
})();

let a = xiaohong("xiaoming1");
console.log(a.name);
```

## 单例模式

指不需要重复创建实例的一个 class 类，可避免不必要的内存开销

```js
const Single = (() => {
  let that = null;
  return class {
    constructor() {
      if (that) return that;
      that = this;
    }
  };
})();

let f = new Single();
let f1 = new Single();
console.log(f === f1); // true
```

```js
//例子：弹窗
const Model = (() => {
  let that = null;
  return class {
    constructor(text) {
      if (that) {
        that.ele.innerText = text;
        return that;
      }
      this.ele = document.createElement("div");
      this.ele.style.cssText = `position: absolute;
                                bottom: -500px;
                                right: 0;
                                width: 500px;
                                height: 500px;
                                background-color: skyblue;
                                color: #fff;
                                transition: all .5s;`;
      this.ele.innerText = text;
      that = this;
    }
    show() {
      document.body.appendChild(this.ele);
      this.ele.offsetLeft;
      this.ele.style.bottom = 0;
    }
  };
})();

new Model("text1").show();
new Model("text2").show();
```

## 状态模式

当对象内部状态发生改变时，它的行为也对应的发生改变，使之看起来像是改变了这个对象

```js
//两种状态
let state = false;
btn.onclick = function () {
  this.innerText = state ? "开灯" : "关灯";
  state = !state;
};
```

```js
// 多种状态
class State {
  constructor({ init, transitions, methods }) {
    this.state = init;
    this.init(transitions, methods);
  }
  init(transitions, methods) {
    transitions.forEach((item) => {
      this[item.name] = function () {
        let fnName = this.state.replace(/^./, (a) => a.toUpperCase());
        fnName = `on${fnName}`;
        methods[fnName]();
        this.state = item.to;
      };
    });
  }
}

let aaa = new State({
  init: "one",
  transitions: [
    { name: "one", from: "one", to: "two" },
    { name: "two", from: "two", to: "three" },
    { name: "three", from: "three", to: "one" },
  ],
  methods: {
    onOne() {
      console.log(1);
    },
    onTwo() {
      console.log(2);
    },
    onThree() {
      console.log(3);
    },
  },
});
btn3.onclick = function () {
  console.log(aaa.state);
  aaa.one();
  setTimeout(() => {
    console.log(aaa.state);
    aaa.two();
    setTimeout(() => {
      console.log(aaa.state);
      aaa.three();
    });
  });
};
```

## 策略模式

策略模式定义了一系列的算法，并将每一个算法封装起来，而且使它们可以相互替换，且具有一定的独立性，不会随客户端变化而变化

```js
//用策略模式来构建一个玩家类
let Player = (() => {
  //策略
  let Strategy = (level, price) => {
    let data = {
      S: 0.85 * price,
      A: 0.9 * price,
      B: 0.95 * price,
      C: price,
    };
    return data[level];
  };

  //玩家类
  return class {
    constructor(name) {
      this.name = name;
      this.totalCons = 0;
      this.level = "C";
    }
    topUp(price) {
      this.totalCons += price;
      console.log(`充值成功，打折后消费${Strategy(this.level, price)}`);
      this.setLevel(this.totalCons);
    }
    setLevel(price) {
      switch (true) {
        case price === 0:
          this.level = "C";
          break;
        case price > 0 && price < 500:
          this.level = "B";
          break;
        case price >= 500 && price < 10000:
          this.level = "A";
          break;
        case price >= 10000:
          this.level = "S";
          break;
        //没有default
      }
    }
  };
})();

let user = new Player("小明");
user.topUp(100);
user.topUp(500);
user.topUp(1000);
console.log(user);
```

## 模板方法模式

父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时可以重新定义算法中某些实现步骤

```js
/**
 * 需求：
 * 步骤  泡茶     泡咖啡
 * 1    烧开水    烧开水
 * 2    浸泡茶叶  冲泡咖啡
 * 3    倒入杯子  倒入杯子
 * 4    加柠檬    加糖
 */
// 可以看到 第一步和第三步是相同的
// 顶级父类
class Drinks {
  firstStep() {
    console.log("烧开水");
  }
  secondStep() {}
  thirdStep() {
    console.log("倒入杯子");
  }
  fourthStep() {}
  init() {
    // 模板方法模式核心：在父类上定义好执行算法
    this.firstStep();
    this.secondStep();
    this.thirdStep();
    this.fourthStep();
  }
}

const Tea = function () {};
Tea.prototype = new Drinks();
Tea.prototype.secondStep = function () {
  console.log("浸泡茶叶");
};
Tea.prototype.fourthStep = function () {
  console.log("加柠檬");
};

const Coffee = function () {};
Coffee.prototype = new Drinks();
Coffee.prototype.secondStep = function () {
  console.log("冲泡咖啡");
};
Coffee.prototype.fourthStep = function () {
  console.log("加糖");
};
const tea = new Tea();
tea.init();
// 烧开水
// 浸泡茶叶
// 倒入杯子
// 加柠檬

const coffee = new Coffee();
coffee.init();
// 烧开水
// 冲泡咖啡
// 倒入杯子
// 加糖
```

## 访问者模式

在不改变对象的前提下，定义作用于对象的新操作

```js
//需求：在不改变b对象的情况下给b对象向a对象一样添加aaa和bbb属性
let a = {
  name: "小明",
  add() {
    this.aaa = "aaa";
    this.bbb = "bbb";
  },
};

let b = {
  name: "小红",
};
a.add.call(b);
console.log(b);
```

```js
//需求二：让对象拥有数组的push方法
let obj = {};
Object.prototype.push = function (value) {
  Array.prototype.push.call(this, value);
};
obj.push(1);
obj.push(2);
console.log(obj);
```
