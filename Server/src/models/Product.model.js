const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: String,
    default: 'INR',
  },
  images: {
    type: [String],
    validate: (images) => images.length <= 5,
    message: 'Maximum 5 images allowed',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  ingredients: {
    type: [String],
  },
  allergens: {
    type: [String],
  },
  vegetarian: {
    type: Boolean,
  },
  vegan: {
    type: Boolean,
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
  averageRating: {
    type: Number,
    min: 0,
    max: 5,
  },
 
},{
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
