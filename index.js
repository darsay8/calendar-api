const express = require('express');
require('dotenv').config();

const app = express();

// app.get('/', (req, res) => {
//   res.json({})
// });

app.use(express.static('public'));

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
