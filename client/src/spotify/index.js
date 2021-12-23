import axios from 'axios';
import { token } from '../auth';

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

/*** API Calls ***/

export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers });
export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });
export const getPlaylistItems = (playlist_id) => axios.get(`	https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, { headers })
export const getAudioFeatures = (ids) => axios.get(`https://api.spotify.com/v1/audio-features?ids=${ids.join()}`, { headers });
