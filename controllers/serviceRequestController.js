const ServiceRequest = require('../models/ServiceRequest');

exports.createServiceRequest = async (req, res) => {
    try {
        const serviceRequest = await ServiceRequest.create(req.body);
        res.status(201).json(serviceRequest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getServiceRequests = async (req, res) => {
    try {
        const serviceRequests = await ServiceRequest.find(req.query);
        res.status(200).json(serviceRequests);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getServiceRequestById = async (req, res) => {
    try {
        const serviceRequest = await ServiceRequest.find(req.query);
        if (!serviceRequest) {
            return res.status(404).json({ error: 'Service request not found' });
        }
        res.status(200).json(serviceRequest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateServiceRequest = async (req, res) => {
    try {
        const serviceRequest = await ServiceRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!serviceRequest) {
            return res.status(404).json({ error: 'Service request not found' });
        }
        res.status(200).json(serviceRequest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteServiceRequest = async (req, res) => {
    try {
        const serviceRequest = await ServiceRequest.findByIdAndDelete(req.params.id);
        if (!serviceRequest) {
            return res.status(404).json({ error: 'Service request not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
