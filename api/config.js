const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.listen(process.env.PORT_NOM, () => {
  console.log("Server is connected");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

  module.exports = app