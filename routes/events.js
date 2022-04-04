const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { jwtValidator } = require('../middlewares/jwt-validator');
const { fieldValidator, fieldsValidator } = require('../middlewares/fields-validator');
const { isDate } = require('../helpers/isDate');

router.use(jwtValidator);

router.get('/', getEvents);

router.post(
  '/new',
  [
    check('title', 'Title is required').not().isEmpty(),
    // check('start', 'Start date is not valid').isDate(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    fieldsValidator,
  ],
  createEvent,
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
