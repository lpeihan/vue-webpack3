<template>
  <div class="container">
    <div class="panel panel-default">
      <ul class="list-group">
        <todo-item v-for="(todo, i) in todos" :key="i" :todo="todo" @removeTodo="removeTodo"></todo-item>
      </ul>
      <div class="panel-body">
        <todo-new @addTodo="addTodo"></todo-new>
      </div>
    </div>
  </div>
</template>

<script>
import TodoNew from './todo-new';
import TodoItem from './todo-item';

export default {
  data() {
    return {
      todos: [
        {
          content: 'hello world'
        },
        {
          content: 'Vue'
        }
      ]
    };
  },
  components: {
    TodoNew,
    TodoItem
  },
  methods: {
    addTodo(todo) {
      this.todos.push({ content: todo });
    },
    removeTodo(todo) {}
  }
};
</script>

<style lang="stylus">
  .container
    margin-top: 20px
</style>
