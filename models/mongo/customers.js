const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    c_fullname: String,
    c_tel: String,
});

module.exports = mongoose.model("customers", schema);