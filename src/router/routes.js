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
        {
          path: '',
          name: 'rLanding',
          component: () => import('pages/LandingPage.vue')
        },
        // { path: 'landing', component: () => import('pages/LandingPage.vue') }
        {
          path: '/:publicLocale',
          name: 'rLocaleHome',
          // component: () => import('pages/LandingPage.vue'),
          component: () => import("pages/EmptyContainer.vue"),
          children: [
            {
              path: '',
              name: 'rLocaleHomePage',
              component: () => import('pages/LandingPage.vue')
              // component: () => import('pages/llm/HomePage.vue')
            },
            // {
            //   path: 'about-us',
            //   name: 'rLocaleAboutUsPage',
            //   component: () => import('pages/llm/AboutUsPage.vue')
            // },
            // {
            //   path: 'contact-us',
            //   name: 'rContactUs',
            //   component: () => import('pages/llm/ContactUsPage.vue')
            // },
            // {
            //   path: 'sell',
            //   name: 'rSellPage',
            //   component: () => import('pages/llm/SellPage.vue')
            // },
          ]
        }
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
