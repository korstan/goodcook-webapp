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
        <SideMenu>
          <v-radio-group @change="onRadioToggle" v-model="radio">
            <SideMenuRadio label="Поиск по ингредиентам" />
            <SideMenuRadio label="Поиск по рецептам" />
          </v-radio-group>
        </SideMenu>
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
        <h1 v-if="!isLoading && !recipes.length" class="text-center m-t-30">
          Не удалось найти рецепты по вашему запросу :c
        </h1>
      </v-col>
      <v-col cols="1"> </v-col>
    </v-row>
  </v-content>
</template>

<script>
import { mapActions } from 'vuex';

import Logo from '@/components/Logo.vue';
import SideMenu from '@/components/SideMenu/SideMenu.vue';
import SideMenuSwitch from '@/components/SideMenu/SideMenuSwitch.vue';
import SideMenuRadio from '@/components/SideMenu/SideMenuRadio.vue';
import SearchBar from '@/components/SearchBar.vue';
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue';

import { RepositoryFactory } from '@/utils/repository/factory';
const Recipes = RepositoryFactory.get('recipes');

const SEARCH_MODES = {
  ingredients: { string: 'ingredients', radio: 0 },
  meals: { string: 'meals', radio: 1 }
};

export default {
  name: 'Search',
  components: {
    Logo,
    SideMenu,
    SideMenuSwitch,
    SideMenuRadio,
    SearchBar,
    RecipeCard
  },
  data() {
    return {
      isLoading: false,
      searchMode: SEARCH_MODES.ingredients.string,
      recipes: [],
      radio: SEARCH_MODES.ingredients.radio //0 - ingredients, 1 - meals
    };
  },
  computed: {
    query() {
      return this.$store.state.search.query;
    }
  },
  created() {
    this.setSearchMode(this.$route.query.mode);
    this.fetch();
  },
  methods: {
    ...mapActions('search', ['NEW_QUERY']),
    async fetch() {
      if (!this.query) {
        console.log('empty query!');
        return;
      }
      const req = [this.query];
      this.isLoading = true;
      let response = {};
      switch (this.searchMode) {
        case SEARCH_MODES.meals.string:
          response = await Recipes.getByMeal(req);
          break;
        case SEARCH_MODES.ingredients.string:
        default:
          response = await Recipes.getByIngredients(req);
          break;
      }
      this.isLoading = false;
      this.recipes = response.data.recipes;
    },
    setSearchMode(mode) {
      console.log('setSearchMode', mode);
      switch (mode) {
        case SEARCH_MODES.meals.string:
          this.radio = SEARCH_MODES.meals.radio;
          this.searchMode = SEARCH_MODES.meals.string;
          break;
        case SEARCH_MODES.ingredients.string:
        default:
          this.radio = SEARCH_MODES.ingredients.radio;
          this.searchMode = SEARCH_MODES.ingredients.string;
          break;
      }
      this.$router.push({ query: { mode: mode } });
    },
    onRadioToggle(radioIndex) {
      switch (radioIndex) {
        case SEARCH_MODES.meals.radio:
          this.setSearchMode(SEARCH_MODES.meals.string);
          break;
        case SEARCH_MODES.ingredients.radio:
        default:
          this.setSearchMode(SEARCH_MODES.ingredients.string);
          break;
      }
    },
    handleIngredientClick(query) {
      console.log('handleIngrClick', query);
      this.setSearchMode(SEARCH_MODES.ingredients.string);
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
