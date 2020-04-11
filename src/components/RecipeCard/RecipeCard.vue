<template>
  <v-sheet color="grey lighten-4" shaped class="recipe-card wrap-box">
    <v-row>
      <v-col cols="8">
        <div class="display-1 mb-4">{{ recipe.name }}</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex
          nulla, eleifend id sapien eu, facilisis condimentum metus. Nullam vel
          libero mollis libero vehicula volutpat. Duis mollis mi vel semper
          convallis. Cras viverra, ex sit amet molestie bibendum, ipsum ipsum
          porttitor justo, at dignissim ante felis id ex. Cras orci ante,
          eleifend sit amet velit eget, interdum dictum sem. Sed placerat arcu
          eu sem rutrum porta. Nulla a porttitor lacus. Sed vehicula nisl eu
          mollis imperdiet. Mauris dapibus dignissim nisi non tincidunt.
        </div>
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>
    <v-row>
      <RecipeCardIngredientChip
        @ingredientClick="handleIngredientClick"
        class="mb-3"
        v-for="ingredient in recipe.ingredients"
        :key="recipe.name + '_' + ingredient.name"
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
  },
};
</script>

<style lang="scss" scoped>
.recipe-card {
  padding: 90px 100px;
}
</style>
