import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Themes from '../views/Themes.vue'
import Groups from '../views/Groups.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/themes',
    name: 'Theme',
    component: Themes
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
