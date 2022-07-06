
import logger from "../utils/loggers.js";
import { Cart } from "../models/Cart.js";
import { Router } from "express";
export const routeCart = Router();

routeCart
    .get('/carrito', (req, res) => {
        logger.info(`Se registra petición GET /carrito`)
        Cart.find({}, (err, cart) => {
            if (err) {
                logger.error(`Error al obtener carrito`)
                res.json(err);
            } else {
                logger.info(`Se obtienen carrito`)
                res.json(cart);
            }
        })
    })

    .get('/carrito/:id', (req, res) => {
        logger.info(`Se registra petición GET /carrito/${req.params.id}`)
        Cart.findById(req.params.id, (err, cart) => {
            if (err) {
                logger.error(`Error al obtener carrito`)
                res.json(err);
            } else {
                logger.info(`Se obtiene carrito`)
                res.json(cart);
            }
        })
    })

    .post('/carrito', (req, res) => {
        logger.info(`Se registra petición POST /carrito`)
        const cart = {
            user: req.body.user,
            products: req.body.products
        }
        Cart.create(cart, (err, cart) => {
            if (err) {
                logger.error(`Error al crear carrito`)
                res.json(err);
            } else {
                logger.info(`Se crea carrito`)
                res.json(cart);
            }
        })
    })

    .put('/carrito/:id', (req, res) => {
        logger.info(`Se registra petición PUT /carrito/${req.params.id}`)
        const cart = {
            user: req.body.user,
            products: req.body.products
        }
        Cart.findByIdAndUpdate(req.params.id, cart, (err, cart) => {
            if (err) {
                logger.error(`Error al actualizar carrito`)
                res.json(err);
            } else {
                logger.info(`Se actualiza carrito`)
                res.json(cart);
            }
        })
    })

    .delete('/carrito/:id', (req, res) => {
        logger.info(`Se registra petición DELETE /carrito/${req.params.id}`)
        Cart.findByIdAndRemove(req.params.id, (err, cart) => {
            if (err) {
                logger.error(`Error al eliminar carrito`)
                res.json(err);
            } else {
                logger.info(`Se elimina carrito`)
                res.json(cart);
            }
        })
    })

    .get('/carrito/:id/productos', (req, res) => {
        logger.info(`Se registra petición GET /carrito/${req.params.id}/products`)
        Cart.findById(req.params.id, (err, cart) => {
            if (err) {
                logger.error(`Error al obtener carrito`)
                res.json(err);
            } else {
                logger.info(`Se obtiene carrito`)
                res.json(cart);
            }
        })
    })

    .post('/carrito/:id/productos', (req, res) => {
        logger.info(`Se registra petición POST /carrito/${req.params.id}/products`)
        Cart.findById(req.params.id, (err, cart) => {
            if (err) {
                logger.error(`Error al obtener carrito`)
                res.json(err);
            } else {
                cart.products.push(req.body.product);
                cart.save((err, cart) => {
                    if (err) {
                        logger.error(`Error al agregar producto al carrito`)
                        res.json(err);
                    } else {
                        logger.info(`Se agrega producto al carrito`)
                        res.json(cart);
                    }
                })
            }
        })
    })


    .delete('/carrito/:id/productos/:productoId', (req, res) => {
        logger.info(`Se registra petición DELETE /carrito/${req.params.id}/products/${req.params.productId}`)
        Cart.findById(req.params.id, (err, cart) => {
            if (err) {
                logger.error(`Error al obtener carrito`)
                res.json(err);
            } else {
                cart.products.pull(req.params.productId);
                cart.save((err, cart) => {
                    if (err) {
                        logger.error(`Error al eliminar producto del carrito`)
                        res.json(err);
                    } else {
                        logger.info(`Se elimina producto del carrito`)
                        res.json(cart);
                    }
                })
            }
        })
    })

export default routeCart;