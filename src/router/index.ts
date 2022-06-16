import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: '/projects', component: () => import("../pages/projects_page.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;
