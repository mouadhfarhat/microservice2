const express = require('express');
const router = express.Router();
const freelancerController = require('../controllers/freelancerController');

// Freelancer routes
router.get('/:freelancerId/service-requests', freelancerController.viewServiceRequests);

module.exports = router;
