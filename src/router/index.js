import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import PefilView from "@/views/PefilView.vue"; // Conserva el nombre original
import RickView from "@/views/RickView.vue";   // Conserva el nombre original
import TemaView from "@/views/TemaView.vue";   // Conserva el nombre original

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "rick",  // O puedes usar "RickView" si lo prefieres en el 'name'
        component: RickView,
      },
      {
        path: "perfil",
        name: "perfil",
        component: PefilView,
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
