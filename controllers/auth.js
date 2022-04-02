const { response } = require('express');
const User = require('../models/User');

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'E-mail already in use',
      });
    }

    user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
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
