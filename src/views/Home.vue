<template>
  <v-content>
    <div class="home d-flex flex-column align-center">
      <Logo class="mb-5" />
      <SearchBar width="60%" @submit="onSearchSubmit" />
    </div>
  </v-content>
</template>

<script>
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: { Logo, SearchBar },
  methods: {
    ...mapActions('search', ['NEW_QUERY']),
    onSearchSubmit: function(query) {
      this.$router.push(`/search_results?mode=${this.$route.query.mode}`);
      this.NEW_QUERY(query);
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 150px;
}
</style>
