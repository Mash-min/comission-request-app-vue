import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Profile from '@/views/Profile'
import Requests from '@/views/Requests'
import RequestAdd from '@/views/RequestAdd'
import RequestView from '@/views/RequestView'
import Offers from '@/views/Offers'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Notifications from '@/views/Notifications'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      guest: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      auth: true
    }
  },
  {
    path: '/requests',
    name: 'Requests',
    component: Requests,
    meta: {
      auth: true
    }
  },
  {
    path: '/requests/add',
    name: 'RequestAdd',
    component: RequestAdd,
    meta: {
      auth: true
    }
  },
  {
    path: '/requests/:slug',
    name: 'RequestView',
    component: RequestView,
    meta: {
      auth: true
    }
  },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    meta: {
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.guest == true)) {
    if(localStorage.getItem('token') != null) {
      router.push({ path: '/home' })
    } 
  }

  if(to.matched.some(record => record.meta.auth == true)) {
    store.dispatch(...['getUser'])
    if(localStorage.getItem('token') == null) {
      router.push({ path: '/login' })
    }
  }

  next()

})

export default router
