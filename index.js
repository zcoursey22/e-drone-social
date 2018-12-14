const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const sampleData = require('./sampleData.js');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());


app.get('/api', (req, res) => {
  res.send('Welcome to the flyConnect server');
});

// app.post('/api/post', verifyToken, (req, res) => {
//   jwt.verify(req.token, 'secret key', (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'Post created!',
//         authData
//       });
//     }
//   });
// });

app.post('/api/login', (req, res) => {
  const {id, username, email, password} = req.body;
  let matched = false;
  for (let i = 0; i < sampleData.users.length; i++) {
    if ((sampleData.users[i].username === username || sampleData.users[i].email === username) && sampleData.users[i].password === password) {
      matched = true;
      const user = {
        id,
        username,
        email
      };
      jwt.sign({user}, 'secret key', { expiresIn: '30s' }, (err, token) => {
        console.log(token);
        res.json({token});
      });
    } else {
      console.log(i);
    }
  }
  if (matched === false) {
    console.log('invalid');
    res.send();
  }
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(port, () => console.log(`Listening on port ${port}`));
