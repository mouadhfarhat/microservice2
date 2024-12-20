const Report = require('../models/Report');

exports.createReport = async (req, res) => {
    try {
        const report = await Report.create(req.body);
        res.status(201).json(report);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find(req.query);
        res.status(200).json(reports);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(200).json(report);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(200).json(report);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndDelete(req.params.id);
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
