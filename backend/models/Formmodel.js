const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    dob: String,
    mobile: String,
    salary: String,
    address: String,
    adhar: String,
    pan: String,
    id: String
})

const FormModel = mongoose.model("form",FormSchema);

module.exports = FormModel;