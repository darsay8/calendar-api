const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { jwtValidator } = require('../middlewares/jwt-validator');

router.use(jwtValidator);

router.get('/', getEvents);

router.post('/new', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
