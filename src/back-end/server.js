const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const bug_model = require('./models/bug_model');
const user_model = require('./models/user_model');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.status(200).send('Hello World!');
});

app.listen(process.env.PORT || port, () => {
  console.log(`app running at port : ${port}`);
}); //includes Heroku deployment option