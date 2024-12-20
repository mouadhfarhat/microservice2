const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Client routes
router.post('/post-service-request', clientController.postServiceRequest);

module.exports = router;
