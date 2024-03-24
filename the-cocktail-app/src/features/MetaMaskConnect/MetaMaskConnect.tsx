import { useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';

import metamaskLogo from 'assets/metamask-logo.png';

import { shortenWalletAddress } from 'utils/helpers/transform-wallet-address';

import { MainTooltip } from 'components/Tooltips/MainTooltip';

interface MetaMaskConnectComponentProps {
  setIsLogged: (isLogged: boolean) => void;
}

export const MetaMaskConnectComponent = ({ setIsLogged }: MetaMaskConnectComponentProps) => {
  const account = useAccount();

  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setIsLogged(account.isConnected);
  }, [account]);

  return (
    <>
      {account.status === 'connected' && (
        <MainTooltip title="Logout from MetaMask" placement="left-end" color="primary">
          <IconButton size="large" onClick={() => disconnect()}>
            <LogoutIcon sx={{ color: '#ffffff' }} />
          </IconButton>
        </MainTooltip>
      )}

      {account.addresses?.[0] && (
        <Typography sx={{ paddingRight: 1 }}>
          Connected Wallet: {shortenWalletAddress(account.addresses?.[0] as string)}
        </Typography>
      )}

      <div>
        {account.status !== 'connected' &&
          connectors
            .filter((connector) => connector.id === 'io.metamask')
            .map((connector) => (
              <MainTooltip key={connector.uid} title="Connect to MetaMask" placement="left-end" color="primary">
                <IconButton key={connector.uid} onClick={() => connect({ connector })}>
                  <img key={connector.uid} src={metamaskLogo} height="40" alt="Random cocktail icon" />
                </IconButton>
              </MainTooltip>
            ))}
      </div>
    </>
  );
};

export default MetaMaskConnectComponent;
