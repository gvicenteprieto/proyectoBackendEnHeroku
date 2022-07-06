import Mongo from "../../models/Mongo.js";
import Products from "../../class/classProducts.js";
import logger from "../../utils/loggers.js";
import moment from "moment";

export class productDaos  {
    constructor() {
        this.mongo = new Mongo();
        this.products = new Products();
    }
    async getAllProducts() {
        try {
            const products = await this.products.getAllProducts();
            return products;
        } catch (err) {
            logger.error(err);
            return err;
        }
    }
    async saveProduct(product) {
        try {
            const newProduct = {
                timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
                name: product.name,
                price: product.price,
                description: product.description,
                url: product.url,
                code: product.code,
                stock: product.stock,
                createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
                updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
            };
            const productCreated = await this.products.saveProduct(newProduct);
            return productCreated;
        } catch (err) {
            logger.error(err);
            return err;
        }
    }

    async getProductById(id) {
        try {
            const product = await this.products.getProductById(id);
            return product;
        } catch (err) {
            logger.error(err);
            return err;
        }
    }
    async updateProduct(id, product) {
        try {
            const updatedProduct = {
                timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
                name: product.name,
                price: product.price,
                description: product.description,
                url: product.url,
                code: product.code,
                stock: product.stock,
                updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
            };
            const productUpdated = await this.products.updateProduct(id, updatedProduct);
            return productUpdated;
        } catch (err) {
            logger.error(err);
            return err;
    }
    }
    async deleteProduct(id) {
        try {
            const product = await this.products.deleteProduct(id);
            return product;
        } catch (err) {
            logger.error(err);
            return err;
        }
    }
}
export default productDaos;

        