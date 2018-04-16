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
  computed: {
    ...mapState(['msg']),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
    async getHello() {
      try {
        return await this.$http.get('api/v1/hello');
      } catch (e) {
        console.error(e);
      }
    }
  },
  mounted() {
    this.getHello();
  }
};
</script>


<style lang="stylus">
  .hello-world
    color: red
    transform: translate(0, 0)
</style>
