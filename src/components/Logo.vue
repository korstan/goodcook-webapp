<template>
  <v-img
    @click="() => this.$emit('logoClick')"
    :width="width"
    :height="height"
    contain
    src="@/assets/logo.svg"
    alt=""
    srcset=""
  />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    width: {
      type: [Number, String],
      default: 310,
    },
    height: {
      type: [Number, String],
      default: 160,
    },
  },
};
</script>

<style></style>
