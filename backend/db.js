const mongoose = require("mongoose");
require("dotenv").config();
const mongodb_url = process.env.MONGODB_URL;

// const connection = mongoose.connect(mongodb_url);
const connection = mongoose.connect("mongodb://127.0.0.1:27017/mcard_users");

module.exports = connection;