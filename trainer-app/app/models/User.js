// @/app/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
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

export default mongoose.models.User || mongoose.model('User', UserSchema);

