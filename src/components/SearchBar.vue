<template>
  <v-text-field
    solo
    shaped
    class="m-t-20"
    :style="{ fontSize, height, width }"
  ></v-text-field>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    fontSize: {
      type: [String],
      default: '16pt',
    },
    height: {
      type: [String],
      default: '1em',
    },
    width: {
      type: [String],
      default: '100%',
    },
  },
};
</script>

<style lang="scss" scoped></style>
