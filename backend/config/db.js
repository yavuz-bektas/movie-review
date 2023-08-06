// shared/config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbURI = process.env.DB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database.');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

module.exports = connectToDatabase;
