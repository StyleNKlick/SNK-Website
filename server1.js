const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const suggestions = require('./suggestions'); // Adjust path to your suggestions.js
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const nodemailer = require('nodemailer'); // For sending emails
const crypto = require('crypto'); // For generating OTPs
const User = require('./models/User'); // Assuming you have a User model
const OTP = require('./models/OTP'); // Assuming you have an OTP model

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
// Middleware
// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
const MONGO_URI = process.env.MONGO_URI || 'your-fallback-connection-string';
//MongoDb connection

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));

mongoose.connect('mongodb://localhost:27017/stylenklick_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Register a new user
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).json({ message: 'Registration failed. Username might already exist.' });
    }
});

// Login a user
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Increment login count
        user.loginCount += 1;
        await user.save();

        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ message: 'Login successful!', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed.' });
    }
});

// Middleware to authenticate users
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Token required.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

// Logout (just a client-side token invalidation in this case)
app.post('/api/logout', authenticate, (req, res) => {
    res.json({ message: 'Logout successful.' });
});



// API Endpoint for Styling Suggestions
app.post('/api/suggestions', (req, res) => {
    const { complexion, travelLocation, gender, size, styleType } = req.body;

    console.log('Received Request:', req.body); // Log incoming request for debugging

    try {
        const suggestionsForUser =
            suggestions[complexion]?.[styleType]?.[gender]?.[size]?.[travelLocation] ||
            suggestions[complexion]?.[styleType]?.[gender]?.[size] ||
            suggestions[complexion]?.[styleType]?.[gender] ||
            ['No suggestions available for the selected combination.'];

        // Log the path accessed and the suggestions fetched
        console.log('Suggestions Path:', `suggestions.${complexion}.${styleType}.${gender}.${size}.${travelLocation}`);
        console.log('Fetched Suggestions:', suggestionsForUser);

        // Respond with styling suggestions
        res.json({
            styling: suggestionsForUser,
            message: suggestionsForUser[0] === 'No suggestions available for the selected combination.'
                ? 'We couldn’t find suggestions for your selected preferences. Try adjusting your inputs!'
                : `Styling suggestions for a ${size} ${gender} traveling to a ${travelLocation} with a ${styleType} preference.`,
        });
    } catch (error) {
        console.error('Error fetching suggestions:', error.message); // Log error
        res.status(500).json({
            message: 'An error occurred while fetching suggestions.',
            error: error.message,
        });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
