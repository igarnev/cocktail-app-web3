export const convertResultToObject = (result: any) => {
  const [name, imageUrl, category, alcoholPercentage, cocktailType, price, totalRatings, numberOfRatings] = result;
  return {
    name,
    imageUrl,
    category,
    alcoholPercentage: Number(alcoholPercentage),
    cocktailType,
    price: Number(price),
    totalRatings: Number(totalRatings),
    numberOfRatings: Number(numberOfRatings),
    idDrink: `${name}-${category}`,
    description: 'Placeholder for cocktail description, since such an info does not exist.',
  };
};
