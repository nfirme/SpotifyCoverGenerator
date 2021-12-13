require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:8888/callback'
const FRONTEND_URI = process.env.FRONTEND_URI || 'http://localhost:3000';
const PORT = process.env.PORT || 8888;

const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());

////// LOGIN ROUTE
app.get('/login', (req, res) => {
  const scope = 'playlist-read-private';
  const queryParams = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: scope,
  }).toString();
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

////// CALLBACK ROUTE
app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const buffer = new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    'base64'
  );
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization: `Basic ${buffer}`,
    },
    json: true,
  };

  const callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const params = new URLSearchParams({
        access_token: body.access_token,
        refresh_token: body.refresh_token,
      }).toString();
      res.redirect(`${FRONTEND_URI}#${params}`);
    } else {
      res.send({ error })
    }
  };

  request.post(authOptions, callback);
});

////// REFRESH TOKEN ROUTE
app.get('/refresh_token', (req, res) => {
  const refresh_token = req.query.refresh_token;
  const buffer = new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    'base64'
  );
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    headers: {
      Authorization: `Basic ${buffer}`,
    },
    json: true,
  };

  const callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const access_token = body.access_token;
      res.send({ access_token })
    }
  };

  request.post(authOptions, callback);
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
