<template>
  <v-text-field
    solo
    prepend-inner-icon="mdi-magnify"
    color="amber lighten-1"
    background-color="grey lighten-4"
    shaped
    class="searchbar m-t-20"
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

<style lang="scss" scoped>
.searchbar {
  border-radius: 100px;
}
</style>
