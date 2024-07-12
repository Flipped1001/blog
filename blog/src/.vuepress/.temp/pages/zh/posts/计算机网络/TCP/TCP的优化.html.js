import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/TCP/TCP的优化.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E4%BC%98%E5%8C%96.html\",\"title\":\"TCP的优化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TCP的优化\",\"tags\":[\"计算机基础\",\"计算机网络\",\"TCP\"],\"categories\":[\"计算机网络\"],\"description\":\"如何优化TCP？ TCP三次握手的性能提升？ 客户端优化： SYN_SENT优化，跟据服务器的繁忙程度修改SNY重传次数 服务端优化： SYN_RCV状态的优化,同样是修改重发次数 调整半连接队列的大小 如何绕过三次握手： TCP_FAST_OPEN功能，第一次建立握手时还是三次链接，之后建立连接就不需要握手了 需要双方同时打开才能有效 TCP四次挥手...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E4%BC%98%E5%8C%96.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"TCP的优化\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"如何优化TCP？ TCP三次握手的性能提升？ 客户端优化： SYN_SENT优化，跟据服务器的繁忙程度修改SNY重传次数 服务端优化： SYN_RCV状态的优化,同样是修改重发次数 调整半连接队列的大小 如何绕过三次握手： TCP_FAST_OPEN功能，第一次建立握手时还是三次链接，之后建立连接就不需要握手了 需要双方同时打开才能有效 TCP四次挥手...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"TCP\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"TCP的优化\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"如何优化TCP？\",\"slug\":\"如何优化tcp\",\"link\":\"#如何优化tcp\",\"children\":[]}],\"readingTime\":{\"minutes\":2.58,\"words\":775},\"filePathRelative\":\"zh/posts/计算机网络/TCP/TCP的优化.md\",\"excerpt\":\"<h2>如何优化TCP？</h2>\\n<h4>TCP三次握手的性能提升？</h4>\\n<p>客户端优化：</p>\\n<p>SYN_SENT优化，跟据服务器的繁忙程度修改SNY重传次数</p>\\n<p>服务端优化：</p>\\n<p>SYN_RCV状态的优化,同样是修改重发次数\\n调整半连接队列的大小</p>\\n<p>如何绕过三次握手：</p>\\n<p>TCP_FAST_OPEN功能，第一次建立握手时还是三次链接，之后建立连接就不需要握手了\\n需要双方同时打开才能有效</p>\\n<h4>TCP四次挥手性能的提升？</h4>\\n<p>主动方的优化：</p>\\n<blockquote>\\n<p>CLOSE函数和SHUTDOWN函数的区别：</p>\\n<p>close函数是直接完全断开连接，双方都不能发送或者接受消息， <strong>此时，调用了 close 函数的一方的连接叫做「孤儿连接」</strong></p>\\n<p>shutdown函数是优雅的可以控制只关闭一个方向的连接</p>\\n<ul>\\n<li>SHUT_RD(0)：<strong>关闭连接的「读」这个方向</strong>，如果接收缓冲区有已接收的数据，则将会被丢弃，并且后续再收到新的数据，会对数据进行 ACK，然后悄悄地丢弃。也就是说，对端还是会接收到 ACK，在这种情况下根本不知道数据已经被丢弃了。</li>\\n<li>SHUT_WR(1)：<strong>关闭连接的「写」这个方向</strong>，这就是常被称为「半关闭」的连接。如果发送缓冲区还有未发送的数据，将被立即发送出去，并发送一个 FIN 报文给对端。</li>\\n<li>SHUT_RDWR(2)：相当于 SHUT_RD 和 SHUT_WR 操作各一次，<strong>关闭套接字的读和写两个方向</strong>。</li>\\n</ul>\\n</blockquote>\",\"autoDesc\":true}")
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
