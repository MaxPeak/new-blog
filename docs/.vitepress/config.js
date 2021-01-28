const BASE = "/new-blog/";
module.exports = {
  title: "博客",
  base: BASE,
  themeConfig: {
    nav: [
      {
        text: "英语",
        link: "/english/index",
        activeMatch: "/english/",
      },
      {
        text: "算法",
        link: "/algorithm/index",
        activeMatch: "/algorithm/",
      },
      {
        text: "工具助手",
        link: "/helper/command",
        activeMatch: "/helper/",
      },
      {
        text: "Github",
        link: "https://github.com/MaxPeak",
      },
    ],
    sidebar: {
      [`${BASE}english/`]: require("../english/router"),
      [`${BASE}algorithm/`]: require("../algorithm/router"),
      [`${BASE}helper/`]: require("../helper/router"),
      [`${BASE}`]: require("../base/router"),
    },
  },
};
