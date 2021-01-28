module.exports = {
  title: "博客",
  base: "/new-blog/",
  themeConfig: {
    nav: [
      {
        text: "英语",
        link: "/english/index",
        activeMatch: "^/english/",
      },
      {
        text: "算法",
        link: "/algorithm/index",
        activeMatch: "^/algorithm/",
      },
      {
        text: "工具助手",
        link: "/helper/command",
        activeMatch: "^/helper/",
      },
      {
        text: "Github",
        link: "https://github.com/MaxPeak",
      },
    ],
    sidebar: {
      "/english/": require("../english/router"),
      "/algorithm/": require("../algorithm/router"),
      "/helper/": require("../helper/router"),
      "/": require("../base/router"),
    },
  },
};
