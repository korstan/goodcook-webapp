<template>
  <v-sheet color="grey lighten-4" shaped class="recipe-card wrap-box">
    <v-row class="mb-4">
      <v-col cols="8">
        <div class="display-1 mb-4 pl-0">{{ recipe.name }}</div>
        <div>
          1. Возьмите {{ recipe.ingredients.map(item=>item.name.toLowerCase()).join(', ') }}. <br>
          2. Приготовьте <br>
          3. Съешьте <br>
        </div>
      </v-col>
      <v-col cols="2"> </v-col>
    </v-row>
    <v-row>
      <RecipeCardIngredientChip
        @ingredientClick="handleIngredientClick"
        class="mb-3"
        v-for="(ingredient, i) in recipe.ingredients"
        :key="recipe.name + '_' + ingredient.name + '_' + i"
        :ingredient="ingredient"
      />
    </v-row>
  </v-sheet>
</template>

<script>
import RecipeCardIngredientChip from '@/components/RecipeCard/RecipeCardIngredientChip';

export default {
  name: 'RecipeCard',
  components: { RecipeCardIngredientChip },
  props: {
    recipe: {
      type: [Object],
      default: function() {
        return {
          name: 'Американские блины',
          ingredients: [
            {
              name: 'Гашеная сода',
              amount: '1.0',
              measure: 'чайная ложка'
            },
            {
              name: 'Пшеничная мука',
              amount: '2.0',
              measure: 'стакана'
            },
            {
              name: 'Молоко',
              amount: '2.0',
              measure: 'стакана'
            },
            {
              name: 'Сахар',
              amount: '3.0',
              measure: 'столовые ложки'
            },
            {
              name: 'Соль',
              amount: '1.0',
              measure: 'чайная ложка'
            },
            {
              name: 'Яйцо куриное',
              amount: '2.0',
              measure: 'штуки'
            }
          ]
        };
      }
    }
  },
  methods: {
    handleIngredientClick(ingredientName) {
      this.$emit('ingredientClick', ingredientName);
    }
  }
};
</script>

<style lang="scss" scoped>
.recipe-card {
  padding: 90px 100px 90px 100px;
}
</style>
