const { Router } = require('express');
const router = Router();

const { createUser, loginUser, validateToken } = require('../controllers/auth');

router.post('/', loginUser);

router.post('/new', createUser);

router.get('/validate', validateToken);

module.exports = router;
