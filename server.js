'use strict';

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})



function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}

module.exports = {
  app: app,
  start: start
}
