<template>
  <v-content>
    <v-row justify="space-between" align="center">
      <v-col cols="3" class="d-flex">
        <Logo
          height="120"
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
          v-for="n in 1"
          :key="n"
          type="card"
          class="mb-10 ml-11"
        ></v-skeleton-loader>
        <RecipeCard
          @ingredientClick="searchNewQuery"
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
import { mapActions } from "vuex";

import Logo from "@/components/Logo.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import SearchBar from "@/components/SearchBar.vue";
import RecipeCard from "@/components/RecipeCard/RecipeCard.vue";

import { RepositoryFactory } from "@/utils/repository/factory";
const Recipes = RepositoryFactory.get("recipes");

export default {
  name: "Search",
  components: { Logo, SideMenu, SearchBar, RecipeCard },
  data() {
    return {
      isLoading: false,
      searchMode: "ingredients",
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
    ...mapActions("search", ["NEW_QUERY"]),
    async fetch() {
      const req = [this.query];
      this.isLoading = true;
      let response = {};
      switch (this.searchMode) {
        case "meals":
          response = await Recipes.getByMeal(req);
          break;
        case "ingredients":
        default:
          response = await Recipes.getByIngredients(req);
          break;
      }
      this.isLoading = false;
      this.recipes = response.data.recipes;
    },
    searchNewQuery(query) {
      this.NEW_QUERY(query);
      this.fetch();
    }
  }
};
</script>

<style></style>
