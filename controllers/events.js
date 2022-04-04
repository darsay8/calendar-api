const { response } = require('express');
const Event = require('../models/Event');

const getEvents = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: 'get events',
  });
};

const createEvent = (req, res = response) => {
  console.log(req.body);

  return res.status(200).json({
    ok: true,
    msg: 'create event',
  });
};

const updateEvent = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: 'update event',
  });
};

const deleteEvent = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: 'delete event',
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
