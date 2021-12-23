import { useState, useEffect } from 'react';
import { getPlaylists } from '../spotify';
import { Grid, CircularProgress } from '@mui/material';
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
    <>
      <h1>Playlists</h1>
      <Grid container spacing={3}>
        {playlists ? (
          playlists.map(({ id, name, images }, index) => (
            <PlaylistGridItem key={index} id={id} name={name} images={images} />
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </>
  );
}

export default PlaylistGrid;
