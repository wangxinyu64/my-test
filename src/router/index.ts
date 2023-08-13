import { createRouter, createWebHistory } from 'vue-router'
const routerhistory = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'Login',
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/login/login.vue'),
    meta: { title: '登录' }
  }
]
const router = createRouter({
  history: routerhistory,
  routes
})

export default router