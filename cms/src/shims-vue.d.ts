/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 对环境变量进行类型声明
declare const VUE_APP_BASE_URL: string
declare const VUE_APP_BASE_NAME: string
