import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../styles';
import { token } from '../auth';

import Main from './Main';
import LandingPage from './LandingPage';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      {accessToken ? <Main /> : <LandingPage />}
    </BrowserRouter>
  );
}

export default App;
