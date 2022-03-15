const mongoose = require("mongoose");

const orderSchema = {
  orderId: { type: String, required: true },
  customerId: {},
};
