import React from 'react';
import { Typography, Box, Container, useTheme } from '@mui/material';

import Login from './Login';

function LandingPage() {
  const theme = useTheme();
  
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        px={4}
        py={16}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" mb={2}>Playlist Cover Generator</Typography>
        <Typography
          variant="h2"
          mb={3}
          sx={{
            background: `linear-gradient(to right, ${theme.palette.primary[400]}, ${theme.palette.primary[700]})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Generate beautiful covers for your Spotify playlists.
        </Typography>
        <Login />
      </Box>
    </Container>
  );
}

export default LandingPage;
