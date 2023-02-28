const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/add', (req, res) => {
  const numbers = req.body.numbers;
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

app.listen(port, () => {
  console.log(`Sum is listening on port:${port}`);
});
