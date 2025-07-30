const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'exemption', component: () => import('pages/ExemptionPage.vue') },
      { path: 'terms', component: () => import('pages/TermsPage.vue') },
      { path: 'reviews', component: () => import('pages/ReviewsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
