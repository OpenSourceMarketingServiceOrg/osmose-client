import Vue from 'vue';
import './plugins/vuex';
import './plugins/axios';
import { router } from './plugins/vue-router';
import './plugins/vendor';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
store.dispatch('auth/check');

/* eslint-disable no-new */
new Vue({
  el: '#app', // Bind the Vue instance to the HTML.
  router,     // The router
  store,      // The Vuex store.
  /** @param {Function} h Will render the application. */
  render: h => h(App), // h Will create an element.
});
