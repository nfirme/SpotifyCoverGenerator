import { useState, useEffect } from 'react';
import { Login, Dashboard } from '.';
import { token } from '../auth';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
    console.log(token);
  }, []);

  return <div className="App">{accessToken ? <Dashboard accessToken={accessToken} /> : <Login />}</div>;
}

export default App;
