import { useQuery } from '@tanstack/react-query';

import { get } from 'utils/httpService';

import { mapCocktailForCard } from 'services/mappers/cocktails';

import CocktailCard from 'components/CocktailCard/CocktailCard';

export const CocktailsListing = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['cocktails'],
    queryFn: () => get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="cocktails-listing-container">
      {' '}
      {data?.drinks.map((cocktail: any) => (
        <CocktailCard key={cocktail.idDrink} cocktail={mapCocktailForCard(cocktail)} />
      ))}
    </div>
  );
};
