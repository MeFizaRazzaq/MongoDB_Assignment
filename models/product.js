const mongoose= require("mongoose");

const ProductSchema = mongoose.Schema({
    title: String,
    price: Number,
    tag: String,
});

const ProductModel = mongoose.model("Furniture",ProductSchema);
module.exports = ProductModel;