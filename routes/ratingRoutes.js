const express = require('express');
const router = express.Router();
const {
    createRating,
    getRatings,
    getRatingById,
    updateRating,
    deleteRating
} = require('../controllers/ratingController');

// Define the routes
router.post('/', createRating);
router.get('/', getRatings); // This is the route for GET /api/ratings
router.get('/:id', getRatingById);
router.put('/:id', updateRating);
router.delete('/:id', deleteRating);

module.exports = router;
