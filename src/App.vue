<template>
  <div id="app">
    <div class="page-wrapper"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
}

.page-wrapper {
  margin: 50px $page-margin-h;
  background-color: white;
}
</style>
