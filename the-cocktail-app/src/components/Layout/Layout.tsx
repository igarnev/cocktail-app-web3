import { Navigate, Route, Routes } from 'react-router-dom';

import { CocktailsListing } from 'pages/CocktailsListing';

import { ROUTES } from 'utils/constants/routes';

import { Header } from 'components/Header/Header';

export const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<CocktailsListing />} />

        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Routes>
    </div>
  );
};
