// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/About.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'Admin',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/admin/Dashboard.vue'),
      },
      {
        path: 'reports',
        name: 'Reports',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/admin/Reports.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
