export const mapCocktailForCard = (cocktail: any) => ({
  idDrink: cocktail.idDrink,
  name: cocktail.strDrink,
  description: cocktail.strInstructions ?? '',
  imageUrl: cocktail.strDrinkThumb,
});
