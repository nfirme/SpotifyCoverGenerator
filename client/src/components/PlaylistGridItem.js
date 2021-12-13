import React from 'react';
import PropTypes from 'prop-types';
import ImageListItem from '@mui/material/ImageListItem';

function PlaylistGridItem({ image, name }) {
  return (
    <ImageListItem>
      <img src={image} alt={name} />
    </ImageListItem>
  )
}

PlaylistGridItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default PlaylistGridItem;
