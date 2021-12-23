import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import fallback from '../img/taylor.png';

const gridCols = {
  xs: 6,
  sm: 4,
  md: 3,
};

const gridItemStyles = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
};

const hoverStyles = {
  transition: 'all .2s ease-in',
  ':hover': {
    transform: 'scale(1.05)',
    transition: 'all .2s ease-out',
  },
};

const handleError = (e) => {
  e.target.onerror = null;
  e.target.src = fallback;
}

function PlaylistGridItem(props) {
  const { name, images } = props;
  return (
    <Grid item {...gridCols} sx={gridItemStyles}>
      <Box sx={hoverStyles} mb={2}>
        <img src={images[0].url} alt="" onError={handleError} style={{ maxWidth: '100%' }} />
      </Box>
      <Typography px={2}>{name}</Typography>
    </Grid>
  );
}

export default PlaylistGridItem;
