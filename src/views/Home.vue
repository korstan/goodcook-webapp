<template>
  <v-container class="home">
    <Logo />
    <SearchBar width="50%" @submit="onSearchSubmit" />
  </v-container>
</template>

<script>
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: { Logo, SearchBar },
  mounted() {
    this.HIDE_HEADER();
  },
  methods: {
    ...mapActions('ui', ['SHOW_HEADER', 'HIDE_HEADER', 'TOGGLE_HEADER']),
    ...mapActions('search', ['NEW_QUERY']),
    onSearchSubmit: function(query) {
      this.$router.push('/search');
      this.NEW_QUERY(query);
      this.SHOW_HEADER();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
