const mongoose = require('mongoose');
const User = require('./User');

const clientSchema = new mongoose.Schema({
    serviceRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ServiceRequest', default: [] }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating', default: [] }],
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report', default: [] }],
});

const Client = User.discriminator('Client', clientSchema);
module.exports = Client;
