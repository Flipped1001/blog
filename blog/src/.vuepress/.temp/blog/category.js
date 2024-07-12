export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"计算机基础":{"path":"/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/","indexes":[0,1]},"业务场景":{"path":"/category/%E4%B8%9A%E5%8A%A1%E5%9C%BA%E6%99%AF/","indexes":[2]},"操作系统":{"path":"/category/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","indexes":[3,4,5,6,7,8,9,10,11]},"计算机网络":{"path":"/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/","indexes":[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]}}},"/en/":{"path":"/en/category/","map":{"Cherry":{"path":"/en/category/cherry/","indexes":[35]},"Dragon Fruit":{"path":"/en/category/dragon-fruit/","indexes":[36]},"Fruit":{"path":"/en/category/fruit/","indexes":[37,36,38,39,40,41]},"Strawberry":{"path":"/en/category/strawberry/","indexes":[37]},"Vegetable":{"path":"/en/category/vegetable/","indexes":[42]},"Apple":{"path":"/en/category/apple/","indexes":[40,41,43,44]},"Banana":{"path":"/en/category/banana/","indexes":[45,46,38,39]}}}},"tag":{"/":{"path":"/tag/","map":{"用户登录":{"path":"/tag/%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95/","indexes":[2]},"计算机基础":{"path":"/tag/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/","indexes":[3,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,4,5,6,7,8,9,10,11]},"操作系统":{"path":"/tag/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","indexes":[3,4,5,6,7,8,9,10,11]},"计算机网络":{"path":"/tag/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/","indexes":[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"HTTP":{"path":"/tag/http/","indexes":[28,29,30]},"HTTPS":{"path":"/tag/https/","indexes":[27,28]},"应用层":{"path":"/tag/%E5%BA%94%E7%94%A8%E5%B1%82/","indexes":[31]},"网络层":{"path":"/tag/%E7%BD%91%E7%BB%9C%E5%B1%82/","indexes":[12,13,14]},"Ping":{"path":"/tag/ping/","indexes":[12]},"IP":{"path":"/tag/ip/","indexes":[14]},"TCP":{"path":"/tag/tcp/","indexes":[15,18,19,20,21,22,23,24,26]},"分层模型":{"path":"/tag/%E5%88%86%E5%B1%82%E6%A8%A1%E5%9E%8B/","indexes":[34]}}},"/en/":{"path":"/en/tag/","map":{"red":{"path":"/en/tag/red/","indexes":[42,37,36,35,40,41,43,44]},"small":{"path":"/en/tag/small/","indexes":[37,35]},"round":{"path":"/en/tag/round/","indexes":[42,35,40,41,43,44]},"big":{"path":"/en/tag/big/","indexes":[36,40,41,43,44]},"yellow":{"path":"/en/tag/yellow/","indexes":[45,46,38,39]},"curly":{"path":"/en/tag/curly/","indexes":[45,46,38,39]},"long":{"path":"/en/tag/long/","indexes":[45,46,38,39]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

