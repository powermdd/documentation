export const siteData = JSON.parse("{\"base\":\"/documentation/\",\"lang\":\"ko-KR\",\"title\":\"POWER MDD\",\"description\":\"Most Powerful Lowcode Tools\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"ko-KR\",\"title\":\"POWER MDD\",\"description\":\"가장 강력한 로우코드 개발 툴\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"POWER MDD\",\"description\":\"The most powerful low-code development tool\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
