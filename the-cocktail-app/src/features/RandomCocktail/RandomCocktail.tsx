import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useQuery } from '@tanstack/react-query';

import { get } from 'utils/httpService';
import { randomCocktailModalStyle } from 'utils/constants/random-cocktail-modal-style';

import randomCocktailImage from 'assets/random-cocktail.png';

import CocktailCard from 'components/CocktailCard/CocktailCard';
import { MainTooltip } from 'components/Tooltips/MainTooltip';

export const RandomCocktail = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    refetch();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['randomCocktail'],
    queryFn: () => get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <MainTooltip title="Get a random cocktail!" placement="right-end" color="primary">
        <IconButton onClick={handleOpen}>
          <img src={randomCocktailImage} height="100" alt="Random cocktail icon" />
        </IconButton>
      </MainTooltip>
      <Modal open={open} onClose={handleClose}>
        <Box sx={randomCocktailModalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          {data?.drinks.length && <CocktailCard cocktail={data.drinks[0]} />}
        </Box>
      </Modal>
      ;
    </>
  );
};
