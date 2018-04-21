import Vue from 'vue';
import Router from 'vue-router';
import ScrollPicker from './pages/scroll-picker';
import Home from './pages/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/scroll-picker',
      name: 'ScrollPicker',
      component: ScrollPicker
    }
  ]
});
