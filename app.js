const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Import routes
const chatRoutes = require('./routes/chatRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const reportRoutes = require('./routes/reportRoutes');
const serviceRequestRoutes = require('./routes/serviceRequestRoutes');
const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clientRoutes');
const freelancerRoutes = require('./routes/freelancerRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();


// CORS configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // This allows cookies to be sent with requests if needed
};

app.use(cors(corsOptions));  // Enable CORS
app.use(bodyParser.json());  // Parse incoming request bodies as JSON
app.use(express.json());  // This parses JSON bodies for POST requests



// Connect to Database
connectDB();  // Make sure this function is correctly defined and connects to your DB

// Register routes
app.use('/api/chats', chatRoutes);  // Chats routes
app.use('/api/ratings', ratingRoutes);  // Ratings routes
app.use('/api/reports', reportRoutes);  // Reports routes
app.use('/api/service-requests', serviceRequestRoutes);  // Service request routes
app.use('/api/users', userRoutes);  // User-related routes
app.use('/api/clients', clientRoutes);  // Client-related routes
app.use('/api/freelancers', freelancerRoutes);  // Freelancer-related routes
app.use('/api/admin', adminRoutes);  // Admin routes

// Health check route
app.get('/', (req, res) => {
    res.status(200).send('Microservice2 is up and running!');
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error details to the console
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    });
});

// Define the port to listen on
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received. Closing HTTP server gracefully.');
    process.exit(0);  // Graceful shutdown process
});

module.exports = app;
