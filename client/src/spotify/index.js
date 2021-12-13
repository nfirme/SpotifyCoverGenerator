import axios from 'axios';
import { token } from '../auth';

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

/*** API Calls ***/

export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers });
export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });
