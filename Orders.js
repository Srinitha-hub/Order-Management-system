// Orders.js
const mongoose = require('mongoose');


const OrdersSchema = new mongoose.Schema({
  OrderID: String,
  CustomerName: String,
  ProductName: String,
  Quantidy: Number,
  Date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Orders', OrdersSchema);
