import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { Container, Typography } from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 20px' }}>
      <Container
        style={{ maxWidth: 1260, margin: '0 auto', padding: '0 20px' }}
      >
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
        <footer>
          <Typography variant="body2" color="text.secondary" align="center">
            {'&copy; 2023 | VeronikaTerletska'}
          </Typography>{' '}
        </footer>
      </Container>
    </div>
  );
};
