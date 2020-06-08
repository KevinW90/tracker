const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// models //
const bugModel = require('./models/bug_model');
const user_model = require('./models/user_model');

// use //
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// get //
app.get('/', function (req, res) {
  bugModel.getBugs()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
  // res.status(200).send('Hello World!');
});

// post //
app.post('/bugs', (req, res) => {
  //create bug has four keys
  //resolve bug has three keys
  //req.body is an object
  //if req.body has four keys, call create
  if (Object.keys(req.body).length === 4) {
    bugModel.createBug(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  } else if (Object.keys(req.body).length === 3) {
    bugModel.resolveBug(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  }
})

// delete //
app.delete('/bugs/:id', (req, res) => {
  bugModel.deleteBug(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

// listen //
app.listen(process.env.PORT || port, () => {
  console.log(`server running at port : ${port}`);
}); //includes Heroku deployment option