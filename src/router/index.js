import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/como-posso-ajudar',
      name: 'how-can-i-help',
      component: () => import('../views/HowCanIHelpView.vue')
    },
    {
      path: '/serviços',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
  ]
})

export default router
