import Repository from '@/utils/repository';

const endpoint = '/ingredients_search/';

export default {
  get(ingredientsArray) {
    return Repository.post(endpoint, { ingredients: ingredientsArray });
  },
};
