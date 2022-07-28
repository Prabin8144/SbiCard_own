const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    areYou: String,
    status: false,
    isCreditScore: false,
    isVerified: false,
})

const UserModel = mongoose.model("auth",UserSchema);

module.exports = UserModel;