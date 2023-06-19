import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import LRview from '@/views/LoginRegister'
import Players from '../components/players/Players.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/players',
    name: 'Players',
    component:Players
  },
  {
    path: '/auth',
    name: 'Auth',
    component:LRview
  },
  {
    path: '*',
    name: '404',
    component:Home
  },

]

const router = new Router({
  mode: 'history',
  routes
})
export default router

