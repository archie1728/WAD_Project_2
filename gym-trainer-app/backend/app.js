// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json()); // To handle JSON data

// Connect to MongoDB
mongoose.connect('mongodb+srv://wad1:12341234@atlascluster.em5og.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Use routes
app.use('/api/auth', authRoutes); // Add this line to connect the auth routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
