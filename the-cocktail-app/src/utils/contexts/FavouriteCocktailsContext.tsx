import React, { useState, useCallback, createContext } from 'react';

import { hashObject } from 'utils/helpers/hashing-function';

interface FavoritesContextType {
  favourites: Record<string, any>;
  addFavourite: (cocktail: any) => void;
  removeFavourite: (idDrink: string) => void;
  isFavourite: (idDrink: string) => boolean;
}

export const FavouritesContext = createContext<FavoritesContextType>({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
  isFavourite: () => false,
});

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavouritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favourites, setFavourites] = useState<Record<string, any>>({});

  const addFavourite = useCallback((cocktail: any) => {
    const hashKey = hashObject({ idDrink: cocktail.idDrink });
    setFavourites((prevFavourites) => ({
      ...prevFavourites,
      [hashKey]: cocktail,
    }));
  }, []);

  const removeFavourite = useCallback((idDrink: string) => {
    const hashKey = hashObject({ idDrink });
    setFavourites((prevFavourites) => {
      const newFavourites = { ...prevFavourites };
      delete newFavourites[hashKey];
      return newFavourites;
    });
  }, []);

  const isFavourite = useCallback(
    (idDrink: string) => {
      const hashKey = hashObject({ idDrink });
      return hashKey in favourites;
    },
    [favourites],
  );

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
