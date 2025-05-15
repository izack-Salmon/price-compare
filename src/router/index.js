import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import CompareView from '../views/CompareView.vue'
import AccountView from '../views/AccountView.vue'
import SupportView from '../views/SupportView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/compare',
    name: 'compare',
    component: CompareView,
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView,
  },
  {
    path: '/support',
    name: 'support',
    component: SupportView,
  },
  {
    path: '/product/:name',
    name: 'product',
    component: ProductView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
