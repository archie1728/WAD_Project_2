// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['customer', 'trainer', 'admin'], // Defining the role field
    default: 'customer', // Default role for a new user
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
