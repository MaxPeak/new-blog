## MVC

### 基础

- MVC 全名为 Model View Controller ，是模型（Model）- 视图（View）- 控制器（Controller）的缩写。
- Model 层：模型（用于封装业务逻辑相关的数据以及对数据的操纵）
- View 层：视图（渲染图形化界面，也就是所谓的 UI 界面）
- Controller 层：控制器（M 和 V 之间的连接器，主要处理业务逻辑，包括显示数据，界面跳转，管理页面生命周期等）

### 优点

- 降低耦合度
- 逻辑分离
- 模块开发

### 缺点

- 代码更复杂
- 控制层和视图层没有真正的分离

### demo

```html
<div id="wrap">
  <h3>今日所需摄入水果</h3>
  <p class="buy">
    买：
    <button>买个苹果</button>
    <button>买根香蕉</button>
  </p>
  <p class="eat">
    吃：
    <button>吃个苹果</button>
    <button>吃根香蕉</button>
  </p>
  <p class="count">
    <b>剩余</b>
    <span></span>个苹果。 <span></span>根个香蕉。
  </p>
  <p class="total">总共还有<span></span>个水果</p>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}

span {
  color: red;
}
```

```js
let MVC = (() => {
  //数据层
  let M = (() => {
    //苹果计数，香蕉计数
    let data = [0, 0];
    return {
      /**
       *@index 序号
       *@type 操作类型 true-增加 false-减少
       */
      //数据更新接口
      update(index, type) {
        type ? data[index]++ : data[index]--;
        this.validate();
        //发布视图更新
        this.observer.emit();
      },
      //数据验证接口
      validate() {
        data.forEach((item, index) => {
          if (item < 0) {
            data[index] = 0;
          }
          if (item > 10) {
            data[index] = 10;
          }
        });
      },
      //观察者接口
      observer: (() => {
        let arr = [];
        return {
          on(handler) {
            arr.push(handler);
          },
          emit() {
            arr.forEach((item) => item(data));
          },
        };
      })(),
      //获取数据接口
      getData() {
        return [...data];
      },
    };
  })();
  //视图层
  let V = (() => {
    let countList = document.querySelectorAll(".count span"),
      total = document.querySelector(".total span");
    return {
      //视图更新接口
      update(data) {
        [...countList].forEach((item, index) => {
          item.innerText = data[index];
        });
        total.innerText = data.reduce((a, b) => a + b);
      },
    };
  })();
  //控制层
  let C = () => {
    let buyList = document.querySelectorAll(".buy button"),
      eatList = document.querySelectorAll(".eat button");

    [...buyList].forEach((item, index) => {
      item.onclick = () => {
        M.update(index, true);
      };
    });
    [...eatList].forEach((item, index) => {
      item.onclick = () => {
        M.update(index, false);
      };
    });
  };

  return {
    init() {
      //初始化视图
      V.update(M.getData());
      //添加控制器
      C();
      //订阅视图的更新
      M.observer.on(V.update);
    },
  };
})();

MVC.init();
```

## MVP

### 基础

- MVP 全名为 Model View Presenter ，是由 MVC 演变而来，它和 MVC 的相同之处在于：Controller / Presente 都是负责业务逻辑，Model 管理数据，View 负责显示。不过在 MVP 中 View 并不直接与 Model 交互，它们之间的通信是通过 Presenter (MVC 中的 Controller)来进行的，即使用 Presenter 对视图和模型进行了解耦，让它们彼此都对对方一无所知，沟通都通过 Presenter 进行
- Model 层：模型（用于封装业务逻辑相关的数据以及对数据的操纵）
- View 层：视图（渲染图形化界面，也就是所谓的 UI 界面）
- Presenter 层：控制器（M 和 V 之间的连接器，主要处理业务逻辑，包括显示数据，界面跳转，管理页面生命周期等）

### 优点

- 模型与视图完全分离，我们可以修改视图而不影响模型
- 可以更高效地使用模型，因为所有的交互都发生在一个地方(Presenter 内部)

### 缺点

视图和 Presenter 的交互会过于频繁，使得他们的联系过于紧密。也就是说，一旦视图变更了，presenter 也要变更

### demo

```html
<div id="wrap">
  <div class="item">
    <p>商品名称：<span class="name"></span></p>
    <p>商品价格：<span class="price"></span></p>
    <p>赞：<span class="up"></span></p>
    <p>踩：<span class="down"></span></p>
    <div class="controller">
      <button class="upBtn">点赞</button>
      <button class="downBtn">踩</button>
    </div>
  </div>
  <div class="item">
    <p>商品名称：<span class="name"></span></p>
    <p>商品价格：<span class="price"></span></p>
    <p>赞：<span class="up"></span></p>
    <p>踩：<span class="down"></span></p>
    <div class="controller">
      <button class="upBtn">点赞</button>
      <button class="downBtn">踩</button>
    </div>
  </div>
  <div class="item">
    <p>商品名称：<span class="name"></span></p>
    <p>商品价格：<span class="price"></span></p>
    <p>赞：<span class="up"></span></p>
    <p>踩：<span class="down"></span></p>
    <div class="controller">
      <button class="upBtn">点赞</button>
      <button class="downBtn">踩</button>
    </div>
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}

#wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 400px;
  margin: 100px auto 0;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: skyblue;
  flex-grow: 1;
  margin: 0 20px;
}

p {
  margin: 10px 0;
}

button {
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
```

```js
let MVP = (() => {
  //Model 数据层
  let M = (() => {
    let data = [
      { name: "剃须刀", price: 100, up: 0, down: 0 },
      { name: "电动牙刷", price: 300, up: 0, down: 0 },
      { name: "蓝牙耳机", price: 500, up: 0, down: 0 },
    ];
    return {
      getData() {
        return [...data];
      },
      setData(cb) {
        cb(data);
      },
    };
  })();
  //view 视图层
  let V = (() => {
    let name = [...document.querySelectorAll(".name")],
      price = [...document.querySelectorAll(".price")],
      up = [...document.querySelectorAll(".up")],
      down = [...document.querySelectorAll(".down")];
    return {
      init(data) {
        name.forEach((value, index) => {
          value.innerText = data[index].name;
          price[index].innerText = data[index].price;
        });
        this.update(data);
      },
      update(data) {
        up.forEach((value, index) => {
          value.innerText = data[index].up;
          down[index].innerText = data[index].down;
        });
      },
    };
  })();
  //Presenter 管理层
  let P = (() => {
    V.init(M.getData());
    let upBtn = [...document.querySelectorAll(".upBtn")],
      downBtn = [...document.querySelectorAll(".downBtn")];
    upBtn.forEach((value, index) => {
      value.onclick = function () {
        M.setData((data) => {
          data[index].up++;
        });
        V.update(M.getData());
      };
      downBtn[index].onclick = function () {
        M.setData((data) => {
          data[index].down++;
        });
        V.update(M.getData());
      };
    });
  })();
})();
```

## MVVM

### 基础

- MVVM 是 Model-View-ViewModel 的简写。它本质上就是 MVC 的改进版。MVVM 就是将其中的 View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。当然这些事 ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑
- Model 层：模型（用于封装业务逻辑相关的数据以及对数据的操纵）
- View 层：视图（渲染图形化界面，也就是所谓的 UI 界面）
- ViewModel 层：视图模型（M 和 V 之间的连接器，主要处理业务逻辑，包括显示数据，界面跳转，管理页面生命周期等）

### 优点

双向绑定

### 缺点

占用更多的内存

### demo

```html
<div id="app">
  <input type="text" v-model="text" />
  {{text}}
</div>
```

```js
class Watcher {
  constructor(vm, node, name) {
    Dep.target = this;
    this.vm = vm;
    this.node = node;
    this.name = name;
    this.update();
    Dep.target = null;
  }
  update() {
    this.get();
    //view视图层更新
    this.node.nodeValue = this.value;
  }
  get() {
    this.value = this.vm[this.name];
  }
}
//发布者仓库
class Dep {
  constructor() {
    this.subs = []; //Watcher仓库
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    //发布
    this.subs.forEach((item) => {
      item.update();
    });
  }
}
class Mue {
  constructor(options) {
    this.data = options.data;
    let data = this.data; //data转存私有化
    let id = options.el; //挂载目标id
    observe(data, this); //model加工入口
    let dom = nodeToFragment(document.getElementById(id), this); //dom加工
    document.getElementById(id).appendChild(dom);
  }
}
//属性订阅入口
function observe(data, vm) {
  Object.keys(data).forEach((key) => {
    defineReactive(vm, key, data[key]);
  });
}
//对象属性反应堆
function defineReactive(obj, key, val) {
  let dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      console.log(`获取数据${val}`);
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      console.log(`数据更新${val}`);
      dep.notify();
    },
  });
}
//原始node格式化工厂
function nodeToFragment(node, vm) {
  let flag = document.createDocumentFragment(); //创建文档片段
  let child; //view 主体子元素
  while ((child = node.firstChild)) {
    compile(child, vm);
    flag.append(child);
  }
  return flag;
}
//dom编辑器
function compile(node, vm) {
  let reg = /\{\{(.*)\}\}/; //正则匹配{{}}
  let name;
  //1.标签节点 2.属性节点 3.文本节点
  if (node.nodeType === 1) {
    //如果是标签节点，去找里面的模板语法，如（v-model）
    if (node.hasAttribute("v-model")) {
      name = node.getAttribute("v-model");
      node.addEventListener("input", function (e) {
        //实例化mue的text属性值设置为input的value
        vm[name] = e.target.value;
      });
    }
    node.value = vm[name];
    node.removeAttribute("v-model");
  }
  if (node.nodeType === 3) {
    if (reg.test(node.nodeValue)) {
      name = RegExp.$1; //{{$1}}
      name = name.trim(); //去除空格
      node.nodeValue = vm[name];
      new Watcher(vm, node, name); //订阅入口
    }
  }
}
let app = new Mue({
  el: "app",
  data: {
    text: "模拟vue双向数据绑定",
  },
});
```
