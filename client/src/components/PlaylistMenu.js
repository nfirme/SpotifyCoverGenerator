import React, { useState, useEffect } from 'react';
import { getAudioFeatures, getPlaylist } from '../spotify';
import Sketch from './Sketch'

export default function PlaylistMenu(props) {
  const { id } = props;

  const [playlist, setPlaylist] = useState(null);
  const [features, setFeatures] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylist(id);
      setPlaylist(data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      if (playlist) {
        const { data } = await getAudioFeatures(playlist.tracks.items);
        setFeatures(data.audio_features);
      }
    };
    fetchData();
  }, [playlist]);

  const resultData = {};

  return (
    <div>
      <Sketch />
    </div>
  )
}
