/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/Home/Home'),
    meta: {
      auth: true,  // required authentication
    },
  },
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/pages/Account/Account'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Account/Login'),
    meta: {
      guest: true, // user must be guest to view
    },
  },
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Account/Register'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/email',
    name: 'email.index',
    component: () => import('@/pages/Email/Email'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/documentation',
    name: 'docs.index',
    component: () => import('@/pages/Docs/Docs'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/demos',
    name: 'demos.index',
    component: () => import('@/pages/Demos/Demos'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/home',
  },
];
