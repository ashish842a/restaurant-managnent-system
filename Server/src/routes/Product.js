const express = require('express');
const router = express.Router(); // Create a router instance
const productController = require('../controllers/ProductController');

// Set up routes using the router
router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
