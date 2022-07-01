import "../database.js";
import { UsersModel } from "../models/usersModel.js";
import logger from "../utils/loggers.js";

export class UserDao {

    ID_FIELD = "_id";
    USERNAME_FIELD = 'username';

    async createUser(object) {
        try {
            return await UsersModel.create(object);
        } catch (error) {
            logger.error(error);
            return null;
        }
    }

    async loginUser(object) {
        try {
            const user = await UsersModel.findOne({
                [this.USERNAME_FIELD]: object.username
            });

            if (!user) {
                logger.info(`User '${object.username}' does not exist`)
                return null;
            }
            return await user.comparePassword(object.password);
        } catch (error) {
            logger.error(error);
            return null;
        }
    }
}