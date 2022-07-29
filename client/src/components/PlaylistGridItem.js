import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../styles'
const { colors, transition } = theme;

const PlaylistTitle = styled.p`
  text-align: center;
  padding: 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
  transition: ${transition};

  &:hover {
    text-decoration: underline;
  }
`;

const PlaylistImage = styled.img`
  position: relative;
  border-radius: 16px;
  transition: ${transition};
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 16px;
  border-radius: 16px;
  background-color: ${colors.gray};

  &:hover {
    background-color: ${colors.lightGray};
    transition: ${transition};
  }

  &:hover ${PlaylistImage} {
    transform: scale(1.04);
    transition: ${transition};
  }

  &:hover ${PlaylistTitle} {
    color: ${colors.lightGreen};
    transition: ${transition};
  }
`;

function PlaylistGridItem({ id, name, images }) {
  return (
    <Link to={`/playlists/${id}`}>
      <PlaylistContainer>
        <PlaylistImage src={images[0].url} alt={name} />
        <PlaylistTitle>{name}</PlaylistTitle>
      </PlaylistContainer>
    </Link>
  );
}

export default PlaylistGridItem;
