import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const PlaylistTitle = styled.p`
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const PlaylistImage = styled.img`
  position: relative;
  width: 100%;
  transition: all 0.2s ease-out;
  background-color: black;
  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-out;
  }
  &:active {
    opacity: 0.5;
  }
`;

function PlaylistGridItem({ name, images }) {
  return (
    <Link to="/">
      <PlaylistContainer>
        <PlaylistImage src={images[0].url} alt={name} />
        <PlaylistTitle>{name}</PlaylistTitle>
      </PlaylistContainer>
    </Link>
  );
}

export default PlaylistGridItem;
