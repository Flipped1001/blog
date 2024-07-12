import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/TCP/TCP的重传机制.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E9%87%8D%E4%BC%A0%E6%9C%BA%E5%88%B6.html\",\"title\":\"TCP的重传机制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TCP的重传机制\",\"tags\":[\"计算机基础\",\"计算机网络\",\"TCP\"],\"categories\":[\"计算机网络\"],\"description\":\"TCP的重传机制 1.超时重传 在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 ACK 确认应答报文，就会重发该数据 超时时间应该设置为多少呢？ RTT（Round-Trip Time 往返时延）数据发送时刻到接收到确认的时刻的差值 RTO超时重传时间： RTO较长，重发很慢，没有效率 RTO较短，导致没有丢包就会重传，导致更多的超时...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E9%87%8D%E4%BC%A0%E6%9C%BA%E5%88%B6.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"TCP的重传机制\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"TCP的重传机制 1.超时重传 在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 ACK 确认应答报文，就会重发该数据 超时时间应该设置为多少呢？ RTT（Round-Trip Time 往返时延）数据发送时刻到接收到确认的时刻的差值 RTO超时重传时间： RTO较长，重发很慢，没有效率 RTO较短，导致没有丢包就会重传，导致更多的超时...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"TCP\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"TCP的重传机制\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"TCP的重传机制\",\"slug\":\"tcp的重传机制\",\"link\":\"#tcp的重传机制\",\"children\":[{\"level\":3,\"title\":\"1.超时重传\",\"slug\":\"_1-超时重传\",\"link\":\"#_1-超时重传\",\"children\":[]},{\"level\":3,\"title\":\"2.快速重传\",\"slug\":\"_2-快速重传\",\"link\":\"#_2-快速重传\",\"children\":[]},{\"level\":3,\"title\":\"3.SACK方法\",\"slug\":\"_3-sack方法\",\"link\":\"#_3-sack方法\",\"children\":[]},{\"level\":3,\"title\":\"4.Duplicate SACK\",\"slug\":\"_4-duplicate-sack\",\"link\":\"#_4-duplicate-sack\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.55,\"words\":465},\"filePathRelative\":\"zh/posts/计算机网络/TCP/TCP的重传机制.md\",\"excerpt\":\"<h2>TCP的重传机制</h2>\\n<h3>1.超时重传</h3>\\n<p>在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 <code>ACK</code> 确认应答报文，就会重发该数据</p>\\n<blockquote>\\n<p>超时时间应该设置为多少呢？</p>\\n<p><code>RTT</code>（Round-Trip Time 往返时延）<strong>数据发送时刻到接收到确认的时刻的差值</strong></p>\\n<p>RTO超时重传时间：</p>\\n<ul>\\n<li>RTO较长，重发很慢，没有效率</li>\\n<li>RTO较短，导致没有丢包就会重传，导致更多的超时</li>\\n</ul>\\n</blockquote>\",\"autoDesc\":true}")
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
