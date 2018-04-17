<template>
  <li class="list-group-item">
    <div>
      {{todo.content}}
      <button class="btn btn-default btn-xs pull-right" @click="removeTodo">&times;</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    removeTodo() {
      this.$emit('removeTodo', this.todo);
    }
  }
};
</script>
