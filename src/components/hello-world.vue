<template>
  <div class="hello">
    <div class="item"></div>
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
  .hello
    width: 300px
    height: 300px
    display: flex
    background: lightblue
    .item
      width: 100px
      height: 100px
      background: green
      margin: auto
</style>