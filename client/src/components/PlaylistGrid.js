import { useState, useEffect } from 'react';
import { getPlaylists } from '../spotify';
import { Box, Grid, CircularProgress, Typography } from '@mui/material';
import PlaylistGridItem from './PlaylistGridItem';

function PlaylistGrid() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists();
      setPlaylists(data.items);
    };
    fetchData();
  }, []);

  return (
    <Box py={6}>
      <Typography variant="h2" textAlign="center" mb={4}>Select a playlist to start.</Typography>
      <Grid container spacing={3}>
        {playlists ? (
          playlists.map(({ id, name, images }, index) => (
            <PlaylistGridItem key={index} id={id} name={name} images={images} />
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Box>
  );
}

export default PlaylistGrid;
