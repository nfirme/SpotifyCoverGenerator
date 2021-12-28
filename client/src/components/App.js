import { useState, useEffect } from 'react';
import { token } from '../auth';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

import Main from './Main';
import LandingPage from './LandingPage';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {accessToken ? <Main /> : <LandingPage />}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
