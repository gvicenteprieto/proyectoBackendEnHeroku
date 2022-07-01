import "../database.js";
import { CartModel } from "../models/cartModel.js";
import logger from "../utils/loggers.js";

export class CartDao {

    ID_FIELD = "_id";

    async createCart() {
        try {
            return await CartModel.create({});
        } catch (error) {
            logger.error(error);
            //return false;
        }
    }

    async deleteCartById(id) {
        try {
            return await CartModel.findByIdAndDelete({ [this.ID_FIELD]: id })
        } catch (error) {
            logger.error(error);
        }
    }

    async saveProductToCart(id, obj) {
        try {
            const cart = await CartModel.findById(id)
            cart.products.push(obj.productId);
            cart.save();
            return true;
        } catch (error) {
            logger.error(error);
        }
    }

    async deleteProductFromCart(id, productId) {
        try {
            const cart = await CartModel.findById(id);
            cart.products.remove(productId);
            cart.save();
            return true;
        } catch (error) {
            logger.error(error);
        }
    }

    async getAllProductsFromCart(id) {
        try {
            return await CartModel.findById(id).populate('products').select({ products: 1, _id: 0 });
        } catch (error) {
            logger.error(error);
            //return false;
        }
    }
}