import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/cart'
import Me from '../views/meView'
import Product from '../views/productInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/me',
    name: 'home',
    component: Me
  },
  {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/category.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
