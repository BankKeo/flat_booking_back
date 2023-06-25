const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    flatOwnerId: {
      type: String,
    },
    image: {
      type: Object,
      required: true,
    },
    flatName: {
      type: String,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
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
    googleMapLink: {
      type: String,
      trim: true,
      require: true,
    },
    isClose: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flats", flatSchema);
