import Vue from 'vue';
import App from './app';
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';
import './utils/filters';
import './utils/axios';
import './utils/element-ui';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
