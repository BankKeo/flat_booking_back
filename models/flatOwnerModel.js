const mongoose = require("mongoose");

const flatOwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    surname: {
      type: String,
      trim: true,
      require: true,
    },
    tel: {
      type: String,
      trim: true,
      require: true,
    },
    village: {
      type: String,
      trim: true,
      require: true,
    },
    district: {
      type: String,
      trim: true,
      require: true,
    },
    province: {
      type: String,
      trim: true,
      require: true,
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FlatOwners", flatOwnerSchema);
