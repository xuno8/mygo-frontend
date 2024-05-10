import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // 可以在這裡添加更多路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
