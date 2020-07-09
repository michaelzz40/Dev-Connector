const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const User = require("../../models/User");

// @route    GET api/posts
// @desc     Get all post
// @access   Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", ["name", "avatar"]);

    res.json(posts);
  } catch (err) {
    return res.json({ msg: err.message });
  }
});

// @route    POST api/posts
// @desc     Create new form
// @access   Private
router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;

  try {
    let newPost = new Post({
      user: req.user.id,
      title,
      description
    });

    await newPost.save();
    res.json({ posts: newPost, msg: "Posts created" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
