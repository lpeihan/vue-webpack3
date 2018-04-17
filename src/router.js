import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/hello-world';
import Todo from './pages/todo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
});
