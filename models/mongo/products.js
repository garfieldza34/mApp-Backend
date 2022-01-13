const mongoose =require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    product_id: String,
    product_name: String,
    product_price: Number,
})

module.exports = mongoose.model("products",schema);