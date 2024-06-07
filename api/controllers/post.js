const Post = require("../models/Post");
//
const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json("Something wrong at creating post");
  }
};
//
const getPosts = async (req, res) => {
  const nQuery = req.query.new;
  try {
    let posts;
    if (nQuery) {
      const posts = await Post.find().sort({ _id: -1 }).limit(3);
      res.status(200).json(posts);
    } else {
      const posts = await Post.find();
      res.status(200).json(posts);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
//
const getPost = async (req, res) => {
  try {
    const getPost = await Post.findById(req.params.id);
    res.status(200).json(getPost);
  } catch (err) {
    res.status(500).json(err);
  }
};
//
const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted successfully");
  } catch (err) {
    res.status(500).json("Something wrong at deleting post");
  }
};

module.exports = { createPost, getPosts, getPost, deletePost };
