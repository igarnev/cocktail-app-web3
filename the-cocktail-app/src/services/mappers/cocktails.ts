export const mapCocktailForCard = (cocktail: any) => ({
  name: cocktail.strDrink,
  description: cocktail.strInstructions,
  imageUrl: cocktail.strDrinkThumb,
});
