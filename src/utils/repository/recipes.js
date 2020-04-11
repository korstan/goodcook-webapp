import Repository from '@/utils/repository';

const ingredientsEndpoint = '/ingredients_search/';
const mealsEndpoint = '/meals_search/';

export default {
  getByIngredients(ingredientsArray) {
    return Repository.post(ingredientsEndpoint, {
      ingredients: ingredientsArray,
    });
  },
  getByMeal(mealArray) {
    return Repository.post(mealsEndpoint, { meals: mealArray });
  }
};
