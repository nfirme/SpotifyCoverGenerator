import React from 'react';
import { Container } from '@mui/material';
import PlaylistGrid from './PlaylistGrid';
import Footer from './Footer'

function Main() {
  return (
    <Container>
      <PlaylistGrid />
      <Footer />
    </Container>
  );
}

export default Main;
