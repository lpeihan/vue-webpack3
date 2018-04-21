<template>
  <div class="v-header">
    <i class="el-icon-arrow-left" v-if="show" @click="$router.go(-1)"></i>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'home'
    },
    show: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="stylus">
  @import "../styles/variables"
  @import "../styles/mixins"

  .v-header
    position: relative
    height: 50px
    color: $white
    font-size: 18px
    text-align: center
    line-height: 50px
    background: $color-primary
    .el-icon-arrow-left
      absolute: top 50% left 0
      transform: translateY(-50%)
      padding: 0 10px
      font-size: 24px
</style>
