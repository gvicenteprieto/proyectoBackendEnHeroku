import mongoose from "mongoose";
export const Product = mongoose.model('product', new mongoose.Schema({
    timestamp: {type: Date, default: Date.now},
    name:  {type: String},
    description: {type: String},
    code: {type: String},
    url: {type: String},
    price: {type: Number},
    stock: {type: Number}
}));
