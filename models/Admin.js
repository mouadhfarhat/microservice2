const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    accountType: { type: String, default: 'Admin' },  // Ensuring the role is Admin
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
