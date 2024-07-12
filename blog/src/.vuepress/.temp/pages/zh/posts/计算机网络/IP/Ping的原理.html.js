import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/IP/Ping的原理.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP/Ping%E7%9A%84%E5%8E%9F%E7%90%86.html\",\"title\":\"ping的工作原理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ping的工作原理\",\"tags\":[\"计算机基础\",\"计算机网络\",\"Ping\",\"网络层\"],\"categories\":[\"计算机网络\"],\"description\":\"ping的工作原理 查询报文类型 回送消息 —— 类型 0 和 8 回送消息用于进行通信的主机或路由器之间，判断所发送的数据包是否已经成功到达对端的一种消息，ping 命令就是利用这个消息实现的。 可以向对端主机发送回送请求的消息（ICMP Echo Request Message，类型 8），也可以接收对端主机发回来的回送应答消息（ICMP Echo...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP/Ping%E7%9A%84%E5%8E%9F%E7%90%86.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"ping的工作原理\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"ping的工作原理 查询报文类型 回送消息 —— 类型 0 和 8 回送消息用于进行通信的主机或路由器之间，判断所发送的数据包是否已经成功到达对端的一种消息，ping 命令就是利用这个消息实现的。 可以向对端主机发送回送请求的消息（ICMP Echo Request Message，类型 8），也可以接收对端主机发回来的回送应答消息（ICMP Echo...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Ping\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"网络层\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"ping的工作原理\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"ping的工作原理\",\"slug\":\"ping的工作原理\",\"link\":\"#ping的工作原理\",\"children\":[]},{\"level\":2,\"title\":\"断网了还能ping通127.0.0.1吗？\",\"slug\":\"断网了还能ping通127-0-0-1吗\",\"link\":\"#断网了还能ping通127-0-0-1吗\",\"children\":[{\"level\":3,\"title\":\"什么是127.0.0.1\",\"slug\":\"什么是127-0-0-1\",\"link\":\"#什么是127-0-0-1\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.51,\"words\":1954},\"filePathRelative\":\"zh/posts/计算机网络/IP/Ping的原理.md\",\"excerpt\":\"<h2>ping的工作原理</h2>\\n<h4>查询报文类型</h4>\\n<blockquote>\\n<p>回送消息 —— 类型 <code>0</code> 和 <code>8</code></p>\\n</blockquote>\\n<p><strong>回送消息</strong>用于进行通信的主机或路由器之间，判断所发送的数据包是否已经成功到达对端的一种消息，<code>ping</code> 命令就是利用这个消息实现的。</p>\\n<p>可以向对端主机发送<strong>回送请求</strong>的消息（<code>ICMP Echo Request Message</code>，类型 <code>8</code>），也可以接收对端主机发回来的<strong>回送应答</strong>消息（<code>ICMP Echo Reply Message</code>，类型 <code>0</code>）。</p>\",\"autoDesc\":true}")
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
