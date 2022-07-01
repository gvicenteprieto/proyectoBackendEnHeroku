import dotenv from "dotenv";
dotenv.config();
import { createTransport } from 'nodemailer';

const TEST_MAIL = process.env.TEST_MAIL;
const USER_MAIL_PASS = process.env.USER_MAIL_PASS;

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: USER_MAIL_PASS
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Correo de bienvenida!',
    html: '<h2 style="color: black;">Nos comunicamos a través de <span style="color: blue;"><i>Node.js</i></span> utilizando el servicio de <span style="color: green;"><i>Nodemailer</i></span></h2>.<br>' + '<h1 style="color: orange;">¡Le damos la bienvenida a nuestro Proyecto!</h1>'
}

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}