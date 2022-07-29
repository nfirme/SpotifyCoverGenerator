import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { theme } from '../styles';
const { colors } = theme;

const lOGIN_URI = 'http://localhost:8888/login';

const Title = styled.h1`
  font-size: 5em;
  font-weight: 900;
  letter-spacing: -2px;
  text-align: center;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  color: ${colors.sky};
  font-size: 2em;
  background: -webkit-linear-gradient(left, ${colors.sky}, ${colors.pink});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -1px;
  margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function LandingPage() {
  return (
    <Container>
      <Title>Playlist Cover Generator</Title>
      <Subtitle>Generate beautiful covers for your Spotify playlists.</Subtitle>
      <Button href={lOGIN_URI} color={colors.sky}>Log in with Spotify</Button>
    </Container>
  );
}

export default LandingPage;
