const { response } = require('express');
const jwt = require('jsonwebtoken');

const jwtValidator = (req, res, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: 'There is no token in request',
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Token is not valid',
    });
  }
  next();
};

module.exports = {
  jwtValidator,
};
