import { ethers } from 'ethers';

import { convertResultToObject } from 'services/mappers/contract-cocktail-mapper';

import contractAbi from 'utils/abi-compiled-contract.json';
import { alchemyApiKeyUrl, contractAddress } from 'utils/contract-settings';

export const handleReadContractCocktails = async () => {
  const provider = new ethers.JsonRpcProvider(alchemyApiKeyUrl);
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);

  try {
    const totalCocktailsCount = await contract.getCockltailCount();
    const cocktails = [];

    for (let i = 0; i < totalCocktailsCount; i++) {
      const cocktail = await contract.getCocktail(i);
      cocktails.push(convertResultToObject(cocktail));
    }

    return cocktails;
  } catch (error) {
    console.error('Error fetching all cocktails:', error);
    throw error;
  }
};
