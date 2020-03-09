<template>
  <input class="searchbar" :style="{ fontSize, height, width }"></input>
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
  padding: 10px 0;
  text-indent: 2em;
  font-size: 16pt;
  border: none;
  background: $wrap-back-color;
  box-shadow: $searchbar-box-shadow;
  border-radius: 100px;
}
</style>
