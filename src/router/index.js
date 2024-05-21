import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Donate from '../views/Donate.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/donate', name: 'Donate', component: Donate },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
