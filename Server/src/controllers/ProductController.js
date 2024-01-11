const Product = require('../models/Product.model'); // Import your Product model

class ProductController {
  // Create a new product
  async createProduct(req, res) {
    const { name, description, price, ...data } = req.body; // Extract product data from request body
    try {
      const newProduct = new Product({ ...data, name, description, price }); // Create a new product object
      await newProduct.save(); // Save the product to the database
      res.status(201).json({ message: 'Product created successfully!', product: newProduct });
    } catch (error) {
      res.status(500).json({ message: 'Error creating product!', error });
    }
  }

  // Get all products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find({}); // Find all products
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products!', error });
    }
  }

  // Get a product by ID
  async getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id); // Find product by ID
      if (!product) {
        return res.status(404).json({ message: 'Product not found!' });
      }
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product!', error });
    }
  }

  // Update a product
  async updateProduct(req, res) {
    const { id, ...data } = req.body; // Extract updated product data and ID
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true }); // Update product by ID
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found!' });
      }
      res.status(200).json({ message: 'Product updated successfully!', product: updatedProduct });
    } catch (error) {
      res.status(500).json({ message: 'Error updating product!', error });
    }
  }

  // Delete a product
  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      await Product.findByIdAndDelete(id); // Delete product by ID
      res.status(200).json({ message: 'Product deleted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product!', error });
    }
  }
}

module.exports = new ProductController();
