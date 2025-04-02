import { createRouter, createWebHistory } from 'vue-router'
import PerfilView from '@/views/PefilView.vue'
import TemaView from '@/views/TemaView.vue'
import RickView from '@/views/RickView.vue'

const routes = [
  {
    path: '/',
    name: 'rick',
    component: RickView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView
  },
  {
    path: '/tema',
    name: 'tema',
    component: TemaView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
