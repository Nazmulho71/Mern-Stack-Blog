const mongoose = require("mongoose");
const Joi = require("joi");

const blogSchema = new mongoose.Schema({
  title: { type: String, min: 5, max: 255, required: true },
  date: { type: Date, default: Date.now(), required: true },
  content: { type: String, min: 5, max: 2555, required: true },
});

const Blog = mongoose.model("Blog", blogSchema);

function validateBlog(blog) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(255).required(),
    content: Joi.string().min(5).max(2555).required(),
  });

  return schema.validate(blog);
}

exports.Blog = Blog;
exports.validateBlog = validateBlog;
