const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
  idOfWines: [{ type: mongoose.Schema.Types.ObjectId, ref: "inventory" }],
  totalPrice: { type: Number, required: true },
  dateOfPurchase: { type: Date, default: Date.now() },
  modeOfPayment: { type: String, required: true },
});
module.exports = Order = new mongoose.model("order", orderSchema);
