import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlaylistOptions from './PlaylistOptions';
import PlaylistGrid from './PlaylistGrid';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1068px;
  padding: 0 2em;
`;

function Main() {
  return (
    <Container>
      <Routes>
        <Route index element={<PlaylistGrid />} />
        <Route path="playlists" element={<PlaylistGrid />} />
        <Route path="playlists/:playlistId" element={<PlaylistOptions />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default Main;
