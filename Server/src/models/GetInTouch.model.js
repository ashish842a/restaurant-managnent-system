const mongoose = require('mongoose');

const getInTouchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Remove leading/trailing whitespace
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Ensure unique email addresses
    lowercase: true, // Enforce lowercase for consistency
    validate: {
      validator: (value) => {
        // Use a robust email validation library for accuracy
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: 'Please enter a valid email address'
    }
  },
  phone: {
    type: String,
    trim: true,
    // Consider phone number validation libraries if needed
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('GetInTouch', getInTouchSchema);
