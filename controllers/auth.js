const { response } = require('express');
const User = require('../models/User');

const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body;

  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      message: 'User created',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Error',
    });
  }
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
