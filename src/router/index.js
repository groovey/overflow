import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Countact',
      component: Contact
    }
  ]
})

export default router
