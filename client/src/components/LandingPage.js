import React from 'react';
import { Typography, Box } from '@mui/material';
import Login from './Login';

function LandingPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" component="h1">
        Spotify Playlist Cover Generator
      </Typography>
      <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
        Generate unique covers for your Spotify playlists.
      </Typography>
      <Login />
    </Box>
  );
}

export default LandingPage;
