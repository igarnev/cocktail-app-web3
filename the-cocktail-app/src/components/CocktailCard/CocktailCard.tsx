import { useContext } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import clickSound from 'assets/opening-sound.mp3';

import { mapCocktailForCard } from 'services/mappers/cocktails';

import { FavouritesContext } from 'utils/contexts/FavouriteCocktailsContext';

interface CocktailCardProps {
  cocktail: Record<string, string>;
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {
  // Do not map if already mapped
  cocktail =
    cocktail.description !== undefined && cocktail.description !== null ? cocktail : mapCocktailForCard(cocktail);

  const { addFavourite, removeFavourite, isFavourite } = useContext(FavouritesContext);

  const isFavourited = isFavourite(cocktail.idDrink);

  const toggleFavorite = () => {
    if (isFavourited) {
      removeFavourite(cocktail.idDrink);
    } else {
      addFavourite(cocktail);
    }
  };

  return (
    <Card sx={{ width: 360, height: 200, position: 'relative' }}>
      <IconButton
        aria-label="add to favorites"
        sx={{ top: 8, left: 320, position: 'absolute' }}
        onClick={toggleFavorite}
      >
        {isFavourited ? <StarIcon sx={{ color: '#0ad2b2' }} /> : <StarBorderIcon />}
      </IconButton>

      <CardContent className="cocktail-container">
        <CardMedia
          sx={{ width: 120, cursor: 'pointer' }}
          component="img"
          height="165"
          width="100"
          image={cocktail.imageUrl}
          alt={cocktail.name}
          onClick={() => new Audio(clickSound).play()}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cocktail.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: 16,
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 5,
              height: '8rem',
              textOverflow: 'ellipsis',
            }}
          >
            {cocktail.description}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default CocktailCard;
