const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.get('*', (req, res) => res.redirect('/'));

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
