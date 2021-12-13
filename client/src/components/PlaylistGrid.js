import { useState, useEffect } from 'react';
import { getPlaylists } from '../spotify';
import { ImageList } from '@mui/material';
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

  const Loader = () => {
    return <div>Loading...</div>
  };

  return (
    <>
      <h1>Playlists</h1>
        {playlists ? (
          <ImageList cols={4}>
            {playlists.map(p => (
              <PlaylistGridItem key={p.id} image={p.images[0].url} name={p.name} />
            ))}
          </ImageList>
        ) : (
          <Loader />
        )}
    </>
  );
}

export default PlaylistGrid;
