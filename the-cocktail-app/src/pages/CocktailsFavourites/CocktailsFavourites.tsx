import { useContext } from 'react';

import Typography from '@mui/material/Typography';

import { FavouritesContext } from 'utils/contexts/FavouriteCocktailsContext';

import CocktailCard from 'components/CocktailCard/CocktailCard';

export const CocktailsFavourites = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        sx={{ color: '#037e67', textAlign: 'center', marginTop: 2 }}
        component="div"
      >
        Favourited Cocktails
      </Typography>

      <div className="cocktails-listing-container">
        {Object.values(favourites).map((cocktail: any) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </>
  );
};
