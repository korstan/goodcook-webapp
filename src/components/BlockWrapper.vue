<template>
  <div class="block-wrapper" :style="{ height, width }"></div>
</template>

<script>
export default {
  name: 'BlockWrapper',
  props: {
    height: {
      type: [String],
      default: '100%',
    },
    width: {
      type: [String],
      default: '100%',
    },
  },
};
</script>

<style lang="scss" scoped>
.block-wrapper {
  background: $wrap-back-color;
  box-shadow: $wrap-box-shadow;
}
</style>
