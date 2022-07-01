import dotenv from "dotenv";
dotenv.config();
import twilio from 'twilio';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const telTo = process.env.PHONE_NUMBER;
const telFrom = process.env.TWILIO_PHONE_NUMBER_WHATSAPP;
//whastapp: enviar mensaje a twilio = join tobacco-fireplace
client.messages
    .create({
        //mediaUrl: 'https://demo.twilio.com/owl.png',
        from: 'whatsapp:' + telFrom,
        body: '🛰️ Le damos la bienvenida! 🌎 mensaje enviado desde Node.js a través de Twilio!📱',
        to: 'whatsapp:' + telTo
    })
    .then(message => console.log(message.sid));
