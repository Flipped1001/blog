import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/TCP/TCP的拥塞控制.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6.html\",\"title\":\"TCP的拥塞控制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TCP的拥塞控制\",\"tags\":[\"计算机基础\",\"计算机网络\",\"TCP\"],\"categories\":[\"计算机网络\"],\"description\":\"拥塞控制： 避免「发送方」的数据填满整个网络，为了在「发送方」调节所要发送数据的量，定义了一个叫做「拥塞窗口」的概念。 $$ 什么是拥塞窗口，和发送窗口有什么关系？又是怎么知道当前网络出现了拥塞？拥塞控制有哪些？ $$ 拥塞窗口 cwnd是发送方维护的一个的状态变量，它会根据网络的拥塞程度动态变化的。发送窗口的值是swnd = min(cwnd, rw...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"TCP的拥塞控制\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"拥塞控制： 避免「发送方」的数据填满整个网络，为了在「发送方」调节所要发送数据的量，定义了一个叫做「拥塞窗口」的概念。 $$ 什么是拥塞窗口，和发送窗口有什么关系？又是怎么知道当前网络出现了拥塞？拥塞控制有哪些？ $$ 拥塞窗口 cwnd是发送方维护的一个的状态变量，它会根据网络的拥塞程度动态变化的。发送窗口的值是swnd = min(cwnd, rw...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"TCP\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"TCP的拥塞控制\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"拥塞控制：\",\"slug\":\"拥塞控制\",\"link\":\"#拥塞控制\",\"children\":[{\"level\":3,\"title\":\"慢启动\",\"slug\":\"慢启动\",\"link\":\"#慢启动\",\"children\":[]},{\"level\":3,\"title\":\"拥塞避免\",\"slug\":\"拥塞避免\",\"link\":\"#拥塞避免\",\"children\":[]},{\"level\":3,\"title\":\"拥塞发生\",\"slug\":\"拥塞发生\",\"link\":\"#拥塞发生\",\"children\":[]},{\"level\":3,\"title\":\"快速恢复\",\"slug\":\"快速恢复\",\"link\":\"#快速恢复\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.04,\"words\":613},\"filePathRelative\":\"zh/posts/计算机网络/TCP/TCP的拥塞控制.md\",\"excerpt\":\"<h2>拥塞控制：</h2>\\n<p><strong>避免「发送方」的数据填满整个网络</strong>，为了在「发送方」调节所要发送数据的量，定义了一个叫做「<strong>拥塞窗口</strong>」的概念。\\n$$\\n什么是拥塞窗口，和发送窗口有什么关系？又是怎么知道当前网络出现了拥塞？拥塞控制有哪些？\\n$$\\n<strong>拥塞窗口 cwnd</strong>是发送方维护的一个的状态变量，它会根据<strong>网络的拥塞程度动态变化的</strong>。发送窗口的值是swnd = min(cwnd, rwnd)，</p>\\n<p>只要发生超时重传就会认为网络出现了拥塞</p>\\n<h3>慢启动</h3>\",\"autoDesc\":true}")
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
