const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    trim: true,
    type: String
  },
  googleId: {
    required: true,
    trim: true,
    type: String
  },
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('users', userSchema);
