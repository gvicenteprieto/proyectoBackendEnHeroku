import mongoose from "mongoose";
import logger from "./utils/loggers.js";
import dotenv from "dotenv";
dotenv.config();

const mongoDB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/3E_DB";

//const mongoDB_URI =  "mongodb://localhost:27017/3E_DB";

(async () => {
    try {
        const db = await mongoose.connect(mongoDB_URI)
        logger.info('Conectado a mongoDB ' + db.connection.host + ':' + db.connection.port + '/' + db.connection.name);
    } catch (error) {
        logger.error(error);
    }
})();