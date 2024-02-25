const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: String,
  product: String,
  category: String,
  buyingPrice: Number,
  contactNumber: Number,
  supplierType: String,
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;