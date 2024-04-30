import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Site1S8D27",
  titleTemplate: ":title 🌌 Site1S8D27",
  description:
    "Site1S8D27 - 计算器玩机指南站点 - 该站点为计算机爱好者提供玩机指南，包括原理分析、爆机玩法、各种 ROP 程序的注入方法等。",
  cleanUrls: true,
  lastUpdated: true,
  transformHead({ assets }) {
    const fontFile = assets.find((file) => /.*.(woff2|ttf|otf)$/.test(file));
    if (fontFile) {
      let fontType;
      if (fontFile.endsWith(".woff2")) {
        fontType = "font/woff2";
      } else if (fontFile.endsWith(".ttf")) {
        fontType = "font/ttf";
      } else if (fontFile.endsWith(".otf")) {
        fontType = "font/otf";
      }
      return [
        [
          "link",
          {
            rel: "preload",
            href: fontFile,
            as: "font",
            type: fontType,
            crossorigin: "anonymous",
          },
        ],
      ];
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "原理分析", link: "/fundament/" },
      { text: "爆机玩法", link: "/tutorial/" },
      { text: "ROP 程序", link: "/ROP/" },
    ],
    outline: 6,
    sidebar: {
      "/fundament/": [
        {
          text: "原理分析",
          items: [],
        },
      ],
      "/tutorial/": [
        {
          text: "爆机玩法",
          items: [],
        },
      ],
      "/ROP/": [
        {
          text: "ROP 程序",
          items: [{ text: "fx-991CN X 像素编辑器", link: "/ROP/pixel_editor" }],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/KaguReion/Site1S8D27" }],
    logo: "/Project_1S8D27_icon.ico",
    footer: {
      message:
        'Site1S8D27 由 <a href="https://space.bilibili.com/182330206">彼方赴尘Official / Nebu Dr1ft</a> 运营，隶属于项目 Project 1S8D27</a>。',
      copyright:
        '若无特殊标记，该站点内容遵循 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a>。',
    },
    editLink: {
      pattern: "https://github.com/KaguReion/Site1S8D27/edit/main/docs/:path",
      text: "在 GitHub 上修改此页面",
    },
    lastUpdated: {
      text: "上次修改时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "long",
      },
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    darkModeSwitchLabel: "颜色切换",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回到顶部",
    langMenuLabel: "切换语言",
  },
  head: [["link", { rel: "icon", href: "/Project_1S8D27_icon.ico" }]],
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
});
