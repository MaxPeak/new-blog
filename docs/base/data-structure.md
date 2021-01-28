## 数据结构分类

### 基础数据结构

一个图灵完备的程序需要用到的数据结构，也是最常见的数据结构

### 高级数据结构

数据结构一般和算法配套出现使用，特定的算法用特定的数据结构，达到最优效果

## 常见的数据结构

### 数组

```ts
/**
 * 数组(Array)：一段连续有序的储存空间
 * 优点：
 *  1、构建数组非常简单
 *  2、能让我们在O(1)的时间里根据数组的下标(index)查询某个元素
 * 缺点：
 *  1、构建时必须分配连续一段连续的空间
 *  2、查询某个元素是否存在需要遍历整个数组，耗费O(n)的时间
 *  3、删除和添加元素时，也是耗费O(n)的时间
 */
export const testArray = () => {
  const array = [1, 2, 3, 4, 5];
  console.log(`array:`, array);
};
```

### 队列

```ts
/**
 * 队列(Queue)：先进先出的有序结构，增加、删除都在队首进行
 * 类型：
 *  1、普通队列
 *  2、双端队列
 *  3、优先队列
 */
export const testQueue = () => {
  const queue = [];
  console.log(`入队:`, queue.push(1));
  console.log(`入队:`, queue.push(2));
  console.log(`入队:`, queue.push(3));
  console.log("queue", queue);
  console.log("length", queue.length); // 3
  console.log(`出队:`, queue.shift());
  console.log("queue", queue);
  console.log("length", queue.length); // 2
};
```

### 栈

```ts
/**
 * 栈(Stack)：后进先出的有序结构，增加、删除都在栈顶进行
 */
export const testStack = () => {
  const stack = [];
  console.log(`入栈:`, stack.push(1));
  console.log(`入栈:`, stack.push(2));
  console.log(`入栈:`, stack.push(3));
  console.log("length", stack.length); // 3
  console.log("stack", stack);
  console.log(`出栈:`, stack.pop());
  console.log("length", stack.length); // 2
  console.log("stack", stack);
};
```

### 字典

```ts
/**
 * 字典(Dictionary)：也称作映射，键值对形式的无序储存
 */
export const testDictionary = () => {
  const dictionary = new Map();
  console.log("set:", dictionary.set("name", "小明"));
  console.log("set:", dictionary.set("age", 18));
  console.log("set:", dictionary.set("sex", "男"));
  console.log("get sex:", dictionary.get("sex"));
  console.log("has sex:", dictionary.has("sex"));
  console.log("size", dictionary.size);
  console.log("keys", dictionary.keys());
  console.log("values", dictionary.values());
  console.log("delete sex:", dictionary.delete("sex"));
  console.log("values", dictionary.values());
};
```

### 集合

```ts
/**
 * 集合(Set)：无序不重复的组合
 * 操作：
 *  1、交集
 *  2、并集
 *  3、差集
 *  4、子集
 */
export const testSet = () => {
  const set = new Set<number>();
  console.log("add:", set.add(1));
  console.log("add:", set.add(2));
  console.log("add:", set.add(3));
  console.log("set", set);
  console.log("size", set.size);
  console.log("has 3:", set.has(3));
  console.log("delete 2:", set.delete(2));

  console.log("set", set);
  console.log("size", set.size);
  console.log("has 2:", set.has(2));

  const setA = new Set<number>([1, 2, 3]);
  const setB = new Set<number>([2, 3, 4]);
  // 并集（Union）
  const union = new Set<number>([...setA, ...setB]);
  console.log("并集", union);
  // 交集（Intersect）
  const intersect = new Set<number>([...setA].filter((item) => setB.has(item)));
  console.log("交集", intersect);
  // 差集（Difference）
  const difference = new Set<number>(
    [...setA].filter((item) => !setB.has(item))
  );
  console.log("差集", difference);
  // 子集（Subset）
  const subset = (subSet: Set<number>, parentSet: Set<number>) => {
    if (subSet.size > parentSet.size) return false;
    return [...subSet].every((item) => parentSet.has(item));
  };
  const setC = new Set<number>([1, 2, 3, 4]);
  console.log("子集", subset(setA, setB));
  console.log("子集", subset(setA, setC));
};
```

### 链表

```ts
/**
 * 链表(LinkedList)：链表的出现是为了弥补数组的一些缺陷
 * 优点：
 *  1、灵活的分配内存空间
 *  2、能在O(1)时间内删除和添加元素
 * 缺点：
 *  1、不能通过下标(index)快速查询，查询时间O(n)
 * 类型：
 *  1、单链表
 *  2、双链表
 *  3、循环链表
 */
export class LinkedListNode {
  element: any;
  prev: LinkedListNode;
  next: LinkedListNode;
  constructor(element: any) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}
export class LinkedList {
  head: LinkedListNode;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  /**
   * 向链表尾部添加一个新元素
   * @param element
   * @returns node 节点
   */
  append(element: any) {
    const node = new LinkedListNode(element);
    let head = this.head;
    if (head === null) {
      this.head = node;
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = node;
    }
    this.length++;
    return node;
  }
  /**
   * 向链表指定位置插入一个新项
   * @param position 位置
   * @param element 元素
   * @returns node 节点
   */
  insert(position: number, element: any) {
    if (position < 0 || position > this.length) {
      throw new Error("位置不是一个合理的值");
    }
    const node = new LinkedListNode(element);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const previous = this.find(position - 1);
      const next = previous.next;
      previous.next = node;
      node.next = next;
    }
    this.length++;
    return node;
  }
  /**
   * 从链表的特定位置移除元素
   * @param position 位置
   * @returns node 节点
   */
  remove(position: number) {
    if (position < 0 || position >= this.length) {
      throw new Error("位置不是一个合理的值");
    }
    const currentNode = this.find(position);
    if (position === 0) {
      this.head = currentNode.next;
    } else {
      const previous = this.find(position - 1);
      previous.next = currentNode.next;
    }
    this.length--;
    return currentNode;
  }
  /**
   * 查找元素
   * @param position 位置
   * @returns node | null 节点
   */
  find(position: number) {
    let head = this.head;
    let i = 0;
    while (head) {
      if (i === position) return head;
      head = head.next;
      i++;
    }
    return null;
  }
}
export class DoublyLinkedList extends LinkedList {
  tail: LinkedListNode;
  constructor() {
    super();
    this.tail = null;
  }
  /**
   * 向链表尾部添加一个新元素
   * @param element
   * @returns node 节点
   */
  append(element: any) {
    const node = new LinkedListNode(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return node;
  }
  /**
   * 向链表指定位置插入一个新项
   * @param position 位置
   * @param element 元素
   * @returns node 节点
   */
  insert(position: number, element: any) {
    if (position < 0 || position > this.length) {
      throw new Error("位置不是一个合理的值");
    }
    const node = new LinkedListNode(element);
    if (position === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if (position === this.length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      const previous = this.find(position - 1);
      const currentNode = previous.next;
      previous.next = node;
      node.next = currentNode;
      currentNode.prev = node;
      node.prev = previous;
    }
    this.length++;
    return node;
  }
  /**
   * 从链表的特定位置移除元素
   * @param position 位置
   * @returns node 节点
   */
  remove(position: number) {
    if (position < 0 || position >= this.length) {
      throw new Error("位置不是一个合理的值");
    }
    const currentNode = this.find(position);
    if (position === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      this.tail = currentNode.prev;
      this.tail.next = null;
    } else {
      const previous = currentNode.prev;
      previous.next = currentNode.next;
      currentNode.next.prev = previous;
    }
    this.length--;
    return currentNode;
  }
  /**
   * 查找元素
   * @param position 位置
   * @returns node | null 节点
   */
  find(position: number) {
    let head = this.head;
    let i = 0;
    while (head) {
      if (i === position) return head;
      head = head.next;
      i++;
    }
    return null;
  }
}
export class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }
  /**
   * 向链表尾部添加一个新元素
   * @param element
   * @returns node 节点
   */
  append(element: any) {
    const node = new LinkedListNode(element);
    let head = this.head;
    if (head === null) {
      this.head = node;
      this.head.next = node;
    } else {
      while (head.next !== this.head) {
        head = head.next;
      }
      node.next = this.head;
      head.next = node;
    }
    this.length++;
    return node;
  }
  /**
   * 向链表指定位置插入一个新项
   * @param position 位置
   * @param element 元素
   * @returns node 节点
   */
  insert(position: number, element: any) {
    if (position < 0 || position > this.length) {
      throw new Error("位置不是一个合理的值");
    }
    const node = new LinkedListNode(element);
    if (position === 0) {
      if (this.head === null) {
        this.head = node;
        this.head.next = node;
      } else {
        node.next = this.head;
        const lastNode = this.find(this.length - 1);
        lastNode.next = node;
        this.head = node;
      }
    } else if (position === this.length) {
      const lastNode = this.find(position - 1);
      lastNode.next = node;
      node.next = this.head;
    } else {
      const previous = this.find(position - 1);
      const next = previous.next;
      previous.next = node;
      node.next = next;
    }
    this.length++;
    return node;
  }
  /**
   * 从链表的特定位置移除元素
   * @param position 位置
   * @returns node 节点
   */
  remove(position: number) {
    if (position < 0 || position >= this.length) {
      throw new Error("位置不是一个合理的值");
    }
    const lastNode = this.find(this.length - 1);
    const currentNode = this.find(position);
    if (position === 0) {
      this.head = this.head.next;
      lastNode.next = this.head;
    } else if (position === this.length - 1) {
      const previous = this.find(position - 1);
      previous.next = this.head;
    } else {
      const previous = this.find(position - 1);
      previous.next = currentNode.next;
    }
    this.length--;
    return currentNode;
  }
  /**
   * 查找元素
   * @param position 位置
   * @returns node | null 节点
   */
  find(position: number) {
    let head = this.head;
    let i = 0;
    while (i < this.length) {
      if (i === position) return head;
      head = head.next;
      i++;
    }
    return null;
  }
}

export const testLinkedList = () => {
  const linkedList = new LinkedList();
  console.log(`append:`, linkedList.append(1));
  console.log(`append:`, linkedList.append(2));
  console.log(`append:`, linkedList.append(3));
  console.log(linkedList);
  console.log(`remove 1:`, linkedList.remove(1));
  console.log(linkedList);
  console.log(`insert 4:`, linkedList.insert(2, 4));
  console.log(linkedList);
  console.log("find 2:", linkedList.find(1));
};

export const testDoublyLinkedList = () => {
  const linkedList = new DoublyLinkedList();
  console.log(`append:`, linkedList.append(1));
  console.log(`append:`, linkedList.append(2));
  console.log(`append:`, linkedList.append(3));
  console.log(linkedList);
  console.log(`remove 1:`, linkedList.remove(1));
  console.log(linkedList);
  console.log(`insert 4:`, linkedList.insert(2, 4));
  console.log(linkedList);
  console.log("find 2:", linkedList.find(1));
};

export const testCircularLinkedList = () => {
  const linkedList = new CircularLinkedList();
  console.log(`append:`, linkedList.append(1));
  console.log(`append:`, linkedList.append(2));
  console.log(`append:`, linkedList.append(3));
  console.log(linkedList);
  console.log(`remove 1:`, linkedList.remove(0));
  console.log(linkedList);
  console.log(`insert 4:`, linkedList.insert(2, 4));
  console.log(linkedList);
  console.log("find 2:", linkedList.find(1));
};
```

### 树

```ts
/**
 * 树(Tree)：一种无序数据结构
 * 类型：
 *  1、普通二叉树
 *  2、平衡二叉树
 *  3、完全二叉树
 *  4、二叉搜索树
 *  5、四叉树
 *  6、多叉树
 * 特殊的树：
 *  1、红黑树
 *  2、自平衡二叉搜索树
 * 遍历方法：
 *  1、前序遍历
 *  2、中序遍历
 *  3、后序遍历
 */

export interface TreeNode {
  key: any;
  left: any;
  right: any;
}
/**
 * 节点类
 */
export class TreeNode {
  key: any;
  left: any;
  right: any;
  constructor(key: any) {
    this.key = key;
    this.right = null;
    this.left = null;
  }
}
/**
 * 二叉搜索树（BinarySearchTree）是二叉树的一种，简称BST树，它只允许左侧节点存储比父节点小的值，右侧储存大于等于父节点的值
 */
export class BST {
  #root: any;
  constructor() {
    this.#root = null;
  }
  /**
   * 插入节点的私有方法
   * @param node
   */
  _insertNode(node: TreeNode, newNode: TreeNode) {
    if (node.key > newNode.key) {
      // 放左边
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      // 放右边
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
  /**
   * 中序遍历的私有方法
   * @param node 节点
   * @param arr 数组
   */
  _inOrderTraversalNode(node: TreeNode, arr: any[]) {
    if (!node) return;
    this._inOrderTraversalNode(node.left, arr);
    arr.push(node.key);
    this._inOrderTraversalNode(node.right, arr);
  }
  /**
   * 先序遍历的私有方法
   * @param node 节点
   * @param arr 数组
   */
  _preOrderTraversalNode(node: TreeNode, arr: any[]) {
    if (!node) return;
    arr.push(node.key);
    this._preOrderTraversalNode(node.left, arr);
    this._preOrderTraversalNode(node.right, arr);
  }
  /**
   * 后序遍历的私有方法
   * @param node 节点
   * @param arr 数组
   */
  _postOrderTraversalNode(node: TreeNode, arr: any[]) {
    if (!node) return;
    this._postOrderTraversalNode(node.left, arr);
    this._postOrderTraversalNode(node.right, arr);
    arr.push(node.key);
  }
  /**
   * 搜索最小值的私有方法
   * @param node 节点
   * @returns min
   */
  _minNode(node: TreeNode) {
    if (!node) return null;
    while (node.left !== null) {
      node = node.left;
    }
    return node.key;
  }
  /**
   * 搜索最大值的私有方法
   * @param node 节点
   * @returns max
   */
  _maxNode(node: TreeNode) {
    if (!node) return null;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  }
  /**
   * 搜索值的私有方法
   * @param node 节点
   * @param key 键
   * @returns result
   */
  _searchNode(node: TreeNode, key: any) {
    if (!node) return false;
    if (key < node.key) {
      return this._searchNode(node.left, key);
    } else if (key > node.key) {
      return this._searchNode(node.right, key);
    } else {
      return true;
    }
  }
  /**
   * 删除的私有方法
   * @param node 节点
   * @param key 键
   * @returns node
   */
  _removeNode(node: TreeNode, key: any) {
    if (!node) return null;
    if (key < node.key) {
      // 向左侧继续找
      node.left = this._removeNode(node.left, key);
    } else if (key > node.key) {
      // 向右侧继续找
      node.right = this._removeNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        // 一个没有左右节点的叶节点
        node = null;
      } else if (node.left === null) {
        // 只有一个子节点
        node = node.right;
      } else if (node.right === null) {
        // 只有一个子节点
        node = node.left;
      } else {
        // 一个有左右节点的节点
        const min = this._minNode(node.right);
        node.key = min;
        node.right = this._removeNode(node.right, min);
      }
    }
    return node;
  }
  /**
   * 插入
   * @param key 键
   */
  insert(key: any) {
    const node = new TreeNode(key);
    if (this.#root === null) {
      this.#root = node;
    } else {
      this._insertNode(this.#root, node);
    }
  }
  /**
   * 查找
   * @param key 键
   * @returns result
   */
  search(key: any) {
    return this._searchNode(this.#root, key);
  }
  /**
   * 获取最小值
   * @returns min
   */
  min() {
    return this._minNode(this.#root);
  }
  /**
   * 获取最大值
   * @returns max
   */
  max() {
    return this._maxNode(this.#root);
  }
  /**
   * 删除
   * @param key 键
   */
  remove(key: any) {
    this.#root = this._removeNode(this.#root, key);
  }
  /**
   * 中序遍历
   * @returns array
   */
  inOrderTraverse() {
    const arr = [];
    this._inOrderTraversalNode(this.#root, arr);
    return arr;
  }
  /**
   * 先序遍历
   * @returns array
   */
  preOrderTraverse() {
    const arr = [];
    this._preOrderTraversalNode(this.#root, arr);
    return arr;
  }
  /**
   * 后序遍历
   * @returns array
   */
  postOrderTraverse() {
    const arr = [];
    this._postOrderTraversalNode(this.#root, arr);
    return arr;
  }
  /**
   * 在控制台输出节点
   */
  print() {
    console.log(this.#root);
  }
}
// 测试
export const testBST = () => {
  const tree = new BST();
  [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6].forEach((item) =>
    tree.insert(item)
  );
  console.log("中序", tree.inOrderTraverse());
  console.log("先序", tree.preOrderTraverse());
  console.log("后序", tree.postOrderTraverse());
  console.log("min", tree.min());
  console.log("max", tree.max());
  console.log("search", tree.search(2));
  console.log("search", tree.search(15));
  tree.remove(15);
  console.log("search", tree.search(15));
  tree.print();
};

/**
 * 二叉平衡搜索树（AdelsonVelskillLandi）,BST树存在一个问题，当你添加的节点越多，可能树的一条边会非常深，这会在需要对这边条进行操作时引起性能问题，为了解决这个问题，出现了二叉平衡搜索树，即左右的高度差最多相差1
 */
export class AVL {
  #root: any;
  constructor() {
    this.#root = null;
  }
  _insertNode(node: TreeNode, newNode: TreeNode) {
    if (node === null) return newNode;
    if (node.key > newNode.key) {
      // 放左边
      node.left = this._insertNode(node.left, newNode);
      if (this._nodeDeep(node.left) - this._nodeDeep(node.right) > 1) {
        //左左
        if (newNode.key < node.left.key) {
          node = this._rotationLL(node);
        } else {
          //左右
          node = this._rotationLR(node);
        }
      }
    } else {
      // 放右边
      node.right = this._insertNode(node.right, newNode);
      if (this._nodeDeep(node.right) - this._nodeDeep(node.left) > 1) {
        //右左
        if (newNode.key < node.right.key) {
          node = this._rotationRL(node);
        } else {
          //右右
          node = this._rotationRR(node);
        }
      }
    }
    return node;
  }
  _nodeDeep(node: TreeNode) {
    if (node === null) return -1;
    return Math.max(this._nodeDeep(node.left), this._nodeDeep(node.right)) + 1;
  }
  _rotationLL(node: TreeNode) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  _rotationLR(node: TreeNode) {
    node.left = this._rotationRR(node.left);
    return this._rotationLL(node);
  }
  _rotationRR(node: TreeNode) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
  _rotationRL(node: TreeNode) {
    node.right = this._rotationLL(node.right);
    return this._rotationRR(node);
  }
  insert(key: any) {
    const node = new TreeNode(key);
    this.#root = this._insertNode(this.#root, node);
  }
  print() {
    console.log(this.#root);
  }
}
// 测试
export const testAVL = () => {
  const tree = new AVL();
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((item) => tree.insert(item));
  tree.print();
};

/**
 * 红黑树（Red-black tree）是一种自平衡二叉查找树
 * 红黑树相对于AVL树来说，牺牲了部分平衡性以换取插入/删除操作时少量的旋转操作，整体来说性能要优于AVL树
 * 红黑树是每个节点都带有颜色属性的二叉查找树，颜色为红色或黑色。在二叉查找树强制一般要求以外，对于任何有效的红黑树我们增加了如下的额外要求：
 * 1、节点是红色或黑色
 * 2、根是黑色
 * 3、所有叶子节点都是黑色（NIL节点）
 * 4、每个红色节点必须有两个黑色的子节点。（从每个叶子到根的所有路径上不能有两个连续的红色节点）
 * 5、从任一节点到其每个叶子的所有简单路径都包含相同数目的黑色节点
 */
export class RBT {
  #root: RBTNode;
  constructor() {
    this.#root = null;
  }
  private insertNode(node: RBTNode) {}
  private deleteNode(node: RBTNode) {}
  private rotationLeft(node: RBTNode) {}
  private rotationRight(node: RBTNode) {}

  insert() {}
  delete() {}
  print() {
    console.log(this.#root);
  }
}
/**
 * 节点类
 */
export class RBTNode {
  key: any;
  color: IColor;
  left: RBTNode;
  right: RBTNode;
  parent: RBTNode;
  constructor(key: any, color: IColor) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
export type IColor = "red" | "black";
export interface RBTNode {
  key: any;
  color: IColor;
  left: RBTNode;
  right: RBTNode;
}
export const testRBT = () => {
  const tree = new RBT();
  tree.print();
};
```

### 散列表

```ts
/**
 * 散列表(Hash Table)：根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。
 * 哈希表最重要的是哈希函数，一个合理的哈希需要遵循一个公式：最终存储的个数 / 数组长度的比值在 0.6-0.9 之前（理想状态是 1，但是达不到）
 * 哈希存取值不用遍历的原理是借用数组来实现的，通过哈希函数把 key 转换成数字，是在数组上实现存取值
 * 一般来说 哈希函数模上一个质数是性能最好的 质数：只有 1 和本身能整除的数 1、3、5、7、9、11
 */
class HashValue {
  key: string;
  value: any;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }
}
class HashTable {
  private table: any[];
  constructor() {
    this.table = [];
  }
  private hash(key: string) {
    const result = [...key].reduce((num, cur) => {
      num += cur.charCodeAt(0);
      return num;
    }, 0);
    return result % 37;
  }
  /**
   * 存值
   * @param key 键
   * @param value 值
   * @returns value
   */
  set(key: string, value: any) {
    let hashKey = this.hash(key);
    const temporary = hashKey;
    while (this.table[hashKey]) {
      if (this.table[hashKey].key === key) {
        this.table[hashKey].value = value;
        return value;
      }
      hashKey++;
      hashKey %= 37;
      if (hashKey === temporary) {
        throw new Error("哈希表满了");
      }
    }
    this.table[hashKey] = new HashValue(key, value);
    return value;
  }
  /**
   * 取值
   * @param key 键
   * @returns value
   */
  get(key: string) {
    let hashKey = this.hash(key);
    const temporary = hashKey;
    while (this.table[hashKey]) {
      if (this.table[hashKey].key === key) {
        return this.table[hashKey].value;
      }
      hashKey++;
      hashKey %= 37;
      if (temporary === hashKey) return null;
    }
    return null;
  }
}

export const testHashTable = () => {
  const hash = new HashTable();
  console.log("set name:", hash.set("name", "小明"));
  console.log("set age:", hash.set("age", 27));
  console.log("set sex:", hash.set("sex", "男"));
  console.log("get age:", hash.get("age"));
};
```

### 图

储存方式

- 邻接矩阵
  坐标 | A | B | C | D | E | F
  :-: | :-: | :-: | :-: | :-: | :-: | :-:
  A | 0 | 1 | 1 | 0 | 1 | 0 |
  B | 1 | 0 | 0 | 1 | 1 | 0 |
  C | 1 | 0 | 0 | 0 | 0 | 1 |
  D | 0 | 1 | 0 | 0 | 0 | 0 |
  E | 1 | 1 | 0 | 0 | 0 | 1 |
  F | 0 | 0 | 1 | 0 | 1 | 0 |

- 邻接表
  坐标 | 节点
  :-: | :-:
  A | BCE |
  B | AED |
  C | AF |
  D | B |
  E | ABF |
  F | EC |

```js
/**
 * 图(Graph)：
 * 术语：节点，边，路径，环组成
 * 储存和表达方式：
 *  1、邻接矩阵
 *  2、邻接链表
 * 遍历：
 *  1、深度优先：从当前节点开始深度探索，只要当前节点有相邻节点，就会去探索相邻节点，直到全部探索完毕
 *  2、广度优先：先探索当前节点，然后把当前节点的相邻节点放到待探索队列，然后探索当前节点的相邻节点（探索队列里面的值），如此重复直至全部探索完毕
 * 类型：
 *  1、有向图
 *  2、无向图
 *  3、强连通图
 * 节点状态：
 * 白：还没有被遍历发现
 * 灰：被发现，但还没有被探索
 * 黑：被发现并被探索
 */
let Graph = (() => {
  //队列列，辅助广度优先遍历
  class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(data) {
      this.items.push(data);
    }
    dequeue() {
      return this.items.shift();
    }
    size() {
      return this.items.length;
    }
  }

  return class {
    constructor() {
      //存储所有的顶点
      this.vertices = [];
      //存储每个顶点对应的相邻顶点
      this.edges = {};
    }
    //添加顶点
    addVertex(...rest) {
      rest.forEach((item) => {
        if (this.vertices.includes(item)) return;
        this.vertices.push(item);
        this.edges[item] = [];
      });
    }
    //添加边
    addEdge(v1, v2) {
      this.addVertex(v1, v2);
      if (this.edges[v1].includes(v2)) return;
      this.edges[v1].push(v2);
      this.edges[v2].push(v1);
    }
    //基于广度优先的最短路径算法
    bfs(v) {
      let vertices = this.vertices,
        edges = this.edges,
        color = {},
        info = {},
        queue = new Queue();

      //初始化状态
      vertices.forEach((item) => {
        color[item] = "white";
      });

      //入口顶点入队 状态改变 初始信息
      queue.enqueue(v);
      color[v] = "grey";
      info[v] = { distance: 0, path: v };

      //发现并探索
      while (queue.size()) {
        let u = queue.dequeue();
        let edg = edges[u];

        edg.forEach((item) => {
          if (color[item] !== "white") return;
          queue.enqueue(item);
          color[item] = "grey";
          info[item] = {
            distance: info[u].distance + 1,
            path: `${info[u].path} -> ${item}`,
          };
        });
        color[u] = "black";
      }
      return info;
    }
  };
})();

let g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "E");
g.addEdge("B", "D");
g.addEdge("B", "E");
g.addEdge("C", "F");
g.addEdge("E", "F");

console.log(g.bfs("A"));
```
