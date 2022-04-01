const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect();
    console.log('DB Ready');
  } catch (error) {
    console.log(error);
    throw new Error('Database error:', error);
  }
};

module.exports = { dbConnection };
