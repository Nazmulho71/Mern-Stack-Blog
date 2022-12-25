const express = require("express");
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");
const { Blog, validateBlog } = require("../models/blog");
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find().select("-__v");
  return res.send(blogs);
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).select("-__v");
  return res.send(blog);
});

router.post("/", [auth, validate(validateBlog)], async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
  });
  await blog.save();

  return res.send(blog);
});

router.put("/:id", [auth, validate(validateBlog)], async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content,
  });
  return res.send(blog);
});

router.delete("/:id", auth, async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  return res.send(blog);
});

module.exports = router;
