import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Tutorials from '@/views/tutorials/Index.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Countact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: Tutorials
  }
]
