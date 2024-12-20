const Freelancer = require('../models/Freelancer');
const ServiceRequest = require('../models/ServiceRequest');

exports.viewServiceRequests = async (req, res) => {
    try {
        const requests = await ServiceRequest.find({ freelancerId: req.params.freelancerId });
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
