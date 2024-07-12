import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/en/demo/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/encrypt.html\",\"title\":\"Encryption Article\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"Guide\"],\"tag\":[\"encryption\"],\"description\":\"Encryption Article The actual article content. Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1...\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"en/demo/encrypt.md\",\"excerpt\":\"\\n<p>The actual article content.</p>\\n<p>Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text.</p>\\n<p>Paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text.</p>\",\"autoDesc\":true}")
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
