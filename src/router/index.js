import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Orders from '../views/Orders.vue'
import UserDetails from '../views/UserDetails.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/user-details',
    name: 'UserDetails',
    component: UserDetails,
    props:true
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
