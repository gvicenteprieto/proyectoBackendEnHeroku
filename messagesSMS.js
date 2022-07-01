import dotenv from "dotenv";
dotenv.config();
import twilio from 'twilio';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const telFrom = process.env.TWILIO_PHONE_NUMBER_SMS;
const telTo = process.env.PHONE_NUMBER;

client.messages
    .create({
        body: 'Mensaje de Bienvenida! utilizando el servicio de Twilio',
        from: telFrom,
        to: telTo
    })
    .then(message => console.log(message.sid));