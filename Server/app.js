const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

const userRoutes = require('../Server/src/routes/index'); // Assuming correct path
const productRoutes = require('../Server/src/routes/Product'); // Assuming correct path
const orderRoutes = require('../Server/src/routes/Order'); 
const getintouchRoutes = require('../Server/src/routes/GetInTouch'); 

const app = express();
app.use(express.json()); // Parse incoming JSON bodies
app.use(cors()); // Enable CORS for cross-origin requests
app.use(logger('dev')); // Log requests in development

// Connect to MongoDB with robust error handling and connection monitoring
mongoose.connect('mongodb://localhost:27017/restaurant-management-system')
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.error('Error connecting to the database:', error.message))
    .finally(() => {
        mongoose.connection.on('disconnected', () => {
            console.error('MongoDB connection disconnected');
        });

        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });
    });

// Mount routes for different resources
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/getintouch', getintouchRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000; // Use environment variable if available
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
