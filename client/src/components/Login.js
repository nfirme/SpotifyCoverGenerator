import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Login() {
  const LOGIN_URI = 'http://localhost:8888/login';

  return (
    <div>
      <h1>Spotify Playlist Cover Generator</h1>
      <Button href={LOGIN_URI} variant="success">
        Login with Spotify
      </Button>
    </div>
  );
}
