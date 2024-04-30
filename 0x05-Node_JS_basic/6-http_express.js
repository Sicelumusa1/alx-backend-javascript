const express = require('express');

const app = express();

// Defin a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
