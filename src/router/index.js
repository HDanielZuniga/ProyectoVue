import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import TemaView from "@/views/TemaView.vue";   
import InicioView from "@/views/InicioView.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "inicio",  
        component: InicioView,
      },
      {
        path: "tema",
        name: "tema",
        component: TemaView,
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
