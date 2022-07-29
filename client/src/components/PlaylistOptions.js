import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlaylist } from '../spotify';
import { theme } from '../styles';
import styled from 'styled-components';
import Button from './Button';

const { colors } = theme;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid red;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaylistCover = styled.img`
  width: initial;
  max-width: 300px;
`;

function PlaylistOptions() {
  let { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    };
    fetchData();
  }, [playlistId]);

  return (
    <div>
      <Link to="/playlists">Back</Link>
      {playlist && (
        <OptionsContainer>
          <PlaylistCover src={playlist.images[0].url} alt="Playlist cover" />
          <h2>{playlist.name}</h2>
          <p>{`${playlist.tracks.total} Tracks`}</p>
          <ButtonsContainer>
            <Button color={colors.green}>Option 1</Button>
            <Button color={colors.pink}>Option 2</Button>
          </ButtonsContainer>
        </OptionsContainer>
      )}
    </div>
  );
}

export default PlaylistOptions;
