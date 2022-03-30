const { response } = require('express');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    post: true,
    action: 'Create User',
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  res.status(201).json({
    post: true,
    action: 'Login User',
    email,
    password,
  });
};

const validateToken = (req, res = response) => {
  res.json({
    get: true,
    action: 'Validate Token',
  });
};

module.exports = {
  createUser,
  loginUser,
  validateToken,
};
