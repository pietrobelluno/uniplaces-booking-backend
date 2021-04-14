const mongoose = require("../database");

const PropertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    units: {
      type: Array,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "properties" }
);

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
