import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import clickSound from 'assets/opening-sound.mp3';

const CocktailCard = ({ cocktail }: { cocktail: Record<string, string> }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ width: 360, height: 200, position: 'relative' }}>
      <IconButton
        aria-label="add to favorites"
        sx={{ top: 8, left: 320, position: 'absolute' }}
        onClick={toggleFavorite}
      >
        {isFavorite ? <StarIcon sx={{ color: '#0ad2b2' }} /> : <StarBorderIcon />}
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