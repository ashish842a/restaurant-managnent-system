const express = require('express');
const router = express.Router(); // Create a router instance
const orderController = require('../controllers/OrderController');

// Set up routes using the router
router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.cancelOrder);

module.exports = router;
