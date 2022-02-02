import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
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
};

const PlaylistTitle = ({ children }) => {
  return (
    <Link to="/">
      <Typography
        variant="subtitle1"
        sx={{
          display: 'inline',
          borderBottom: '1px solid transparent',
          ':hover': { borderBottom: '1px solid white' },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

function PlaylistGridItem(props) {
  const { name, images } = props;
  return (
    <Grid item {...gridCols} sx={gridItemStyles}>
      <Link to="/">
        <Box sx={hoverStyles} mb={1}>
          <img
            src={images[0].url}
            alt=""
            onError={handleError}
            style={{ maxWidth: '100%' }}
          />
        </Box>
      </Link>
      <PlaylistTitle>{name}</PlaylistTitle>
    </Grid>
  );
}

export default PlaylistGridItem;
