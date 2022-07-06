//import database from "./src/database.js";
import { Product } from "../../models/Product.js";
import logger from "../../utils/loggers.js";
import moment from "moment";

export const productDaos = {

    getAllProducts: async () => {
        logger.info(`Se registra petición GET /productos`);
        const products = await Product.find({});
        logger.info(`Se obtienen productos`);
        return products;
    },

    getProductById: async (id) => {
        logger.info(`Se registra petición GET /productos/${id}`);
        const product = await Product.findById(id);
        logger.info(`Se obtiene producto`);
        return product;
    },

    createProduct: async (product) => {
        logger.info(`Se registra petición POST /productos`);
        const newProduct = new Product(product);
        newProduct.createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
        newProduct.updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");
        const productCreated = await newProduct.save();
        logger.info(`Se crea producto`);
        return productCreated;
    },

    updateProduct: async (id, product) => {
        logger.info(`Se registra petición PUT /productos/${id}`);
        const productUpdated = await Product.findByIdAndUpdate(id, product, { new: true });
        logger.info(`Se actualiza producto`);
        return productUpdated;
    },

    deleteProduct: async (id) => {
        logger.info(`Se registra petición DELETE /productos/${id}`);
        const productDeleted = await Product.findByIdAndDelete(id);
        logger.info(`Se elimina producto`);
        return productDeleted;
    }
}


