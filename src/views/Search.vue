<template>
  <h1>Search results!</h1>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Search',
  mounted() {
    this.SHOW_HEADER();
  },
  methods: {
    ...mapActions('ui', ['SHOW_HEADER']),
  },
};
</script>

<style></style>
