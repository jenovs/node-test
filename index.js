const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`<h1 style="font-size: 3rem;">${Math.random()}</h1>`);
});

app.listen(8080);
