const mongoose = require("mongoose");

const flatOwnerAccountSchema = new mongoose.Schema(
  {
    flatOwnerId: {
      type: String,
    },
    username: {
      type: String,
      trim: true,
      require: true,
    },
    password: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FlatOwnersAccount", flatOwnerAccountSchema);
