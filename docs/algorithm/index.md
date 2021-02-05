## 过滤掉树中的某项

```js
// 实现一个算法，输入arr和name，过滤arr数组中等于name的项，返回一个新的arr
// 例子：filter(arr,'name7')
const arr = [
  {
    name: "name1",
  },
  {
    name: "name2",
    children: [
      {
        name: "name3",
      },
    ],
  },
  {
    name: "name4",
    children: [
      {
        name: "name5",
      },
      {
        name: "name6",
      },
      {
        name: "name7",
      },
      {
        name: "name8",
      },
    ],
  },
  {
    name: "name9",
    children: [
      {
        name: "name10",
      },
      {
        name: "name11",
      },
      {
        name: "name12",
      },
    ],
  },
  {
    name: "name13",
    children: [
      {
        name: "name14",
      },
      {
        name: "name15",
      },
    ],
  },
];

const filter = (arr, name) => {};
```
