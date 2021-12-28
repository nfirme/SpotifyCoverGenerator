import React from 'react';
import Button from '@mui/material/Button';

function Login() {
  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      href="http://localhost:8888/login"
    >
      Login with Spotify
    </Button>
  );
}

export default Login;
