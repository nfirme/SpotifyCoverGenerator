import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles'
const { colors } = theme;

const lOGIN_URI = 'http://localhost:8888/login';

const Title = styled.h1`
  font-size: 5em;
  font-weight: 900;
  letter-spacing: -4px;
  text-align: center;
  line-height: 0.9;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  background: -webkit-linear-gradient(left, ${colors.darkGreen}, ${colors.lightGreen});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -2px;
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
  color: #fff;
  border-radius: 30px;
  padding: 17px 35px;
  margin: 20px 0 70px;
  min-width: 160px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${colors.darkGreen}
`;

function LandingPage() {
  return (
    <Container>
      <Title>Playlist Cover Generator</Title>
      <Subtitle>Generate beautiful covers for your Spotify playlists.</Subtitle>
      <LoginButton href={lOGIN_URI}>Login with Spotify</LoginButton>
    </Container>
  );
}

export default LandingPage;
