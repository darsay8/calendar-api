const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({});
});

app.listen(3001, () => {
  console.log(`Server on port ${3001}`);
});
