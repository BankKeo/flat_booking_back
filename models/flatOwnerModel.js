const mongoose = require("mongoose");

const flatOwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      require: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
      require: true,
    },
    tel: {
      type: String,
      required: true,
      trim: true,
      require: true,
    },
    village: {
      type: String,
      required: true,
      trim: true,
      require: true,
    },
    district: {
      type: String,
      required: true,
      trim: true,
      require: true,
    },
    province: {
      type: String,
      required: true,
      trim: true,
      require: true,
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FlatOwners", flatOwnerSchema);
