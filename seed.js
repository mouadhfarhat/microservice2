require('dotenv').config();

const mongoose = require('mongoose');

// Use MONGO_URI from the .env file
const databaseUrl = process.env.MONGO_URI;

if (!databaseUrl) {
    console.error("MONGO_URI is undefined. Please check your .env file.");
    process.exit(1);
}

// Connect to the database
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds
})
    .then(() => console.log('Database connected'))
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    });

// Seed data
const seedData = async () => {
    try {
        // Seed logic here...
        console.log('Seeding completed successfully!');
        process.exit();
    } catch (err) {
        console.error('Error during seeding:', err);
        process.exit(1);
    }
};

// Run the seeder
seedData();
