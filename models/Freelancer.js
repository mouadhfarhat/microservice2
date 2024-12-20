const mongoose = require('mongoose');
const User = require('./User');

const freelancerSchema = new mongoose.Schema({
    skills: { type: [String], default: [] },
    servicesOffered: { type: [String], default: [] },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating', default: [] }],
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report', default: [] }],
});

const Freelancer = User.discriminator('Freelancer', freelancerSchema);
module.exports = Freelancer;
