import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Typography } from '@mui/material';

import { CocktailsListing } from 'pages/CocktailsListing/CocktailsListing';
import { CocktailsFavourites } from 'pages/CocktailsFavourites/CocktailsFavourites';
import { ContractCocktailsListing } from 'pages/ContractCocktailsListing/ContractCocktailsListing';

import { ROUTES } from 'utils/constants/routes';

import { Header } from 'components/Header/Header';

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <Header setIsLogged={setIsLogged} />

      {isLogged ? (
        <Routes>
          <Route path={ROUTES.home} element={<CocktailsListing />} />
          <Route path={ROUTES.favourites} element={<CocktailsFavourites />} />
          <Route path={ROUTES.contractCocktails} element={<ContractCocktailsListing />} />

          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      ) : (
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ display: 'flex', color: '#0ad2b2', justifyContent: 'center', alignItems: 'center', height: '85vh' }}
        >
          To proceed please connect to MetaMask
        </Typography>
      )}
    </div>
  );
};
