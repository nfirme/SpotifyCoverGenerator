import React from 'react';
import { Container } from '@mui/material';
import PlaylistGrid from './PlaylistGrid';
import Header from './Header';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <PlaylistGrid />
      </Container>
    </>
  );
}

export default Main;
