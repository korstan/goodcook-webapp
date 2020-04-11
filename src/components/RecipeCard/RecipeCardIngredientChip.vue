<template>
  <v-chip
    @click="() => this.$emit('ingredientClick', ingredient.name)"
    :style="{ cursor: 'pointer' }"
    class="mr-4"
    :color="getRandomColor()"
  >
    {{ ingredient.name }} - {{ ingredient.measure }}
  </v-chip>
</template>

<script>
const colors = ['yellow', 'green', 'purple', 'red', 'blue', 'teal', 'orange'];

export default {
  name: 'RecipeCardIngredientChip',
  props: {
    ingredient: {
      type: [Object],
      default: function() {
        return { name: '', measure: '' };
      }
    }
  },
  methods: {
    getRandomColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `${randomColor} lighten-4`;
    }
  }
};
</script>

<style></style>
