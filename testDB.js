require('dotenv').config();
const connectDB = require('./config/db');

(async () => {
    await connectDB();
    console.log('Database connection test successful');
    process.exit();
})();
