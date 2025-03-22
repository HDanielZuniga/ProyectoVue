import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import PruebaView from '../views/PruebaView.vue'
import PruebaRouter from '../views/PruebaRouter.vue'
import DanielPrueba from '../views/DanielPrueba.vue'
import ClaseAlternativa from '../views/ClaseAlternativa.vue'
import TrumpComponent from '../views/TrumpComponent'
import CelularDaniel from '../views/CelularDaniel.vue'

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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/prueba',
    name: 'Prueba',
    component: PruebaView
  },
  {
    path: '/dante',
    name: 'Zuniga',
    component: PruebaRouter
  },
  {
    path: '/daniel',
    name: 'Bases',
    component: DanielPrueba
  },
  {
    path: '/juan',
    name: 'casa',
    component: ClaseAlternativa
  },
  {
    path: '/trump',
    name: 'trump',
    component: TrumpComponent
  },
  {
    path: '/celular',
    name: 'cel',
    component: CelularDaniel
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
