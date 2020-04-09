<template>
  <v-app>
    <v-content>
      <div id="app">
        <div class="page-wrapper">
          <v-scroll-y-reverse-transition leave-absolute>
            <router-view />
          </v-scroll-y-reverse-transition>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: { Header },
  computed: {
    isHeaderVisible() {
      return this.$store.state.ui.isHeaderVisible;
    }
  },
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
