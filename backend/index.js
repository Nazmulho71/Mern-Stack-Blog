const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./routes/auth");
const users = require("./routes/users");
const blogs = require("./routes/blogs");
const app = express();

mongoose
  .connect("mongodb://localhost/blog")
  .then(() => console.log("Successfully connected to the database."))
  .catch(() => console.log("Cannot connect to the database."));

app.use(cors());
app.use(express.json());
app.use("/auth", auth);
app.use("/users", users);
app.use("/api/blogs", blogs);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server listening port on ${port}...`));
