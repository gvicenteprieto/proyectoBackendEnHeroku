import { Router } from "express";
import passport from "passport";
import { isAuth } from "../middlewares/isAuth.js";
import { info } from "../utils/info.js";
//import { fork } from "child_process";
import compression from "compression";
import logger from "../utils/loggers.js";
import generateRandomProduct from "../class/fakerContainer.js";
import randomNumbers from "../utils/randomApi.js";

const listProducts = generateRandomProduct(10);

export const routerInfo = Router();
export const routerHandlebars = Router();

/*============================[Rutas Info]============================*/
routerInfo
  .get('/info', (req, res) => {
    logger.info(`Se registra petición GET /info`);
    res.json({ info: info() })
  })

  .get('/infoBloq', compression(), (req, res) => {
    console.log("infoBloq");
    logger.info(`Se registra petición GET /infoBloq`);
    res.json({ info: info() })
  })

  .get('/infoCompression', compression(), (req, res) => {
    logger.info(`Se registra petición GET /infoCompression`);
    res.json({ info: info() })
  })

  .get('/datos', (req, res) => {
    logger.info(`This process is pid at: ${process.pid} -> FyH: ${Date.now()} `)
    res.send(`This process is pid at: ${process.pid} -> FyH: ${Date.now()} `);
  })

  .get('/random', (req, res) => {
    let cant = req.query.cant || 100000;
    let numero = randomNumbers(cant);
    logger.info(`Generando ${cant} numeros aleatorios`);
    res.json({random: numero});
  })


/*============================[Rutas Views]============================*/
routerHandlebars
  
  .get('/productos', isAuth, (req, res) => {
    if (req.user.username) {
      const nombre = req.user.username
      const email = req.user.email
      logger.info(`Se registra petición GET /productos por ${nombre}`)
      res.render('faker', { listProducts, nombre, email })
    } else {
      logger.info(`Se registra petición GET /productos pero no esta autenticado, se redirige a /login`)
      res.redirect('/login')
    }
  })
  
  .get('/', (req, res) => {
    if (req.session.username) {
      const nombre = req.user.username
      const email = req.user.email
      logger.info(`Se registra petición GET / ${nombre} ${email}`)
      res.render('ingreso', { listProducts, nombre, email })
    } else {
      logger.info(`Se registra petición GET / pero no esta autenticado, se redirige a /login`)
      res.redirect('/login')
    }
  })
  
  .get('/login', (req, res) => {
    logger.info(`Se registra petición GET /login`)
    res.render('login');
  })

  .post('/login', passport.authenticate('login',
    { failureRedirect: '/login-error' }), (req, res) => {
      logger.info(`Se registra petición POST /login`)
      res.render('ingreso', { listProducts, nombre: req.user.username, email: req.user.email })
    })
  
  .get('/login-error', (req, res) => {
    logger.info(`Se registra petición GET /login-error`)
    res.render('login-error');
  })
  
  .get('/registro', (req, res) => {
    logger.info(`Se registra petición GET /registro`)
    res.render('registro');
  })
  
  .post('/registro', passport.authenticate('signup',
    { failureRedirect: '/registro-error' }), (req, res) => {
      logger.info(`Se registra petición POST /registro`)
      res.redirect('/login')
    })
  
  .get('/logout', (req, res) => {
    const nombre = req.user.username
    req.session.destroy((err) => {
      if (!err) {
        logger.info(`Se registra petición GET /logout por ${nombre}`)
        res.render('logout', { nombre });
      } else {
        logger.error(`Error al cerrar sesión por ${nombre}`)
        res.json(err);
      }
    })
  })

export default Router;