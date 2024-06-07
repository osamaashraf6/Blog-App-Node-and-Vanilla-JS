require("./config.js");
const express = require("express");
const cors = require('cors');
const app = require("./config.js");
const postRoute = require("./routes/post");

app.use(express.json());
app.use(cors());
app.use("/api/posts", postRoute);
