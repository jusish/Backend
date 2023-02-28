const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());

app.post("/product", (req, res) => {
  const numbers = req.body.numbers;
  if (!Array.isArray(numbers)) {
    return res.status(400).send("Invalid input. Expected an array of numbers.");
  }
  if (numbers.some(isNaN)) {
    return res.status(400).send("Invalid input. Array should only contain numbers.");
  }
  const product = numbers.reduce((a, b) => a * b, 1);
  return res.send({ product });
});

app.listen(port, () => {
  console.log(`multiplication listening on port:${port}`);
});

//This is the Api application
