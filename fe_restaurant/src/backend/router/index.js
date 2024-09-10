import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/DashboardView.vue';
import MenuView from '../views/MenuView.vue';
import PembelianView from '../views/PembelianView.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/menu', component: MenuView },
  { path: '/pembelian', component: PembelianView },
  // Tambahkan route lain untuk backend
];

const router = createRouter({
  history: createWebHistory('/admin'),
  routes,
  strict: true,
});

export default router;
