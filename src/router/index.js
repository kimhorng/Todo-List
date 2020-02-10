import Vue from 'vue'
import VueRouter from 'vue-router'
import Today from '../components/Today.vue'
import inbox from '../components/inbox.vue'
import Notification from '../components/Notification.vue'
import Next7days from '../components/Next7days.vue'
import Project from '../components/Project.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/today',
    name: 'today',
    component: Today
  },
  {
    path : '/inbox',
    name : 'inbox',
    component: inbox
    
  },
  {
    path : '/next7days',
    name : 'next7days',
    component: Next7days
    
  },

  {
    path: '/Notification',
    name: 'Notification',
    component: Notification,
  },
  
  {
    path: '/project',
    name: 'project',
    component: Project,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
