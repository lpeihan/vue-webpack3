<template>
  <div class="v-cell" @click="$router.push(link)">
    <span class="title">{{title}}</span>
    <i class="el-icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '/'
    }
  }
};
</script>

<style lang="stylus">
  @import "../styles/variables"
  @import "../styles/mixins"

  .v-cell
    position: relative
    height: 50px
    color: $first-color
    font-size: 18px
    line-height: 50px
    &::after
      content: ''
      absolute: bottom 0 right 0 left 0
      height: 1px
      background: $default-border
      transform: scaleY(.5)
    .title
      margin-left: 10px
    .el-icon-arrow-right
      absolute: top 50% right 10px
      transform: translateY(-50%)
      font-size: 24px
      color: $third-color
</style>
