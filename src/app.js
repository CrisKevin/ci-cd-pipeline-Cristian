const express = require('express');
const app = express();
app.use(express.json());

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) return res.status(400).json({ error: 'Invalid input' });
  res.json({ result: Number(a) + Number(b) });
});

app.get('/greet', (req, res) => {
  res.json({ message: 'Hello from CI/CD app!' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;
