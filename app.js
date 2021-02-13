const express = require('express');

const app = express();

let count = 0;

app.get('/', (req, res) => {
  const num = Math.random();
  count++;

  res.send(
    `<h1 style="font-size: 3rem;">${num}</h1><p>Request count: ${count}</p>`
  );
});

app.listen(8080);
