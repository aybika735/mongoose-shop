const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  reviews:[{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Review",
  }],
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;