const mongoose = require('mongoose');
const Order = require('../models/Order.model');

exports.createOrder = async (customer, orderData) => {
  try {
    console.log("create order route hit");
    const newOrder = new Order({
      customer,
      ...orderData, // Spread other order data
    });

    await newOrder.save();
    return newOrder;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Error creating order!');
  }
};

exports.getAllOrders = async () => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw new Error('Error fetching orders!');
  }
};

exports.getOrderById = async (id) => {
  try {
    const order = await Order.findById(id);
    return order;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw new Error('Error fetching order!');
  }
};

exports.updateOrder = async (id, updateData) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, updateData, { new: true });
    return updatedOrder;
  } catch (error) {
    console.error('Error updating order:', error);
    throw new Error('Error updating order!');
  }
};

exports.cancelOrder = async (id, reason) => {
  try {
    const order = await Order.findByIdAndUpdate(
      id,
      {
        status: 'Cancelled',
        reasonForCancellation: reason,
        cancelledAt: Date.now(),
      },
      { new: true }
    );

    if (!order) {
      throw new Error('Order not found!');
    }

    return order;
  } catch (error) {
    console.error('Error cancelling order:', error);
    throw new Error('Error cancelling order!');
  }
};
