const mongoose = require('mongoose');
const Rating = require('../models/Rating');

// Create a new rating
exports.createRating = async (req, res) => {
    try {
        // Validate if clientId and freelancerId are ObjectIds
        if (!mongoose.Types.ObjectId.isValid(req.body.clientId)) {
            return res.status(400).json({ error: 'Invalid clientId' });
        }
        if (!mongoose.Types.ObjectId.isValid(req.body.freelancerId)) {
            return res.status(400).json({ error: 'Invalid freelancerId' });
        }

        const rating = await Rating.create(req.body);
        res.status(201).json(rating);
    } catch (err) {
        console.error('Error creating rating:', err.message);
        res.status(400).json({ error: err.message || 'Failed to create rating' });
    }
};

// Get all ratings (with optional filters)
exports.getRatings = async (req, res) => {
    try {
        const ratings = await Rating.find(req.query);
        res.status(200).json(ratings);
    } catch (err) {
        console.error('Error fetching ratings:', err.message);
        res.status(400).json({ error: err.message || 'Failed to fetch ratings' });
    }
};

// Get a single rating by ID
exports.getRatingById = async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id);
        if (!rating) {
            return res.status(404).json({ error: 'Rating not found' });
        }
        res.status(200).json(rating);
    } catch (err) {
        console.error('Error fetching rating by ID:', err.message);
        res.status(400).json({ error: err.message || 'Failed to fetch rating by ID' });
    }
};

// Update a rating by ID
exports.updateRating = async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id);
        if (!rating) {
            return res.status(404).json({ error: 'Rating not found' });
        }

        // Optionally update fields
        Object.assign(rating, req.body);
        await rating.save();
        res.status(200).json(rating);
    } catch (err) {
        console.error('Error updating rating:', err.message);
        res.status(400).json({ error: err.message || 'Failed to update rating' });
    }
};

// Delete a rating by ID
exports.deleteRating = async (req, res) => {
    try {
        const rating = await Rating.findByIdAndDelete(req.params.id);
        if (!rating) {
            return res.status(404).json({ error: 'Rating not found' });
        }
        res.status(204).send(); // No content response
    } catch (err) {
        console.error('Error deleting rating:', err.message);
        res.status(400).json({ error: err.message || 'Failed to delete rating' });
    }
};
