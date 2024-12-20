const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store encrypted passwords
    email: { type: String, required: true, unique: true },
    accountType: { type: String, enum: ['Client', 'Freelancer'], required: true }, // "Client" or "Freelancer"
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
