const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , { port, connection } = require('./config');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
 console.log(`endpoint hit: ${req.method} ${req.url}`);
 next();
});

massive(connection)
.then(db => {
  // console.log('db', db);
  app.set('db', db);
})
.catch(err => {console.log(err)});

app.get('/api/users/:auth_id', (req, res) => {
  req.app.get('db').get_user_id([req.params.auth_id])
  .then(response => {
    res.status(200).send(response[0]);
  })
});

app.listen(port, function() {
  console.log(`Listening on ${port}.`)
});

