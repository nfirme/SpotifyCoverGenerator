import React from 'react';

export default function Dashboard(props) {
  return (
    <div>
      <h1>Welcome to your Spotify playlist dashboard</h1>
      <pre>{props.accessToken}</pre>
    </div>
  );
}
