const mongoose = require('mongoose');

const ServiceRequestSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    freelancerId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'User' },
    description: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    paymentStatus: { type: String, default: 'Unpaid' },
}, { timestamps: true });

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);
