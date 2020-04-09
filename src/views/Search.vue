<template>
  <div>
    <h1>Search results!</h1>
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
    <RecipeCard />
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  components: { RecipeCard },
  mounted() {
    this.SHOW_HEADER();
  },
  methods: {
    ...mapActions('ui', ['SHOW_HEADER']),
  },
};
</script>

<style></style>
