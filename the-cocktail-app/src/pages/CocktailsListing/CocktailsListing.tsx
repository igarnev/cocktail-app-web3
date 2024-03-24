import { useEffect, useState } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { CircularProgress } from '@mui/material';

import { fetchCocktailsByCategory, fetchCocktailsBySearch } from 'services/cocktails-listing';

import CocktailCard from 'components/CocktailCard/CocktailCard';
import SearchBar from 'components/SearchBar/SearchBar';
import CocktailFilter from 'components/CocktailFilter/CocktailFilter';

import { RandomCocktail } from 'features/RandomCocktail/RandomCocktail';

export const CocktailsListing = () => {
  // Default search term is 'a' because there is no get all endpoint
  const [cocktailSearchTerm, setSearchTerm] = useState('a');
  const [cocktailCategory, setCocktailCategory] = useState('');
  const queryClient = useQueryClient();

  // Determine the fetch function based on whether a category is selected
  const fetchFunction = cocktailCategory ? fetchCocktailsByCategory : fetchCocktailsBySearch;

  // Determine the key and argument for fetching based on whether a category is selected
  const fetchKey = cocktailCategory ? cocktailCategory : cocktailSearchTerm;
  const fetchArgument = cocktailCategory ? cocktailCategory : cocktailSearchTerm;

  const { data, error, isLoading } = useQuery({
    queryKey: ['cocktails', fetchKey],
    queryFn: () => fetchFunction(fetchArgument),
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['cocktails', fetchKey],
      queryFn: () => fetchFunction(fetchArgument),
    });
  }, [fetchKey]);

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm || 'a');

    if (cocktailCategory) {
      setCocktailCategory('');
    }
  };

  if (isLoading) {
    return (
      <CircularProgress
        sx={{ position: 'absolute', top: '40%', left: '40%', color: '#cbf6ef' }}
        size={200}
        color="secondary"
        thickness={4}
      />
    );
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <SearchBar searchString={cocktailSearchTerm} onSearch={onSearch} />
      <div className="cocktail-filter-container">
        <RandomCocktail />
        <CocktailFilter cocktailCategory={cocktailCategory} setCocktailCategory={setCocktailCategory} />
      </div>

      <div className="cocktails-listing-container">
        {data?.drinks &&
          data.drinks.map((cocktail: any) => <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />)}
      </div>
    </>
  );
};
