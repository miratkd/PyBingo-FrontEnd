import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Card from '../views/Card'
import CreateAccount from '../views/CreateAccount'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/:id',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/create-account/:type',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
