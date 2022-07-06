import mongoose from "mongoose";
import { Product } from "../models/Product.js";
import {User } from "../models/User.js";

export const Cart = mongoose.model("cart", new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product"
            },
            quantity: Number
        }
    ]
}));

