import { AppBar, Toolbar, Typography, MenuItem } from '@mui/material';

import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static" className="header">
      <Typography className="header-name">Beans Loves Beers</Typography>

      <Toolbar className="header-toolbar">
        <MenuItem key={'home'} className="" onClick={() => {}}>
          <Typography className={location.pathname !== '/' ? 'active-item' : 'header-menu-item'}>Home</Typography>
        </MenuItem>

        <MenuItem key={'favourites'} onClick={() => {}}>
          <Typography className={location.pathname !== '/favourites' ? 'active-item' : 'header-menu-item'}>
            Favourites
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};