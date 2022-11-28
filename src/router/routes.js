// const allColorSchemes = require('./src/compose/data/all-color-schemes.json')
// import allColorSchemes from 'src/compose/data/all-color-schemes.json' // assert {type: 'json'}
import { hostsToThemes } from 'src/compose/data/hosts-to-themes'

// import { Platform } from 'quasar'
// const platform = process.env.SERVER ? Platform.parseSSR(ssrContext) : Platform

// const routes = []
// https://forum.quasar-framework.org/topic/5462/solved-how-to-dynamically-change-layout-in-router-base-on-platform/6
// Inspiration for below came from above
const routes = (ssrContext) => {
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
  return [
    {
      path: '/',
      component: () => import(/* @vite-ignore */`/src/layouts/${themeFrameName}/MainLayout.vue`),
      children: [
        { path: '', component: () => import('pages/LandingPage.vue') },
        // { path: 'landing', component: () => import('pages/LandingPage.vue') }
      ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/ErrorNotFound.vue')
    }
  ]
}

export default routes
