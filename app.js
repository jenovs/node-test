const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const num = Math.random();

  res.send(`<h1 style="font-size: 3rem;">${num}</h1>`);
});

app.listen(8080);
