const express = require('express');
const bodyParser = require('body-parser');
const sampleData = require('./sampleData.js');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());


app.get('/api', (req, res) => {
  res.send('Welcome to the flyConnect server');
});

app.post('/api/login', (req, res) => {
  const {username, password} = req.body;
  for (let i = 0; i < sampleData.users.length; i++) {
    if ((sampleData.users[i].username === username || sampleData.users[i].email === username) && sampleData.users[i].password === password) {
      res.send(true);
    }
  }
  res.send(false);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
