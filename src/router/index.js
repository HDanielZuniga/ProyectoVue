import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import TemaView from "@/views/TemaView.vue";     // Ahora es la vista principal
import InicioView from "@/views/InicioView.vue"; // Ahora es secundaria

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "productos",       // Este es el nombre de ruta para la vista principal
        component: TemaView,
      },
      {
        path: "inicio",
        name: "inicio",
        component: InicioView,
      },
      {
        path: "/:catchAll(.*)",
        redirect: "/",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
