import { productDaos } from "../daos/mongo/productDaos.js";
import logger from "../utils/loggers.js";
export const productController = {
  getAllProducts: async () => {
    logger.info(`Se registra petición GET /productos`);
    const products = await productDaos.getAllProducts();
    logger.info(`Se obtienen productos`);
    return products;
  },

  getProductById: async (id) => {
    logger.info(`Se registra petición GET /productos/${id}`);
    const product = await productDaos.getProductById(id);
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
    const productUpdated = await productDaos.updateProduct(id, product);
    logger.info(`Se actualiza producto`);
    return productUpdated;
  },

  deleteProduct: async (id) => {
    logger.info(`Se registra petición DELETE /productos/${id}`);
    const productDeleted = await productDaos.deleteProduct(id);
    logger.info(`Se elimina producto`);
    return productDeleted;
  }
}









// class productController {
//   constructor() {
//     this.product = [];
//   }

//   async getAllProducts() {
//     try {
//       const listProducts = await product.getAllProducts();
//       return listProducts;
//     } catch (err) {
//       return err;
//     }
//   }

//   async createProduct(product) {
//     try {
//       const newProduct = {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         description: product.description,
//         url: product.url,
//         createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
//         updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
//       };
//       await product.createProduct(newProduct);
//       return newProduct;
//     } catch (err) {
//       return err;
//     }
//   }

//   async getProductById(id) {
//     try {
//       const product = await product.getProductById(id);
//       return product;
//     } catch (err) {
//       return err;
//     }
//   }

//   async updateProduct(id, product) {
//     try {
//       const updatedProduct = await product.updateProduct(id, product);
//       return updatedProduct;
//     } catch (err) {
//       return err;
//     }
//   }

//   async deleteProduct(id) {
//     try {
//       const deletedProduct = await product.deleteProduct(id);
//       return deletedProduct;
//     } catch (err) {
//       return err;
//     }
//   }

// }

// export default new productController();