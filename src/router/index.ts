import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'
import Reactive from '../views/Reactive.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserDetail from '@/components/UserDetail.vue'

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
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile
    },

    {
      path: '/UserProfile/:id',
      name: 'UserDetail',
      component: UserDetail,
      props: true
    }
  ]
})

export default router
