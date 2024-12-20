const express = require('express');
const router = express.Router();
const {
    createServiceRequest,
    getServiceRequests,
    getServiceRequestById,
    updateServiceRequest,
    deleteServiceRequest
} = require('../controllers/serviceRequestController');

// Define the routes
router.post('/', createServiceRequest);
router.get('/', getServiceRequests); // Route for GET /api/service-requests
router.get('/:id', getServiceRequestById);
router.put('/:id', updateServiceRequest);
router.delete('/:id', deleteServiceRequest);

module.exports = router;
