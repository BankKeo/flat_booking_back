require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Routes
app.use("/flatOwner", require("./routes/flatOwnerRouter"));

// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI).then(console.log("Database Connnected"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
