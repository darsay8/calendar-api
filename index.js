const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
