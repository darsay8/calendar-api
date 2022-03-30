const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, validateToken } = require('../controllers/auth');

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be 6 characters').isLength({ min: 6 }),
  ],
  loginUser,
);

router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be 6 characters').isLength({ min: 6 }),
  ],
  createUser,
);

router.get('/validate', validateToken);

module.exports = router;
