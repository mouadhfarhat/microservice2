const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, required: true },
    freelancerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    ratingValue: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Rating', RatingSchema);
