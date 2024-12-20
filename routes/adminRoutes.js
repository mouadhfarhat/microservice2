const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.login);

// CRUD for Users
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);
router.post('/users', adminController.createUser);

// CRUD for Service Requests
router.get('/service-requests', adminController.getAllServiceRequests);
router.get('/service-requests/:id', adminController.getServiceRequestById);
router.put('/service-requests/:id', adminController.updateServiceRequest);
router.delete('/service-requests/:id', adminController.deleteServiceRequest);

module.exports = router;
