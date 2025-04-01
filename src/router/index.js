import { createRouter, createWebHistory } from 'vue-router'
import PerfilView from '@/views/PefilView.vue'
import TemaView from '@/views/TemaView.vue'
import RickView from '@/views/RickView.vue'
import VistaRouter from '@/views/VistaRouter.vue'
import LoginView from '@/views/LoginView.vue'

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
  },
  {
    path: '/vista',
    name: 'Vista',
    component: VistaRouter
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
