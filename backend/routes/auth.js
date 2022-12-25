const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is not correct.");

  const password = await bcrypt.compare(req.body.password, user.password);
  if (!password)
    return res.status(400).send("Email or password is not correct.");

  const token = jwt.sign({ _id: user._id }, config.get("prvtKey"));
  return res.send(token);
});

function validate(user) {
  const schema = Joi.object({
    email: Joi.string().max(255).required(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

module.exports = router;
