const User = require('../models/User');
const ServiceRequest = require('../models/ServiceRequest');

// adminController.js
const adminCredentials = {
    email: 'admin@admin.com',
    password: 'adminpassword',
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        return res.status(200).send({ message: 'Login successful' });
    } else {
        return res.status(401).send({ message: 'Invalid credentials' });
    }
};


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CRUD for Service Requests
exports.getAllServiceRequests = async (req, res) => {
    try {
        const serviceRequests = await ServiceRequest.find();
        res.status(200).json(serviceRequests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getServiceRequestById = async (req, res) => {
    try {
        const serviceRequest = await ServiceRequest.findById(req.params.id);
        if (!serviceRequest) return res.status(404).json({ error: 'Service request not found' });
        res.status(200).json(serviceRequest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateServiceRequest = async (req, res) => {
    try {
        const serviceRequest = await ServiceRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!serviceRequest) return res.status(404).json({ error: 'Service request not found' });
        res.status(200).json(serviceRequest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteServiceRequest = async (req, res) => {
    try {
        const serviceRequest = await ServiceRequest.findByIdAndDelete(req.params.id);
        if (!serviceRequest) return res.status(404).json({ error: 'Service request not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { username, password, email, accountType, createdAt, updatedAt } = req.body;

        // You might want to hash the password here before saving it to the database
        const user = new User({
            username,
            password,  // Hash the password before saving (e.g., using bcrypt)
            email,
            accountType,
            createdAt,
            updatedAt
        });

        const savedUser = await user.save();
        res.status(201).json(savedUser);  // Return the saved user object
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
