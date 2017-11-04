import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/demo',
      name: 'Demo',
      component: () => import('@/pages/Demo')
    },
    {
      path: '/zstyle',
      name: 'Zstyles',
      component: () => import('@/pages/Zstyle')
    }
  ]
});
