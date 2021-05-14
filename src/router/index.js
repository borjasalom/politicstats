import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Topics from '../views/Topics.vue'
import Groups from '../views/Groups.vue'
import Group from '../views/Group.vue'
import About from '../views/About.vue'
import Topic from '../views/Topic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topics',
    name: 'Topics',
    component: Topics
  },
  {
    path: '/topics/:topic',
    name: 'Topic',
    component: Topic
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/groups/:group',
    name: 'Group',
    component: Group
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
