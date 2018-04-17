<template>
  <form name="todoForm" @submit.prevent="addTodo()">
    <div class="input-group">
      <input type="text" class="form-control" name="content" v-model="todo">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="submit">新增</button>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: ''
    };
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.todo);
    }
  }
};
</script>
