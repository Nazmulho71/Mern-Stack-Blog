const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: { type: String, maxLength: 255, required: true },
  email: { type: String, maxLength: 255, required: true },
  password: { type: String, minLength: 5, maxLength: 255, required: true },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().max(255).required(),
    email: Joi.string().max(255).required(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
