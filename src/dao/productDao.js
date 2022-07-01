import "../database.js";
import { ProductsModel } from "../models/ProductsModel.js";
import logger from "../utils/loggers.js";

export class ProductDao {
    ID_FIELD = "_id";

    static async exists(id) {
        try {
            return await ProductsModel.findById(id);
        } catch (error) {
            logger.error(error);
        }
    }

    async getAllProducts() {
        try {
            return await ProductsModel.find();
        }
        catch (error) {
            logger.log(error);
        }
    }

    async createProduct(product) {
        try {
            return await ProductsModel.create(product);
        }
        catch (error) {
            logger.log(error);
        }
    }


    async getProductsById(id) {
        try {
            return await ProductsModel.findById(id);
        }
        catch (error) {
            logger.log(error);
        }
    }

    async updateProductById(id, product) {
        try {
            return await ProductsModel.findByIdAndUpdate(id, product);
        }
        catch (error) {
            logger.log(error);
        }
    }

    async deleteProductById(id) {
        try {
            return await ProductsModel.findByIdAndDelete(id);
        }
        catch (error) {
            logger.log(error);
        }
    }

    async getProductsByCode(code) {
        try {
            return await ProductsModel.findOne({ code: code });
        }
        catch (error) {
            logger.log(error);
        }
    }

    async getProductsByTitle(title) {
        try {
            return await ProductsModel.findOne({ title: title });
        }
        catch (error) {
            logger.log(error);
        }
    }

    async getProductsByPrice(price) {
        try {
            return await ProductsModel.findOne({ price: price });
        }
        catch (error) {
            logger.log(error);
        }
    }
}