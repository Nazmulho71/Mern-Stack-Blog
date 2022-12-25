const express = require("express");
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validate = require("../middleware/validate");
const { User, validateUser } = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post("/", validate(validateUser), async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = jwt.sign({ _id: user._id }, config.get("prvtKey"));

  return res
    .header("X-Auth-Token", token)
    .send({ _id: user._id, name: user.name, email: user.email, token });
});

router.put("/:id", validate(validateUser), async (req, res) => {
  const salt = await bcrypt.genSalt(10);

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
    },
    { new: true }
  );
  if (!user) return res.status(404).send("User not found.");

  return res.send(user);
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.send(user);
});

module.exports = router;
