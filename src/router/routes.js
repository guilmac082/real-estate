
const routes = [
  {
    path: '/',
    component: () => import(/* @vite-ignore */`/src/layouts/${process.env.THEME_NAME}/MainLayout.vue`),
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
