import RecipesRepository from '@/utils/repository/recipes';

const repositories = {
  recipes: RecipesRepository,
};

export const RepositoryFactory = {
  get: name => repositories[name],
};
