import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/BaiduNetdiskDownload/尚硅谷Webpack5从入门到原理/课件/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("F:/BaiduNetdiskDownload/尚硅谷Webpack5从入门到原理/课件/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
