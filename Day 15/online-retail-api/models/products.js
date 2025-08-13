const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  price: Number,
  brand: String,
  stock: Number,
  attributes: {
    color: String,
    connectivity: String,
    batteryLife: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);
