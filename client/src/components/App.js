import { useState, useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../styles';
import { AuthContext } from '../auth';
import { getUser } from '../spotify';

import Main from './Main';
import LandingPage from './LandingPage';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUser();
      setCurrentUser(data);
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ token: accessToken, user: currentUser }}>
      <BrowserRouter>
        <GlobalStyles />
        {accessToken ? <Main /> : <LandingPage />}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
