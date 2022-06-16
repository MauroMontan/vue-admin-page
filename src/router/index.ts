
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import("../pages/home_page.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;


