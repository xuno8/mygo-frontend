import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchResults from "../views/SearchResults.vue"; // 導入 SearchResults 組件
import ImageViewer from "../views/ImageViewer.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search-results",
    name: "SearchResults",
    component: SearchResults,
  },
  {
    path: "/image/:id",
    name: "ImageViewer",
    component: ImageViewer,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
