const User = require('../models/User');
const bcrypt = require('bcryptjs'); // For hashing passwords

// Register User
exports.registerUser = async (req, res) => {
    const { username, password, email, accountType } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already in use' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save user
        const user = new User({
            username,
            password: hashedPassword,
            email,
            accountType,
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

        res.status(200).json({
            message: 'Login successful',
            user: { _id: user._id, username: user.username, email: user.email, accountType: user.accountType },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
