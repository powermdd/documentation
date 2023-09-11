export const data = JSON.parse("{\"key\":\"v-a4b78024\",\"path\":\"/documentation/\",\"title\":\"Documentation\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"documentation/README.md\"}")

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
