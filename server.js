const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , config = require('./config');

const app = express();

app.use(bodyParser.json());

massive('postgres://wvjgmeisdmvswu:ad405c70e783c7e6f717be5572fc82dd1f2a36c40f79148b93cf1cc46acd400e@ec2-54-235-90-125.compute-1.amazonaws.com:5432/del1fqajvknvrd?ssl=true')
.then(db => {
  console.log('db', db)
  app.set('db', db);
})
.catch(err => {console.log(err)});

app.get('/api/users/:auth_id', (req, res) => {
  app.get('db').get_user_id([req.params.auth_id])
  .then(response => {
    res.status(200).send(response[0]);
  })
})

app.listen(config.port, function() {
  console.log(`Listening on ${config.port}.`)
})

