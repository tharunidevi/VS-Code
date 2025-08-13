const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  hashedPassword: String,
  lastLogin: Date,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
