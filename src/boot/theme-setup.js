import { boot } from 'quasar/wrappers'
import { colors, setCssVar } from 'quasar'
import { themeVariables } from 'src/compose/data/theme-variables'
import { hostsToThemes } from 'src/compose/data/hosts-to-themes'

// https://forum.quasar-framework.org/topic/7266/ssr-question-about-css-and-flickering-another-question/3
// Inspired by above.  Setting css vars here avoids flickering when they
// get applied client side
function setBrand(color, value, ssrContext) {
  if (ssrContext) {
    ssrContext.MY_BODY_STYLES = (ssrContext.MY_BODY_STYLES || '') + `--q-color-${color}: ${value};`
  } else {
    setCssVar(color, value)
  }
}


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, ssrContext }) => {
  // const { data = theme } = await app.axios.get('...')
  let themeName = process.env.THEME_NAME || 'alaska'


  if (process.env.SERVER) {
    ssrContext.MY_BODY_STYLES = ""
    // console.log(`ssr hostname is ${ssrContext.req.hostname}`)
    if (hostsToThemes[ssrContext.req.hostname]) {
      themeName = hostsToThemes[ssrContext.req.hostname]
    }
    let defaultSiteTitle = ''
    if (process.env.NODE_ENV === 'production') {
      defaultSiteTitle = 'PropertyWebBuilder'
    } else {
      defaultSiteTitle = `${themeName} | PropertyWebBuilder`
    }
    ssrContext.defaultSiteTitle = defaultSiteTitle
  }
  else {
    if (hostsToThemes[window.location.hostname]) {
      themeName = hostsToThemes[window.location.hostname]
    }
  }

  let currentThemeVariables = themeVariables[themeName] || []
  currentThemeVariables.forEach((tVar) => {
    setBrand(tVar['varName'], tVar['varValue'], ssrContext)
  })
  // setBrand('primary', theme.color1, ssrContext)

})
