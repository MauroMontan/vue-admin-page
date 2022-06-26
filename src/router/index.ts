import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home_page.vue';
import Projects from '../pages/projects_page.vue';
import Login from '../pages/login_page.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/signin', component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
