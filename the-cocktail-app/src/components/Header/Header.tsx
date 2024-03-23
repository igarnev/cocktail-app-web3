import { useLocation, useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Typography, MenuItem } from '@mui/material';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="header">
      <Typography className="header-name">Cats Loves Cocktails</Typography>

      <Toolbar className="header-toolbar">
        <MenuItem key={'home'} className="" onClick={() => navigate('/')}>
          <Typography className={location.pathname !== '/' ? 'active-item' : 'header-menu-item'}>Home</Typography>
        </MenuItem>

        <MenuItem key={'favourites'} onClick={() => navigate('/favourites')}>
          <Typography className={location.pathname !== '/favourites' ? 'active-item' : 'header-menu-item'}>
            Favourites
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};
