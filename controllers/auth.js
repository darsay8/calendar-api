const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      post: false,
      errors: errors.mapped(),
    });
  }

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

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      post: false,
      errors: errors.mapped(),
    });
  }

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
