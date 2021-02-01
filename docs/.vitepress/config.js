const getBase = () => {
  const isDev = process.env.NODE_ENV === "development";
  return isDev ? "/" : "/new-blog/";
};
module.exports = {
  title: "博客",
  base: getBase(),
  themeConfig: {
    nav: [
      {
        text: "英语",
        link: "/english/base",
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
      [`${getBase()}english/`]: require("../english/router"),
      [`${getBase()}algorithm/`]: require("../algorithm/router"),
      [`${getBase()}helper/`]: require("../helper/router"),
      [`${getBase()}`]: require("../base/router"),
    },
  },
};
