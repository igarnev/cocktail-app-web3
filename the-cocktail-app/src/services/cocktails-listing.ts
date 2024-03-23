import { get } from 'utils/httpService';

export const fetchCocktailsBySearch = (search: string) =>
  get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);

export const fetchCocktailsByCategory = (category: string) =>
  get(`https:/www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
