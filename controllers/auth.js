const { response } = require('express');

const createUser = (req, res = response) => {
  res.json({
    post: true,
    action: 'Create User',
  });
};

const loginUser = (req, res = response) => {
  res.json({
    post: true,
    action: 'Login User',
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
