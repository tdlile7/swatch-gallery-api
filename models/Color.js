const mongoose = require("mongoose");

const ColorSchema = mongoose.Schema({
  hexCode: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  }
});

const Color = mongoose.model("Color", ColorSchema);

exports.Color = Color;
