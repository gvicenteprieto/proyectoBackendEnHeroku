// const path = require('path');

// /* ---------------------- Middlewares ---------------------- */
// app.use(express.static('public'));
// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images/uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()} - ${file.originalname }`)
//     }
// });

// const upload = multer({storage: storage});

// /* ---------------------- Rutas ----------------------*/
// app.post('/guardar', upload.single('miArchivo'), (req, res, next)=>{
//     const file = req.file
//     if (!file) {
//         const err = new Error('Favor agregar archivo');
//         return next(err);
//     } else {
//         res.status(200).json({msg:'Archivo subido satisfactoriamente'});   
//     }
// });

import express from 'express';
import multer from 'multer';
import { logger } from './src/utils/logger.js';
const upload = multer({
    dest: 'uploads/'
});

app.post ('/profile', upload.single('avatar'), (req, res) => {
    console.log(req.file);
    res.send();
});

app.post('/photos/upload.js', upload.array('photos', 12), (req, res) => {
    console.log(req.files);
    res.send();
});

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);

app.post ('/cool-profile', cpUpload, (req, res) => {
    console.log(req.files);
    res.send();
});



