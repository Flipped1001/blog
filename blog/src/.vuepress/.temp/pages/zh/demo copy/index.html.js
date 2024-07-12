import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/demo copy/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo%20copy/\",\"title\":\"计算机网络\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"计算机网络\",\"index\":false,\"icon\":\"server\",\"category\":[\"使用指南\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"zh/demo copy/README.md\",\"excerpt\":\"\"}")
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
