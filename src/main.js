import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';

import './utils/filters';

Vue.prototype.$http = axios;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
