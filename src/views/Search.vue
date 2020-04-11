<template>
  <v-content>
    <v-row justify="space-between" align="center">
      <v-col cols="3" class="d-flex">
        <Logo
          height="220"
          @logoClick="() => this.$router.push('/')"
          :style="{ cursor: 'pointer' }"
        />
      </v-col>
      <v-col cols="8">
        <SearchBar
          :key="query"
          @submit="searchNewQuery"
          :value="query"
          class="mt-6"
        />
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="3">
        <SideMenu />
      </v-col>
      <v-col cols="8">
        <v-skeleton-loader
          v-if="isLoading"
          v-for="n in 3"
          :key="n"
          min-width="100%"
          type="card"
        ></v-skeleton-loader>
        <RecipeCard
          @ingredientClick="searchNewQuery"
          v-else
          v-for="recipe in recipes"
          :key="recipe.name"
          :recipe="recipe"
          class="mb-10"
        />
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import { mapActions } from 'vuex';

import Logo from '@/components/Logo.vue';
import SideMenu from '@/components/SideMenu/SideMenu.vue';
import SearchBar from '@/components/SearchBar.vue';
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue';

import { RepositoryFactory } from '@/utils/repository/factory';
const Recipes = RepositoryFactory.get('recipes');

export default {
  name: 'Search',
  components: { Logo, SideMenu, SearchBar, RecipeCard },
  data() {
    return {
      isLoading: false,
      recipes: []
    };
  },
  computed: {
    query() {
      return this.$store.state.search.query;
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions('search', ['NEW_QUERY']),
    async fetch() {
      const req = [this.query];
      console.log(req);
      this.isLoading = true;
      const { data } = await Recipes.get(req);
      this.isLoading = false;
      this.recipes = data.recipes;
    },
    searchNewQuery(query) {
      this.NEW_QUERY(query);
      this.fetch();
    }
  }
};
</script>

<style></style>
