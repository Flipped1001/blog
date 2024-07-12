import comp from "C:/VS Code/my-docs/src/.vuepress/.temp/pages/zh/posts/计算机网络/TCP/CLOSE_WAIT和TIME_WAIT.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/CLOSE_WAIT%E5%92%8CTIME_WAIT.html\",\"title\":\"CLOSE_WAIT和TIME_WAIT\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CLOSE_WAIT和TIME_WAIT\",\"tags\":[\"计算机基础\",\"计算机网络\"],\"categories\":[\"计算机网络\"],\"description\":\"为什么 TIME_WAIT 等待的时间是 2MSL？ MSL时报文的最大生存时间，超过这个时间就会丢弃这个报文 IP头中有一个有一个TTL字段，是IP数据报文可以跳跃的最大路由数，每经过一个路由就会减一，直到为0 所以 MSL 应该要大于等于 TTL 消耗为 0 的时间，以确保报文已被自然消亡。 TTL 的值一般是 64，Linux 将 MSL 设置为...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP/CLOSE_WAIT%E5%92%8CTIME_WAIT.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"CLOSE_WAIT和TIME_WAIT\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"为什么 TIME_WAIT 等待的时间是 2MSL？ MSL时报文的最大生存时间，超过这个时间就会丢弃这个报文 IP头中有一个有一个TTL字段，是IP数据报文可以跳跃的最大路由数，每经过一个路由就会减一，直到为0 所以 MSL 应该要大于等于 TTL 消耗为 0 的时间，以确保报文已被自然消亡。 TTL 的值一般是 64，Linux 将 MSL 设置为...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机基础\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"CLOSE_WAIT和TIME_WAIT\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"为什么 TIME_WAIT 等待的时间是 2MSL？\",\"slug\":\"为什么-time-wait-等待的时间是-2msl\",\"link\":\"#为什么-time-wait-等待的时间是-2msl\",\"children\":[]},{\"level\":3,\"title\":\"为什么需要 TIME_WAIT 状态？\",\"slug\":\"为什么需要-time-wait-状态\",\"link\":\"#为什么需要-time-wait-状态\",\"children\":[]},{\"level\":3,\"title\":\"TIME_WAIT 过多有什么危害？\",\"slug\":\"time-wait-过多有什么危害\",\"link\":\"#time-wait-过多有什么危害\",\"children\":[]},{\"level\":3,\"title\":\"如何优化 TIME_WAIT？\",\"slug\":\"如何优化-time-wait\",\"link\":\"#如何优化-time-wait\",\"children\":[]},{\"level\":3,\"title\":\"服务器出现大量 TIME_WAIT 状态的原因有哪些？\",\"slug\":\"服务器出现大量-time-wait-状态的原因有哪些\",\"link\":\"#服务器出现大量-time-wait-状态的原因有哪些\",\"children\":[]},{\"level\":3,\"title\":\"服务器出现大量 CLOSE_WAIT 状态的原因有哪些？\",\"slug\":\"服务器出现大量-close-wait-状态的原因有哪些\",\"link\":\"#服务器出现大量-close-wait-状态的原因有哪些\",\"children\":[]}],\"readingTime\":{\"minutes\":4.12,\"words\":1235},\"filePathRelative\":\"zh/posts/计算机网络/TCP/CLOSE_WAIT和TIME_WAIT.md\",\"excerpt\":\"<h3>为什么 TIME_WAIT 等待的时间是 2MSL？</h3>\\n<p>MSL时报文的最大生存时间，超过这个时间就会丢弃这个报文</p>\\n<p>IP头中有一个有一个TTL字段，是IP数据报文可以跳跃的最大路由数，每经过一个路由就会减一，直到为0</p>\\n<p>所以 <strong>MSL 应该要大于等于 TTL 消耗为 0 的时间</strong>，以确保报文已被自然消亡。</p>\\n<p><strong>TTL 的值一般是 64，Linux 将 MSL 设置为 30 秒，意味着 Linux 认为数据报文经过 64 个路由器的时间不会超过 30 秒，如果超过了，就认为报文已经消失在网络中了</strong>。</p>\",\"autoDesc\":true}")
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
