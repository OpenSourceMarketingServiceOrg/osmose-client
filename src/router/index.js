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
      path: '/docs/about',
      name: 'Docs-About',
      component: () => import('@/pages/Docs/About')
    },
    {
      path: '/docs/getting-started',
      name: 'Docs-GettingStarted',
      component: () => import('@/pages/Docs/GettingStarted')
    },
    {
      path: '/docs/tools',
      name: 'Docs-Tools',
      component: () => import('@/pages/Docs/Tools')
    },
    {
      path: '/email',
      name: 'Email',
      component: () => import('@/pages/Email')
    }
  ]
});
