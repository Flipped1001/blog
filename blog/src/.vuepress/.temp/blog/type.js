      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,3,2,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,4,5,6,7,8,9,10,11,1]},"/en/":{"path":"/en/article/","indexes":[42,37,36,35,45,46,38,39,40,41,43,44,47]}},"star":{"/":{"path":"/star/","indexes":[0]},"/en/":{"path":"/en/star/","indexes":[38,42,43]}},"timeline":{"/":{"path":"/timeline/","indexes":[3,2,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,4,5,6,7,8,9,10,11]},"/en/":{"path":"/en/timeline/","indexes":[42,37,36,35,45,46,38,39,40,41,43,44]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      