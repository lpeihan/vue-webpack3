<template>
  <div class="srcoll-picker">
    <v-header :title="$route.name"></v-header>
    <v-field
      title="学历" placeholder="请输入学历" :disabled="true"
      @click.native="open"
      v-model="pickerValue">
    </v-field>
    <scroll-picker :options="options" v-model="pickerValue" ref="picker"></scroll-picker>
  </div>
</template>

<script>
import VHeader from '../components/v-header';
import VField from '../components/v-field';
import ScrollPicker from '../components/scroll-picker';

export default {
  components: {
    VHeader,
    VField,
    ScrollPicker
  },
  data() {
    return {
      options: ['中专', '高职', '本科', '硕士', '博士', '博士后'],
      pickerValue: ''
    };
  },
  methods: {
    open() {
      this.$refs.picker.open();
    }
  }
};
</script>
