import { createWebHistory, createRouter } from 'vue-router'
import web from '@/router/web'
import tutorial from '@/router/tutorial'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...web,
    ...tutorial
  ]
})

export default router
