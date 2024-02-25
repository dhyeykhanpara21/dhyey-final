const app = require("express")();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const Product = require("./models/product.js");
const Supplier = require("./models/supplier.js");
const User = require("./models/user.js");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/suchiTracker")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// login
app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.query.email,
    password: req.query.password,
  });

  if (user) {
    res.send.json({
      message: "Login successful",
      success: true,
    });
  } else {
    res.send.json({
      message: "Login failed",
      success: false,
    });
  }
});

// Add a product to the database
app.post("/add-product", async (req, res) => {
  // get data from the request
  const { name, id, category, buyingPrice, quantity, unit, thresholdValue } =
    req.body;

  // create a new product
  const product = new Product({
    name,
    id,
    category,
    buyingPrice,
    quantity,
    unit,
    thresholdValue,
  });

  const result = await product.save();
  res.json({
    result,
    message: "Product added successfully",
    success: true,
  });
});

// Show all products in the database
app.get("/show-products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a supplier to the database
app.post("/add-supplier", async (req, res) => {
  // get data from the request
  const { name, product, category, buyingPrice, contactNumber, supplierType } =
    req.body;

  // create a new product
  const supplier = new Supplier({
    name,
    product,
    category,
    buyingPrice,
    contactNumber,
    supplierType,
  });

  const result = await supplier.save();
  res.json({
    result,
    message: "Supplier added successfully",
    success: true,
  });
});

// Show all suppliers from the database
app.get("/show-suppliers", async (req, res) => {
  const suppliers = await Supplier.find();
  res.json(suppliers);
});



// Listen to the port
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
