import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/TCP/TCP的基本认识.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%86.html\",\"title\":\"TCP的基本认识\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TCP的基本认识\",\"tags\":[\"计算机基础\",\"计算机网络\"],\"categories\":[\"计算机网络\"],\"description\":\"TCP篇 TCP基本认识 TCP的头格式： 序列号：在建立连接时由计算机生成的随机数作为其初始值，每发送一次数据，就累加一次。用来解决网络包乱序问题。 确认应答号：指下一次「期望」收到的数据的序列号，发送端接收到确认答应之后，可以认定之前的数据全部被接收。用来解决丢包问题 ACK：该位为 1 时，「确认应答」的字段变为有效，TCP 规定除了最初建立连接...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/TCP%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%86.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"TCP的基本认识\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"TCP篇 TCP基本认识 TCP的头格式： 序列号：在建立连接时由计算机生成的随机数作为其初始值，每发送一次数据，就累加一次。用来解决网络包乱序问题。 确认应答号：指下一次「期望」收到的数据的序列号，发送端接收到确认答应之后，可以认定之前的数据全部被接收。用来解决丢包问题 ACK：该位为 1 时，「确认应答」的字段变为有效，TCP 规定除了最初建立连接...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"TCP的基本认识\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"TCP基本认识\",\"slug\":\"tcp基本认识\",\"link\":\"#tcp基本认识\",\"children\":[{\"level\":3,\"title\":\"TCP的头格式：\",\"slug\":\"tcp的头格式\",\"link\":\"#tcp的头格式\",\"children\":[]},{\"level\":3,\"title\":\"TCP工作在那一层：\",\"slug\":\"tcp工作在那一层\",\"link\":\"#tcp工作在那一层\",\"children\":[]},{\"level\":3,\"title\":\"什么是TCP协议：\",\"slug\":\"什么是tcp协议\",\"link\":\"#什么是tcp协议\",\"children\":[]},{\"level\":3,\"title\":\"什么是TCP连接:\",\"slug\":\"什么是tcp连接\",\"link\":\"#什么是tcp连接\",\"children\":[]},{\"level\":3,\"title\":\"如何确定一个TCP连接：\",\"slug\":\"如何确定一个tcp连接\",\"link\":\"#如何确定一个tcp连接\",\"children\":[]}]},{\"level\":2,\"title\":\"如何理解TCP是基于字节流的协议？\",\"slug\":\"如何理解tcp是基于字节流的协议\",\"link\":\"#如何理解tcp是基于字节流的协议\",\"children\":[]},{\"level\":2,\"title\":\"TCP半连接队列和全连接队列\",\"slug\":\"tcp半连接队列和全连接队列\",\"link\":\"#tcp半连接队列和全连接队列\",\"children\":[]},{\"level\":2,\"title\":\"SYN报文在什么情况下会被丢弃？\",\"slug\":\"syn报文在什么情况下会被丢弃\",\"link\":\"#syn报文在什么情况下会被丢弃\",\"children\":[]},{\"level\":2,\"title\":\"拔掉网线之后，TCP连接会消失吗？\",\"slug\":\"拔掉网线之后-tcp连接会消失吗\",\"link\":\"#拔掉网线之后-tcp连接会消失吗\",\"children\":[]},{\"level\":2,\"title\":\"为什么 tcp_tw_reuse 默认是关闭的？\",\"slug\":\"为什么-tcp-tw-reuse-默认是关闭的\",\"link\":\"#为什么-tcp-tw-reuse-默认是关闭的\",\"children\":[]},{\"level\":2,\"title\":\"用了TCP传输数据就一定不会丢包吗？\",\"slug\":\"用了tcp传输数据就一定不会丢包吗\",\"link\":\"#用了tcp传输数据就一定不会丢包吗\",\"children\":[]}],\"readingTime\":{\"minutes\":8.4,\"words\":2519},\"filePathRelative\":\"zh/posts/计算机网络/TCP/TCP的基本认识.md\",\"excerpt\":\"\\n<h2>TCP基本认识</h2>\\n<h3>TCP的头格式：</h3>\\n<figure><figcaption></figcaption></figure>\\n<p><strong>序列号</strong>：在建立连接时由计算机生成的随机数作为其初始值，每发送一次数据，就累加一次。用来解决网络包乱序问题。</p>\\n<p><strong>确认应答号</strong>：指下一次「期望」收到的数据的序列号，发送端接收到确认答应之后，可以认定之前的数据全部被接收。用来解决丢包问题</p>\\n<ul>\\n<li><em>ACK</em>：该位为 <code>1</code> 时，「确认应答」的字段变为有效，TCP 规定除了最初建立连接时的 <code>SYN</code> 包之外该位必须设置为 <code>1</code> 。</li>\\n<li><em>RST</em>：该位为 <code>1</code> 时，表示 TCP 连接中出现异常必须强制断开连接。</li>\\n<li><em>SYN</em>：该位为 <code>1</code> 时，表示希望建立连接，并在其「序列号」的字段进行序列号初始值的设定。</li>\\n<li><em>FIN</em>：该位为 <code>1</code> 时，表示今后不会再有数据发送，希望断开连接。当通信结束希望断开连接时，通信双方的主机之间就可以相互交换 <code>FIN</code> 位为 1 的 TCP 段。</li>\\n</ul>\",\"autoDesc\":true}")
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
