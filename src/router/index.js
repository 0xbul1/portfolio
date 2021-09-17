import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudies.vue'),
  },
  {
    path: '/approach',
    name: 'Approach',
    component: () => import('../views/Approach.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app) {
  app.use(router);
}

export default router;