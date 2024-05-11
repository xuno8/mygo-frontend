import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchResults from "../views/SearchResults.vue"; // 導入 SearchResults 組件

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search-results", // 定義新的路由路徑
    name: "SearchResults",
    component: SearchResults, // 指定對應的組件
  },
  // 可以在這裡添加更多路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
