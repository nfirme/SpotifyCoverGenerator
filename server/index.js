const express = require('express');
const request = require('request');
const cors = require('cors');
const querystring = require('querystring');

const PORT = 8888;

const REDIRECT_URI = 'http://localhost:8888/callback';
const FRONTEND_URI = 'http://localhost:3000/';

const CLIENT_ID = '0ec9eb19c6b645a8993b5054120379f8';
const CLIENT_SECRET = '6ab0a9ace0ac4f7aaebf95c16a375ea1';

const app = express();
app.use(cors());

app.get('/login', (req, res) => {
  const scope = '';
  const loginOptions = {
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: scope,
  };

  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify(
      loginOptions
    )}`
  );
});

app.get('/callback', (req, res) => {
  const code = req.query.code;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
    },
    json: true
  };
  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const tokens = {
        access_token: body.access_token,
        refresh_token: body.refresh_token,
      };

      res.redirect(`${FRONTEND_URI}?${querystring.stringify(tokens)}`);
    }
  });
});

app.listen(PORT, function () {
  console.log(`Node server listening on port ${PORT}`);
});
