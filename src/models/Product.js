import mongoose from "mongoose";
export const Product = mongoose.model('product', new mongoose.Schema({
    name:  String,
    price: Number,
    stock: Number,
    url:   String,
    description: String,
    date: Date
}));