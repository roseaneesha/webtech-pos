const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  wineID: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  typeOfWine: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = Inventory = new mongoose.model("inventory", InventorySchema);
