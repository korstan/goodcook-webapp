<template>
  <div class="d-flex">
    <div>
      <SideMenu />
    </div>
    <div>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu/SideMenu.vue';
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  components: { SideMenu, RecipeCard },
  mounted() {
    this.SHOW_HEADER();
  },
  methods: {
    ...mapActions('ui', ['SHOW_HEADER']),
  },
};
</script>

<style></style>
