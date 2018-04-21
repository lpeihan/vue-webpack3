<template>
  <div class="v-field">
    <div class="v-field-title">{{title}}</div>
    <input type="text" class="v-field-core"
      :placeholder="placeholder" :disabled="disabled" v-model="value">
    <i class="el-icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus">
  @import "../styles/variables"
  @import "../styles/mixins"
  .v-field
    height: 50px
    position: relative
    display: flex
    align-items: center
    &::after
      content: ''
      absolute: bottom 0 right 0 left 0
      height: 1px
      background: $default-border
      transform: scaleY(.5)
    input
      border: 0
      outline: 0
      height: 36px
      line-height: 36px
      font-size: $font-size-base
      &[disabled]
        background: $white
    &-title
      flex: 0 0 80px
      padding-left: 10px
    &-core
      flex: 1
    .el-icon-arrow-right
      flex: 0 0 30px
      font-size: 24px
      color: $third-color
</style>
