const Client = require('../models/Client');
const ServiceRequest = require('../models/ServiceRequest');

exports.postServiceRequest = async (req, res) => {
    const { clientId, description } = req.body;

    try {
        const client = await Client.findById(clientId);
        if (!client) return res.status(404).json({ error: 'Client not found' });

        const serviceRequest = new ServiceRequest({ clientId, description });
        await serviceRequest.save();

        client.serviceRequests.push(serviceRequest._id);
        await client.save();

        res.status(201).json({ message: 'Service request created', serviceRequest });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
