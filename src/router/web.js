import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'
import About from '@/pages/About.vue'
import Test from '@/pages/Test.vue'

export default [
  {
    path: '/',
    name: 'root',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/test',
    name: 'test',
    component: Test
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
