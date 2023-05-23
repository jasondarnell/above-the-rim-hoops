import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TrainingView from '../views/TrainingView.vue'
import CampsView from '../views/CampsView.vue'
import MerchandiseView from '../views/MerchandiseView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/training',
    name: 'training',
    component: TrainingView
  },
  {
    path: '/camps',
    name: 'camps',
    component: CampsView
  },
  {
    path: '/merchandise',
    name: 'merchandise',
    component: MerchandiseView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router