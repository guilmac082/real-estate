import { hostsToThemes } from 'src/compose/data/hosts-to-themes'
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ({ store, ssrContext }) {
  let themeFrameName = process.env.THEME_NAME
  if (process.env.SERVER) {
    console.log(`ssr hostname is ${ssrContext.req.hostname}`)
    if (hostsToThemes[ssrContext.req.hostname]) {
      themeFrameName = hostsToThemes[ssrContext.req.hostname]
    }
  }
  else {
    if (hostsToThemes[window.location.hostname]) {
      themeFrameName = hostsToThemes[window.location.hostname]
    }
  }

  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  // if (ssrContext && ssrContext.req) {
  //   console.log(`ssr hostname.... is ${ssrContext.req.hostname}`)
  // }
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    // routes,
    // routes: routes(ssrContext),
    routes: routes(themeFrameName),
    // mode: process.env.VUE_ROUTER_MODE,
    // base: process.env.VUE_ROUTER_BASE

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  return Router
})
