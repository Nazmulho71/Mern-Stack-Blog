const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/blog")
  .then(() => console.log("Successfully connected to the database."))
  .catch(() => console.log("Cannot connect to the database."));

app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server listening port on ${port}...`));
