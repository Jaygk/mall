import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCar = () => import('views/cart/ShopCar')
const Profile = () => import('views/profile/Profile')
const Details = () => import('views/details/Details')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showGuide: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showGuide: true
    }
  },
  {
    path: '/shopCar',
    component: ShopCar,
    meta: {
      showGuide: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showGuide: true
    }
  },
  {
    path: '/details/:id',
    component: Details,
    meta: {
      showGuide: false
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
