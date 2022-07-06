import { Router } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const TEST_MAIL = process.env.TEST_MAIL;
const USER_MAIL_PASS = process.env.USER_MAIL_PASS;

const routerNodemailer = Router();

routerNodemailer.post("/send-email", async (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(req.body);

    const contentHTML = `
        <h2 style="color: black;">Nos comunicamos a través de <span style="color: blue;"><i>Node.js</i></span> utilizando el servicio de <span style="color: green;"><i>Nodemailer</i></span></h2>.<br>
        <h1 style="color: orange;">¡Le damos la bienvenida a nuestro Proyecto!</h1>
        <h2 style="color: black;">Nombre: ${name}</h2>
        <h2 style="color: black;">Email: ${email}</h2>
        <h2 style="color: black;">Teléfono: ${phone}</h2>
        <h2 style="color: black;">Mensaje: ${message}</h2>
    `;
    //console.log(contentHTML);
    /*
    nodemailer.createTestAccount((err, account) => {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });
        const mailOptions = {
            from: 'Servidor Node.js',
            to: account.user,
            subject: 'Correo de bienvenida!',
            html: contentHTML
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    message: "Error al enviar el correo",
                    error
                });
            } else {
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.status(200).json({
                    ok: true,
                    message: "Correo enviado correctamente"
                });
            }
        });
    });
    */
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: TEST_MAIL,
            pass: USER_MAIL_PASS
        }
    });

    transporter.sendMail({
        from: 'Servidor Node.js',
        to: TEST_MAIL,
        subject: 'Le damos la bienvenida ' + name,
        html: contentHTML
    }, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                message: "Error al enviar el correo",
                error
            });
        } else {
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(200).json({
                ok: true,
                message: "Correo enviado correctamente"
            });
        }
    });
});

export default routerNodemailer;