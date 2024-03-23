import { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useQuery } from '@tanstack/react-query';

import { get } from 'utils/httpService';

interface CocktailFilterProps {
  cocktailCategory: string;
  setCocktailCategory: (category: string) => void;
}

export const CocktailFilter = ({ cocktailCategory, setCocktailCategory }: CocktailFilterProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cocktailCategories'],
    queryFn: () => get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'),
  });

  const [category, setCategory] = useState(cocktailCategory);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    setCocktailCategory(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <FormControl sx={{ m: 1, width: 200 }}>
      <InputLabel id="search-label" sx={{ fontSize: 16 }}>
        Cocktail Category
      </InputLabel>
      <Select labelId="search-label" value={category} label="Age" onChange={handleCategoryChange}>
        {data.drinks?.length &&
          data.drinks.map((category: Record<string, string>) => (
            <MenuItem key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText sx={{ fontSize: 12 }}>Filter cocktails by category</FormHelperText>
    </FormControl>
  );
};

export default CocktailFilter;
