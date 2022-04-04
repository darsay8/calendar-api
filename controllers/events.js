const { response } = require('express');
const Event = require('../models/Event');

const getEvents = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: 'get events',
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.status(201).json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Error',
    });
  }
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
