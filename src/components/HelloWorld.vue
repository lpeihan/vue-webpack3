<template>
  <div class="hello-world">
    {{msg}}
  </div>
</template>

<script>
  import store from '../vuex/store';
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    store,
    methods: {
      ...mapMutations([]),
      ...mapActions([])
    },
    computed: {
      ...mapState(['msg']),
      ...mapGetters([])
    }
  };
</script>


<style lang="stylus">
  .hello-world
    color: red
    transform: translate(0, 0)
</style>
