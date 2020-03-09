<template>
  <input class="searchbar" :style="{ fontSize, width }"></input>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    fontSize: {
      type: [String],
      default: '16pt',
    },
    width: {
      type: [String],
      default: '100%',
    },
  },
};
</script>

<style lang="scss">
.searchbar {
  padding: 10px 0;
  text-indent: 2em;
  font-size: 16pt;
  background: $wrap-back-color;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
}
</style>
