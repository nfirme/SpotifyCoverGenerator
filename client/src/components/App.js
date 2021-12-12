import { useState, useEffect } from 'react';
import { token } from '../auth';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
