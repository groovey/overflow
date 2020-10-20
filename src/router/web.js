import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'

export default [
  {
    path: '/',
    name: 'root',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
