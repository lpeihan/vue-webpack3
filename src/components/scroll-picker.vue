<template>
  <div class="scroll-picker" @touchmove="$event.preventDefault()">
    <transition name="popup">
      <div class="content" v-if="show">
        <div class="header">
          <div class="cancel" @click="back">取消</div>
          <div class="confirm" @click="confirm">确定</div>
        </div>
        <div class="main">
          <ul
            @touchstart="handleTouchstart($event)"
            @touchmove="handleTouchmove($event)"
            @touchend="handleTouchend($event)"
            :style="{ 'transform' : 'translate3d(0,' + translateY + 'px, 0)' }"
            :class="{ 'dragging': dragging }">
            <li></li>
            <li></li>
            <li></li>
            <li
              @click="selectOption(index)"
              v-for="(option, index) in options" :key="index"
              :class="{
                'node-current': option == currentValue,
                'node-one': Math.abs(index - currentIndex) == 1,
                'node-two': Math.abs(index - currentIndex) == 2,
                'node-three': Math.abs(index - currentIndex) >= 3
              }">{{option}}
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="selected-box"></div>
        </div>
      </div>
    </transition>
    <transition name="overlay">
      <div class="overlay" v-if="show" @click="back"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: [ String, Number ],
    options: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      show: false,
      currentValue: this.value,
      currentIndex: 0,
      dragging: false,
      startY: 0,
      distanceY: 0,
      translateY: 0,
      startTranslateY: 0,
      height: 44
    };
  },
  methods: {
    open() {
      // 为了按安卓或浏览器的返回键不会返回到上一个页面
      history.pushState({ page: 'scroll-picker' }, 'scroll-picker', `${window.location.href}#`);
      this.show = true;
    },
    back() {
      history.go(-1);
    },
    close() {
      this.show = false;
    },
    confirm() {
      this.$emit('input', this.currentValue);
      this.back();
    },
    initOption() {
      let currentIndex = this.options.findIndex((option) => {
        return this.currentValue === option;
      });
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      this.translateY = -this.height * currentIndex;
      this.currentIndex = currentIndex;
      this.currentValue = this.options[currentIndex];
    },
    setOption() {
      const total = this.options.length;
      let page = Math.round((this.translateY / this.height).toFixed(1));

      page = page > 0 ? 0 : page;
      page = total - 1 >= Math.abs(page) ? page : -(total - 1);

      const index = Math.abs(page);
      this.currentIndex = index;
      this.currentValue = this.options[index];
      this.translateY = page * this.height;
    },
    selectOption(index) {
      this.currentIndex = index;
      this.currentValue = this.options[index];
      this.translateY = -this.height * index;
    },
    getPageY(e) {
      return e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
    },
    handleTouchstart(e) {
      this.distanceY = 0;
      this.startY = this.getPageY(e);
      this.startTranslateY = this.translateY;
      this.dragging = true;
    },
    handleTouchmove(e) {
      this.distanceY = this.getPageY(e) - this.startY;
      this.translateY = this.startTranslateY + this.distanceY;
    },
    handleTouchend() {
      this.dragging = false;
      this.setOption();
    }
  },
  mounted() {
    addEventListener('popstate', this.close);

    this.initOption();
  },
  beforeDestroy: function() {
    removeEventListener('popstate', this.close);
  }
};
</script>

<style lang="stylus">
  @import "../styles/mixins"
  @import "../styles/variables"

  $height = 44px
  $ul-height = $height * 7
  $selected-box = $height * 4

  .scroll-picker
    .content
      fixed: bottom 0 left 0 right 0
      z-index: 10
      font-size: $font-size-large
      text-align: center
      background: $white
      &.popup
        &-enter-active
        &-leave-active
          transition: all .3s
        &-enter
        &-leave-to
          transform: translateY(100%)
      .header
        display: flex
        justify-content: space-between
        line-height: $height
        color: $white
        background: $color-primary
        .cancel
        .confirm
          padding: 0 20px
      .main
        height: $ul-height
        overflow: hidden
        .selected-box
          absolute: top $selected-box
          z-index: -1
          size: 100% $height
          background: #F7F9FB
        ul
          transition: all .3s ease
          &.dragging
            transition: none
          li
            height: $height
            line-height: $height
            &.node-current
              color: $color-primary
            &.node-one
              opacity: .7
            &.node-two
              opacity: .5
            &.node-three
              opacity: .3

    .overlay
      fixed: top 0 left 0 right 0 bottom 0
      z-index: 9
      background: rgba(0, 0, 0, 0.5)
      &.overlay
        &-enter-active
        &-leave-active
          transition: all .3s
        &-enter
        &-leave-to
          opacity: 0
</style>
