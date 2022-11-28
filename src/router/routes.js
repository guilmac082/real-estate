// const allColorSchemes = require('./src/compose/data/all-color-schemes.json')
// import allColorSchemes from 'src/compose/data/all-color-schemes.json' // assert {type: 'json'}
import { hostsToThemes } from 'src/compose/data/hosts-to-themes'

let themeFrameName = process.env.THEME_NAME
if (process.env.SERVER) {
  // console.log(`ssr hostname is ${ssrContext.req.hostname}`)
  // if (hostsToThemes[window.location.hostname]) {
  //   themeFrameName = hostsToThemes[window.location.hostname]
  // }
}
else {
  if (hostsToThemes[window.location.hostname]) {
    themeFrameName = hostsToThemes[window.location.hostname]
  }
}
const routes = [
  {
    path: '/',
    component: () => import(/* @vite-ignore */`/src/layouts/${themeFrameName}/MainLayout.vue`),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'landing', component: () => import('pages/LandingPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
