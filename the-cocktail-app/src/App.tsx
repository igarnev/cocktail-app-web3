import { ThemeProvider } from '@emotion/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from 'utils/helpers/theme';

import { AppRoutes } from 'components/Layout/Layout';

import { FavouritesProvider } from 'utils/contexts/FavouriteCocktailsContext';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FavouritesProvider>
          <AppRoutes />
        </FavouritesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
