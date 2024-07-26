import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'
import Reactive from '../views/Reactive.vue'
import AllProfile from '@/components/AllProfile.vue'
import ProfileDetail from '@/components/ProfileDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/items',
      name: 'items',
      component: ItemView
    },

    {
      path: '/reactiveData',
      name: 'reactiveData',
      component: Reactive
    },

    {
      path: '/AllProfile',
      name: 'AllProfile',
      component: AllProfile
    },

    {
      path: '/ProfileDetail/:id',
      name: 'ProfileDetail',
      component: ProfileDetail,
      props: true
    }
  ]
})

export default router
