import { useState, useEffect } from 'react';
import { getPlaylists } from '../spotify';
import PlaylistGridItem from './PlaylistGridItem';
import styled from 'styled-components';

const PageHeading = styled.h2`
  margin: 1em auto;
  text-align: center;
  font-size: 3em;
  letter-spacing: -2px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
`;

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
    <div>
      <PageHeading>Select a playlist to start.</PageHeading>
      <GridContainer>
        {playlists && (
          playlists.map(p => <PlaylistGridItem name={p.name} images={p.images} />))}
      </GridContainer>
    </div>
  );
}

export default PlaylistGrid;
