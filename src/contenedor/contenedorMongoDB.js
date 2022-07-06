import mongoose from "mongoose";
import { Product } from "../models/Product.js";

class product {
  constructor() {
    this.product = [];
  }

  async getAllProducts() {
    try {
      const listProducts = await Product.find({});
      return listProducts;
    } catch (err) {
      return err;
    }
  }

  async createProduct(product) {
    try {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        url: product.url,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
      };
      await Product.create(newProduct);
      return newProduct;
    } catch (err) {
      return err;
    }
  }

  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      return product;
    } catch (err) {
      return err;
    }
  }

  async updateProduct(id, product) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product);
      return updatedProduct;
    } catch (err) {
      return err;
    }
  }
}

export default new product();