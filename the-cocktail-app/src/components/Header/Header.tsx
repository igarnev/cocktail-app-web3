import { useLocation, useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Typography, MenuItem } from '@mui/material';

import MetaMaskConnectComponent from 'features/MetaMaskConnect/MetaMaskConnect';

interface HeaderComponentProps {
  setIsLogged: (isLogged: boolean) => void;
}

export const Header = ({ setIsLogged }: HeaderComponentProps) => {
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

        <MenuItem key={'contract-cocktails'} onClick={() => navigate('/contract-cocktails')}>
          <Typography
            sx={{
              color: '#9b24fd ',
              fontFamily: '"Share Tech Mono", sans-serif !important',
              fontWeight: 'bold',
            }}
            className={location.pathname === '/contract-cocktails' ? 'active-item-contract' : 'header-menu-item'}
          >
            Contract Cocktails
          </Typography>
        </MenuItem>
        <MetaMaskConnectComponent setIsLogged={setIsLogged} />
      </Toolbar>
    </AppBar>
  );
};
