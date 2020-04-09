<template>
  <v-content>
    <v-row justify="space-between" align="center">
      <v-col cols="3">
        <Logo />
      </v-col>
      <v-col cols="8">
        <SearchBar :value="query" class="mt-6" />
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="3">
        <SideMenu />
      </v-col>
      <v-col cols="8">
        <RecipeCard class="mb-10" />
        <RecipeCard class="mb-10" />
        <RecipeCard class="mb-10" />
        <RecipeCard class="mb-10" />
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Logo from '@/components/Logo.vue';
import SideMenu from '@/components/SideMenu/SideMenu.vue';
import SearchBar from '@/components/SearchBar.vue';
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  components: { Logo, SideMenu, SearchBar, RecipeCard },
  mounted() {
    this.SHOW_HEADER();
  },
  methods: {
    ...mapActions('ui', ['SHOW_HEADER']),
  },
  computed: {
    query() {
      return this.$store.state.search.query;
    },
  },
};
</script>

<style></style>
