import { useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import CocktailCard from 'components/CocktailCard/CocktailCard';

import { handleReadContractCocktails } from 'utils/helpers/read-contract-cocktails';

export const ContractCocktailsListing = () => {
  const [cocktails, setCocktails] = useState<any[]>([]);

  const getContractCocktails = async () => {
    const contractCocktails = await handleReadContractCocktails();
    setCocktails(contractCocktails);
  };

  useEffect(() => {
    getContractCocktails();
  }, []);

  return (
    <>
      {!cocktails.length && (
        <CircularProgress
          sx={{ position: 'absolute', top: '40%', left: '40%', color: '#cbf6ef' }}
          size={200}
          color="secondary"
          thickness={4}
        />
      )}
      <div className="cocktails-listing-container">
        {cocktails && cocktails.map((cocktail: any) => <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />)}
      </div>
    </>
  );
};
