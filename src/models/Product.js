import mongoose from "mongoose";
export const Product = mongoose.model('product', new mongoose.Schema({
    timestamp: {type: Date, default: Date.now, required: true},
    name:  {type: String, required: true},
    description: {type: String, required: true},
    code: {type: String, required: true},
    url: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
}));
