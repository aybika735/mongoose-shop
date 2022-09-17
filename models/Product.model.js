const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  color: String,
  price: Number,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  reviews:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Review",
  },
  brand:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Brand",
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;