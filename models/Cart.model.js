const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  shop: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
  
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;