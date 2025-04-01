import { createRouter, createWebHistory } from 'vue-router'
import PerfilView from '@/views/PefilView.vue'
import TemaView from '@/views/TemaView.vue'
import RickView from '@/views/RickView.vue'
import VistaRouter from '@/views/VistaRouter.vue'
import LoginView from '@/views/LoginView.vue'
import UsersView from '@/views/UsersView.vue'
import PrototipoView from '@/views/PrototipoView.vue'

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
  },
  {
    path: '/usuarios',
    name: 'user',
    component: UsersView
  },
  {
    path: '/prototipe',
    name: 'proto',
    component: PrototipoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
