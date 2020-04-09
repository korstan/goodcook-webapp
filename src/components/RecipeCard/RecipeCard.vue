<template>
  <v-card shaped class="recipe-card">
    <v-card-title>{{ this.title }}</v-card-title>
    <v-card-text v-for="ingredient in ingredients" :key="ingredient.name">
      {{ ingredient.name }} - {{ ingredient.amount }} {{ ingredient.measure }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RecipeCard',
  data() {
    return {
      title: 'Американские блины',
      ingredients: [
        {
          name: 'Гашеная сода',
          amount: '1.0',
          measure: 'чайная ложка',
        },
        {
          name: 'Пшеничная мука',
          amount: '2.0',
          measure: 'стакана',
        },
        {
          name: 'Молоко',
          amount: '2.0',
          measure: 'стакана',
        },
        {
          name: 'Сахар',
          amount: '3.0',
          measure: 'столовые ложки',
        },
        {
          name: 'Соль',
          amount: '1.0',
          measure: 'чайная ложка',
        },
        {
          name: 'Яйцо куриное',
          amount: '2.0',
          measure: 'штуки',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recipe-card {
  border-radius: 100px;
}
</style>
