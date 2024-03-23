export const shortenWalletAddress = (str: string): string => {
  if (str.length > 8) {
    return `${str.substring(0, 4)}...${str.substring(str.length - 4)}`;
  }
  return str;
};
