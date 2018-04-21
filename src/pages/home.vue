<template>
  <div class="home">
    <v-header :show="false"></v-header>
    <v-cell title="sroll-picker" link="/scroll-picker"></v-cell>
  </div>
</template>

<script>
import ScrollPicker from '../components/scroll-picker';
import VHeader from '../components/v-header';
import VCell from '../components/v-cell';

export default {
  components: {
    ScrollPicker,
    VHeader,
    VCell
  },
  data() {
    return {
      options: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      option: ''
    };
  }
};
</script>

<style lang="stylus">
  .home
    height: 100vh

</style>
