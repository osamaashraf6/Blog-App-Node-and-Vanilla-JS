const router = require("express").Router();
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
} = require("../controllers/post.js");

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);

module.exports = router;
