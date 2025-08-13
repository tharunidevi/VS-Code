const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderDate: { type: Date, required: true },
  status: String,
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  totalCost: Number,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
