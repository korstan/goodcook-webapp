<template>
  <v-content>
    <v-row justify="space-between" align="center" class="mb-6">
      <v-col cols="3" class="d-flex">
        <Logo
          height="110"
          @logoClick="() => this.$router.push('/')"
          :style="{ cursor: 'pointer' }"
        />
      </v-col>
      <v-col cols="8">
        <SearchBar
          :key="query"
          @submit="searchNewQuery"
          :value="query"
          class="mt-6 ml-11"
        />
      </v-col>
      <v-col cols="1"> </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="3">
        <SideMenu />
      </v-col>
      <v-col cols="8">
        <v-skeleton-loader
          v-if="isLoading"
          type="card"
          class="mb-10 ml-11"
        ></v-skeleton-loader>
        <v-skeleton-loader
          v-if="isLoading"
          type="card"
          class="mb-10 ml-11"
        ></v-skeleton-loader>
        <v-skeleton-loader
          v-if="isLoading"
          type="card"
          class="mb-10 ml-11"
        ></v-skeleton-loader>
        <RecipeCard
          @ingredientClick="handleIngredientClick"
          v-else
          v-for="recipe in recipes"
          :key="recipe.name"
          :recipe="recipe"
          class="mb-10 ml-11"
        />
      </v-col>
      <v-col cols="1"> </v-col>
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

const SEARCH_MODES = { ingredients: 'ingredients', meals: 'meals' };

export default {
  name: 'Search',
  components: { Logo, SideMenu, SearchBar, RecipeCard },
  data() {
    return {
      isLoading: false,
      searchMode: 'ingredients',
      recipes: []
    };
  },
  computed: {
    query() {
      return this.$store.state.search.query;
    }
  },
  created() {
    this.searchMode = this.$route.query.mode;
    this.fetch();
  },
  methods: {
    ...mapActions('search', ['NEW_QUERY']),
    async fetch() {
      const req = [this.query];
      this.isLoading = true;
      let response = {};
      switch (this.searchMode) {
        case SEARCH_MODES.meals:
          response = await Recipes.getByMeal(req);
          break;
        case SEARCH_MODES.ingredients:
        default:
          response = await Recipes.getByIngredients(req);
          break;
      }
      this.isLoading = false;
      this.recipes = response.data.recipes;
    },
    setSearchMode(mode) {
      console.log('setSearchMode', mode);
      this.searchMode = mode;
      this.$router.push({ query: { mode: mode } });
    },
    handleIngredientClick(query) {
      console.log('handleIngrClick', query);
      this.setSearchMode(SEARCH_MODES.ingredients);
      this.searchNewQuery(query);
    },
    searchNewQuery(query) {
      this.NEW_QUERY(query);
      this.fetch();
    }
  }
};
</script>

<style></style>
