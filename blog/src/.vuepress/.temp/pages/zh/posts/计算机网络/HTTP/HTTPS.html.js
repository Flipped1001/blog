import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/HTTP/HTTPS.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/HTTPS.html\",\"title\":\"HTTPS如何优化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"HTTPS如何优化\",\"tags\":[\"计算机基础\",\"计算机网络\",\"HTTPS\"],\"categories\":[\"计算机网络\"],\"description\":\"HTTPS如何优化？ 1.分析性能损耗 第一个环节， TLS 协议握手过程； 第二个环节，握手后的对称加密报文传输。 第一个环节的性能损耗更大一些 硬件优化 HTTPS协议是计算密集型，而不是I/O密集型，应该买CUP，应该选择可以支持 AES-NI 特性的 CPU 软件优化 软件的优化方向可以分成两种：软件升级，协议优化 软件升级存在一定风险 主攻协...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP/HTTPS.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"HTTPS如何优化\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"HTTPS如何优化？ 1.分析性能损耗 第一个环节， TLS 协议握手过程； 第二个环节，握手后的对称加密报文传输。 第一个环节的性能损耗更大一些 硬件优化 HTTPS协议是计算密集型，而不是I/O密集型，应该买CUP，应该选择可以支持 AES-NI 特性的 CPU 软件优化 软件的优化方向可以分成两种：软件升级，协议优化 软件升级存在一定风险 主攻协...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"HTTPS\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"HTTPS如何优化\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.分析性能损耗\",\"slug\":\"_1-分析性能损耗\",\"link\":\"#_1-分析性能损耗\",\"children\":[{\"level\":3,\"title\":\"硬件优化\",\"slug\":\"硬件优化\",\"link\":\"#硬件优化\",\"children\":[]},{\"level\":3,\"title\":\"软件优化\",\"slug\":\"软件优化\",\"link\":\"#软件优化\",\"children\":[]},{\"level\":3,\"title\":\"证书优化\",\"slug\":\"证书优化\",\"link\":\"#证书优化\",\"children\":[]},{\"level\":3,\"title\":\"会话复用\",\"slug\":\"会话复用\",\"link\":\"#会话复用\",\"children\":[]}]},{\"level\":2,\"title\":\"HTTPS中TCP三次握手和TLS握手能同时进行吗？\",\"slug\":\"https中tcp三次握手和tls握手能同时进行吗\",\"link\":\"#https中tcp三次握手和tls握手能同时进行吗\",\"children\":[]}],\"readingTime\":{\"minutes\":2.48,\"words\":743},\"filePathRelative\":\"zh/posts/计算机网络/HTTP/HTTPS.md\",\"excerpt\":\"\\n<h2>1.分析性能损耗</h2>\\n<ul>\\n<li>\\n<p>第一个环节， TLS 协议握手过程；</p>\\n</li>\\n<li>\\n<p>第二个环节，握手后的对称加密报文传输。</p>\\n<p>第一个环节的性能损耗更大一些</p>\\n</li>\\n</ul>\\n<h3>硬件优化</h3>\\n<p>HTTPS协议是<strong>计算密集型</strong>，而不是<strong>I/O密集型</strong>，应该买CUP，应该选择可以<strong>支持 AES-NI 特性的 CPU</strong></p>\\n<h3>软件优化</h3>\\n<p>软件的优化方向可以分成两种：<strong>软件升级，协议优化</strong></p>\",\"autoDesc\":true}")
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
