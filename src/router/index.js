import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Terms from '../views/footer/Terms.vue'
import Privacy from '../views/footer/Privacy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
