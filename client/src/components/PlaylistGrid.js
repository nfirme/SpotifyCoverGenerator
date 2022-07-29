import { useState, useEffect, useContext } from 'react';
import { getPlaylists } from '../spotify';
import PlaylistGridItem from './PlaylistGridItem';
import styled from 'styled-components';
import { AuthContext } from '../auth';

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
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists();
      const userPlaylists = data.items.filter(p => p.owner.id === user.id);
      setPlaylists(userPlaylists);
    };
    fetchData();
  }, [user]);

  return (
    <div>
      <PageHeading>Select a playlist to start.</PageHeading>
      <GridContainer>
        {playlists &&
          playlists.map((p) => (
            <PlaylistGridItem
              key={p.id}
              id={p.id}
              name={p.name}
              images={p.images}
            />
          ))}
      </GridContainer>
    </div>
  );
}

export default PlaylistGrid;
