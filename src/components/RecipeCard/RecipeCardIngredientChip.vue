<template>
  <v-chip class="mr-4" :color="getRandomColor()">
    <slot />
  </v-chip>
</template>

<script>
const colors = ['yellow', 'green', 'purple', 'red', 'blue', 'teal', 'orange'];

export default {
  name: 'RecipeCardIngredientChip',
  methods: {
    getRandomColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `${randomColor} lighten-4`;
    }
  }
};
</script>

<style></style>
