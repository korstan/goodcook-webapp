<template>
  <v-img
    :width="width"
    :height="height"
    contain
    src="@/assets/logo.png"
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
    },
    height: {
      type: [Number, String],
    },
  },
};
</script>

<style></style>
