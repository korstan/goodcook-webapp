<template>
  <v-content>
    <v-btn @click="() => this.$router.push('/')" fab color="#ffc90d">
      <v-icon>mdi-undo</v-icon>
    </v-btn>
    <div class="home d-flex flex-column align-center">
      <Logo class="mb-5" />
      <SearchBar
        :placeholder="placeholder"
        width="60%"
        @submit="onSearchSubmit"
      />
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
  data() {
    return {
      placeholder: '',
    };
  },
  created() {
    this.placeholder =
      this.$route.query.mode === 'meals'
        ? 'Поиск по рецептам'
        : 'Поиск по ингредиентам';
  },
  methods: {
    ...mapActions('search', ['NEW_QUERY']),
    onSearchSubmit: function(queryArray) {
      this.$router.push(
        `/search_results?mode=${this.$route.query.mode || 'ingredients'}`
      );
      this.NEW_QUERY(queryArray);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 150px;
}
</style>
