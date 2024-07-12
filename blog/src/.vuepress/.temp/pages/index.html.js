import comp from "C:/VS Code/blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"/assets/images/head.jpg\",\"heroText\":\"Flipped\",\"heroFullScreen\":true,\"tagline\":\"天下之事，成于惧而败于忽\",\"heroImageDark\":\"/assets/images/logo2.jpg\",\"projects\":[{\"icon\":\"project\",\"name\":\"项目名称\",\"desc\":\"项目详细描述\",\"link\":\"https://你的项目链接\"},{\"icon\":\"link\",\"name\":\"链接名称\",\"desc\":\"链接详细描述\",\"link\":\"https://链接地址\"},{\"icon\":\"book\",\"name\":\"书籍名称\",\"desc\":\"书籍详细描述\",\"link\":\"https://你的书籍链接\"},{\"icon\":\"article\",\"name\":\"文章名称\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"},{\"icon\":\"friend\",\"name\":\"伙伴名称\",\"desc\":\"伙伴详细介绍\",\"link\":\"https://你的伙伴链接\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"自定义项目\",\"desc\":\"自定义详细介绍\",\"link\":\"https://你的自定义链接\"}],\"footer\":\"自定义你的页脚文字\",\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://flipped1001.cn/en/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://flipped1001.cn/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Flipped\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"博客主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.61,\"words\":184},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
