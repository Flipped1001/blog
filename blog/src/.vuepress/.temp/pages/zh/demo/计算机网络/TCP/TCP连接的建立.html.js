import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/demo/计算机网络/TCP/TCP连接的建立.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E8%BF%9E%E6%8E%A5%E7%9A%84%E5%BB%BA%E7%AB%8B.html\",\"title\":\"TCP连接的建立\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TCP连接的建立\",\"date\":\"2023-11-24T00:00:00.000Z\",\"tags\":[\"计算机基础\",\"计算机网络\",\"TCP\"],\"categories\":[\"计算机网络\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://flipped1001.cn/zh/demo/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E8%BF%9E%E6%8E%A5%E7%9A%84%E5%BB%BA%E7%AB%8B.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"TCP连接的建立\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Flipped\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"TCP\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-11-24T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"TCP连接的建立\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-11-24T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Flipped\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"TCP连接的建立：\",\"slug\":\"tcp连接的建立\",\"link\":\"#tcp连接的建立\",\"children\":[{\"level\":3,\"title\":\"为什么是三次握手：\",\"slug\":\"为什么是三次握手\",\"link\":\"#为什么是三次握手\",\"children\":[]},{\"level\":3,\"title\":\"为什么每次建立TCP链接的时候，初始化序列号的都要求不一样？\",\"slug\":\"为什么每次建立tcp链接的时候-初始化序列号的都要求不一样\",\"link\":\"#为什么每次建立tcp链接的时候-初始化序列号的都要求不一样\",\"children\":[]},{\"level\":3,\"title\":\"初始序列号ISN是如何随机产生的？\",\"slug\":\"初始序列号isn是如何随机产生的\",\"link\":\"#初始序列号isn是如何随机产生的\",\"children\":[]},{\"level\":3,\"title\":\"既然IP层会分片，为什么TCP层还需要MSS？\",\"slug\":\"既然ip层会分片-为什么tcp层还需要mss\",\"link\":\"#既然ip层会分片-为什么tcp层还需要mss\",\"children\":[]},{\"level\":3,\"title\":\"当第一次握手丢失：\",\"slug\":\"当第一次握手丢失\",\"link\":\"#当第一次握手丢失\",\"children\":[]},{\"level\":3,\"title\":\"第二次握手丢失：\",\"slug\":\"第二次握手丢失\",\"link\":\"#第二次握手丢失\",\"children\":[]},{\"level\":3,\"title\":\"第三次握手丢失：\",\"slug\":\"第三次握手丢失\",\"link\":\"#第三次握手丢失\",\"children\":[]}]},{\"level\":2,\"title\":\"为什么每次建立TCP连接，初始化序列号都要不一样？\",\"slug\":\"为什么每次建立tcp连接-初始化序列号都要不一样\",\"link\":\"#为什么每次建立tcp连接-初始化序列号都要不一样\",\"children\":[]},{\"level\":2,\"title\":\"TCP 序列号和确认号是如何变化的？\",\"slug\":\"tcp-序列号和确认号是如何变化的\",\"link\":\"#tcp-序列号和确认号是如何变化的\",\"children\":[]},{\"level\":2,\"title\":\"万能公式\",\"slug\":\"万能公式\",\"link\":\"#万能公式\",\"children\":[]},{\"level\":2,\"title\":\"已建立的TCP连接，收到SYN会发生什么？\",\"slug\":\"已建立的tcp连接-收到syn会发生什么\",\"link\":\"#已建立的tcp连接-收到syn会发生什么\",\"children\":[{\"level\":3,\"title\":\"killcx 的工具\",\"slug\":\"killcx-的工具\",\"link\":\"#killcx-的工具\",\"children\":[]},{\"level\":3,\"title\":\"tcpkill 的工具\",\"slug\":\"tcpkill-的工具\",\"link\":\"#tcpkill-的工具\",\"children\":[]}]}],\"readingTime\":{\"minutes\":8.36,\"words\":2507},\"filePathRelative\":\"zh/demo/计算机网络/TCP/TCP连接的建立.md\",\"localizedDate\":\"2023年11月24日\",\"excerpt\":\"\"}")
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
