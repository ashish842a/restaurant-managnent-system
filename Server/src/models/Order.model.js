const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  // User information
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },

  // Order details
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  tableNumber: {
    type: Number,
  },
  deliveryAddress: {
    type: String,
  },
  orderItems: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    customizations: [String],
  }],
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: String,
    default: 'INR',
  },

  // Payment details
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Card', 'Online'],
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid'],
    default: 'Pending',
  },
  transactionId: {
    type: String,
  },

  // Order status
  status: {
    type: String,
    enum: ['Placed', 'Confirmed', 'Preparing', 'Ready', 'Delivered', 'Cancelled'],
    default: 'Placed',
  },
  placedAt: {
    type: Date,
    default: Date.now,
  },
  confirmedAt: {
    type: Date,
  },
  readyAt: {
    type: Date,
  },
  deliveredAt: {
    type: Date,
  },
  cancelledAt: {
    type: Date,
  },
  reasonForCancellation: {
    type: String,
  },

  // Notes and reviews
  notes: {
    type: String,
  },
  review: {
    type: Schema.Types.ObjectId,
    ref: 'Review',
  },
},{
  timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
