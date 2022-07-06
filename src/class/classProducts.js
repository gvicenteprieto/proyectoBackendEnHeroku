import mongoose from 'mongoose'
import logger from '../utils/loggers'
import { Mongo } from '../models/Mongo'

export default class Products {
  constructor() {
    this.mongo = new Mongo()
  }

  async getAllProducts() {
    try {
      const products = await this.mongo.productsMongo.find({})
      return products
    } catch (error) {
      logger.error(error)
      return error
    }
  }

  async saveProduct(product) {
    try {
      const newProduct = await this.mongo.productsMongo.create(product)
      return newProduct
    } catch (error) {
      logger.error(error)
      return error
    }
  }

  async getProductById(id) {
    try {
      const product = await this.mongo.productsMongo.findById(id)
      return product
    } catch (error) {
      logger.error(error)
      return error
    }
  }

    async updateProduct(id, product) {
    try {
      const updatedProduct = await this.mongo.productsMongo.findByIdAndUpdate(id, product, { new: true })
      return updatedProduct
    } catch (error) {
      logger.error(error)
      return error
    }
  }

    async deleteProduct(id) {
    try {
      const deletedProduct = await this.mongo.productsMongo.findByIdAndDelete(id)
      return deletedProduct
    } catch (error) {
      logger.error(error)
      return error
    }
  }
}


   