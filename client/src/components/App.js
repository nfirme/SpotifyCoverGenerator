import { useState, useEffect } from 'react';
import { token, logout } from '../auth';
import { Login, PlaylistGrid } from '.';
import { Container, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  const Main = () => {
    return (
      <>
        <PlaylistGrid />
        <Button onClick={logout} variant="outlined" color="error">Log Out</Button>
      </>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        {accessToken ? <Main /> : <Login />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
