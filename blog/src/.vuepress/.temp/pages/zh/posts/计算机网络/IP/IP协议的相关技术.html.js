import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/IP/IP协议的相关技术.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP/IP%E5%8D%8F%E8%AE%AE%E7%9A%84%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF.html\",\"title\":\"IP协议的相关技术\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"IP协议的相关技术\",\"tags\":[\"计算机基础\",\"计算机网络\",\"网络层\"],\"categories\":[\"计算机网络\"],\"description\":\"APR: 在传输一个 IP 数据报的时候，确定了源 IP 地址和目标 IP 地址后，就会通过主机「路由表」确定 IP 数据包下一跳。然而，网络层的下一层是数据链路层，所以我们还要知道「下一跳」的 MAC 地址。 由于主机的路由表中可以找到下一跳的 IP 地址，所以可以通过 ARP 协议，求得下一跳的 MAC 地址。 那么 ARP 又是如何知道对方 MA...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP/IP%E5%8D%8F%E8%AE%AE%E7%9A%84%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"IP协议的相关技术\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"APR: 在传输一个 IP 数据报的时候，确定了源 IP 地址和目标 IP 地址后，就会通过主机「路由表」确定 IP 数据包下一跳。然而，网络层的下一层是数据链路层，所以我们还要知道「下一跳」的 MAC 地址。 由于主机的路由表中可以找到下一跳的 IP 地址，所以可以通过 ARP 协议，求得下一跳的 MAC 地址。 那么 ARP 又是如何知道对方 MA...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"网络层\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"IP协议的相关技术\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":8.93,\"words\":2678},\"filePathRelative\":\"zh/posts/计算机网络/IP/IP协议的相关技术.md\",\"excerpt\":\"<h5>APR:</h5>\\n<p>在传输一个 IP 数据报的时候，确定了源 IP 地址和目标 IP 地址后，就会通过主机「路由表」确定 IP 数据包下一跳。然而，网络层的下一层是数据链路层，所以我们还要知道「下一跳」的 MAC 地址。</p>\\n<p>由于主机的路由表中可以找到下一跳的 IP 地址，所以可以通过 <strong>ARP 协议</strong>，求得下一跳的 MAC 地址。</p>\\n<blockquote>\\n<p>那么 ARP 又是如何知道对方 MAC 地址的呢？</p>\\n</blockquote>\\n<p>简单地说，ARP 是借助 <strong>ARP 请求与 ARP 响应</strong>两种类型的包确定 MAC 地址的。</p>\",\"autoDesc\":true}")
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
