<template>
  <v-fade-transition>
    <v-app-bar app>
      <v-toolbar-title><Logo height="70"/></v-toolbar-title>
      <SearchBar :value="query" background-color="white" width="50%" />
    </v-app-bar>
  </v-fade-transition>
</template>

<script>
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'Header',
  components: { Logo, SearchBar },
  computed: {
    query() {
      return this.$store.state.search.query;
    },
  },
};
</script>

<style></style>
