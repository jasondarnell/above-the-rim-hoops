import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TrainingView from '../views/TrainingView.vue'
import SummerGroupsView from '../views/SummerGroupsView.vue'
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
    path: '/summer-groups',
    name: 'summer-groups',
    component: SummerGroupsView
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

const base = window.location.href.includes("github") ? "/above-the-rim-hoops/" : "/";
const router = createRouter({
  history: createWebHashHistory(base),
  base: base,
  routes
})

export default router
