const express = require('express');
const router = express.Router();
const {
    createReport,
    getReports,
    getReportById,
    updateReport,
    deleteReport
} = require('../controllers/reportController');

// Define the routes
router.post('/', createReport);
router.get('/', getReports); // Route for GET /api/reports
router.get('/:id', getReportById);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;
