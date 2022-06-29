import React from 'react';
import PlaylistGrid from './PlaylistGrid';
import { logout } from '../auth'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1068px;
  padding: 0 2em;
`;

function Main() {
  return (
    <Container>
      <PlaylistGrid />
      <button onClick={() => logout()}>Log Out</button>
    </Container>
  );
}

export default Main;
