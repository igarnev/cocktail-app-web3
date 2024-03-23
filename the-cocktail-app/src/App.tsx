import { WagmiProvider } from 'wagmi';

import { ThemeProvider } from '@emotion/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from 'utils/helpers/theme';

import { FavouritesProvider } from 'utils/contexts/FavouriteCocktailsContext';
import { wagmiConfig } from 'utils/constants/wagmi';

import { AppRoutes } from 'components/Layout/Layout';

import { Buffer } from 'buffer';

globalThis.Buffer = Buffer;

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <FavouritesProvider>
            <AppRoutes />
          </FavouritesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
