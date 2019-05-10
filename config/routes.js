const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('./dataModel')('users');

const { authenticate, genToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let u = req.body;
  const hash = bcrypt.hashSync(u.password, 10);
  u.password = hash;
  db.register(u)
    .then(user => {
      const token = genToken(user);
      res.status(201).json({token});
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'Could not create the new user.' })
    })
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
