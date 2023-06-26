const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    flatOwnerId: {
      type: String,
    },
    price: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    amountOfRoom: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("room", roomSchema);
