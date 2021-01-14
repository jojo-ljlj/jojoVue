import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import LoginRegistration from '../views/LoginRegistration.vue'
import Details from '../views/Details.vue'
import shopCar from '../views/shopCar.vue'
import Lists from '../views/Lists.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  //搜索
  {path:'/search',component:Search},
  // 商品页面
  {path:'/lists',component:Lists},
  //购物车页
  {path:'/shopCar',component:shopCar},
  //详情页
  {path:'/details',component:Details},
  {
    path: '/',
    component: Index
  },
  {
    path:'/logReg',
    component:LoginRegistration
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
