import Vue from 'vue'
import VueRouter from 'vue-router'
import Today from '../components/Today.vue'
import inbox from '../components/inbox.vue'
// import Next7day from '../components/Next7day.vue'
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
  // {
  //   path : '/next7days',
  //   name : 'next7days',
  //   component: Next7day
    
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
