import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PruebaRouter from '@/views/PruebaRouter.vue'

// Definimos las rutas de la aplicación en un array de objetos
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // División de código a nivel de ruta
    // Esto genera un archivo separado (about.[hash].js) para esta ruta
    // que se carga de forma diferida (lazy-loaded) cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/prueba',
    name: 'PruebaRouter',
    component: PruebaRouter
  }
]

// Creamos el enrutador utilizando createRouter
// y definimos que la historia será de tipo Hash (URL con #)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Exportamos el enrutador para poder usarlo en el resto de la aplicación
export default router
