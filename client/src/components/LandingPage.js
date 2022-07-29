import React from 'react';
import styled from 'styled-components';
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

const LoginButton = styled.a`
  background-color: ${colors.green};
  color: ${colors.white};
  border-radius: 30px;
  padding: 16px 32px;
  margin: 20px 0 70px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  &:hover,
  &:focus {
    background-color: ${colors.darkGreen}
`;

function LandingPage() {
  return (
    <Container>
      <Title>Playlist Cover Generator</Title>
      <Subtitle>Generate beautiful covers for your Spotify playlists.</Subtitle>
      <LoginButton href={lOGIN_URI}>Log in with Spotify</LoginButton>
    </Container>
  );
}

export default LandingPage;
