const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    id: String,
    category: String,
    buyingPrice: Number,
    quantity: Number,
    unit: Number,
    thresholdValue: Number
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
