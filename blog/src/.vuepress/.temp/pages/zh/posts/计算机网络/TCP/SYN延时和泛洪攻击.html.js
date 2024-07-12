import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/TCP/SYN延时和泛洪攻击.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/SYN%E5%BB%B6%E6%97%B6%E5%92%8C%E6%B3%9B%E6%B4%AA%E6%94%BB%E5%87%BB.html\",\"title\":\"SYN延时和泛洪攻击\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SYN延时和泛洪攻击\",\"tags\":[\"计算机基础\",\"计算机网络\"],\"categories\":[\"计算机网络\"],\"description\":\"什么是SYN攻击，如何避免SYN攻击？ ​ 攻击者在短时内向服务端发送大量的SYN报文，将服务端的半连接队列占满，使得服务器不能为正常用户服务 半连接队列（SYN队列）：收到SYN报文时，就会创建一个半连接对象，内核会把该链接放到SYN队列 全连接队列（Accept队列）：收到客户端的ACK报文时，内核从SYN队列取出一条半连接队列，创建一个全连接队列...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/SYN%E5%BB%B6%E6%97%B6%E5%92%8C%E6%B3%9B%E6%B4%AA%E6%94%BB%E5%87%BB.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SYN延时和泛洪攻击\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"什么是SYN攻击，如何避免SYN攻击？ ​ 攻击者在短时内向服务端发送大量的SYN报文，将服务端的半连接队列占满，使得服务器不能为正常用户服务 半连接队列（SYN队列）：收到SYN报文时，就会创建一个半连接对象，内核会把该链接放到SYN队列 全连接队列（Accept队列）：收到客户端的ACK报文时，内核从SYN队列取出一条半连接队列，创建一个全连接队列...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"SYN延时和泛洪攻击\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"什么是SYN攻击，如何避免SYN攻击？\",\"slug\":\"什么是syn攻击-如何避免syn攻击\",\"link\":\"#什么是syn攻击-如何避免syn攻击\",\"children\":[]},{\"level\":3,\"title\":\"什么时SYN超时，如何解决SYN超时？\",\"slug\":\"什么时syn超时-如何解决syn超时\",\"link\":\"#什么时syn超时-如何解决syn超时\",\"children\":[]}],\"readingTime\":{\"minutes\":2.25,\"words\":674},\"filePathRelative\":\"zh/posts/计算机网络/TCP/SYN延时和泛洪攻击.md\",\"excerpt\":\"<h3>什么是SYN攻击，如何避免SYN攻击？</h3>\\n<p>​\\t攻击者在短时内向服务端发送大量的SYN报文，将服务端的<strong>半连接队列占满</strong>，使得服务器不能为正常用户服务</p>\\n<p>半连接队列（SYN队列）：收到SYN报文时，就会创建一个半连接对象，内核会把该链接放到SYN队列\\n全连接队列（Accept队列）：收到客户端的ACK报文时，内核从SYN队列取出一条半连接队列，创建一个全连接队列，然后添加到accept队列</p>\\n<p><strong>当 TCP 半连接队列满了，后续再在收到 SYN 报文就会丢弃</strong></p>\\n<p>1.调大 netdev_max_backlog</p>\",\"autoDesc\":true}")
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
