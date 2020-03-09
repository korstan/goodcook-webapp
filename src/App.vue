<template>
  <div id="app">
    <Header />
    <div class="page-wrapper"><router-view /></div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: { Header },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: whitesmoke;
}

.page-wrapper {
  margin: 50px $page-margin-h;
  height: 8000px;
  background-color: white;
}
</style>
