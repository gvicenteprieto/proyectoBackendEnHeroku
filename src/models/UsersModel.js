import mongoose from "mongoose";

// export const User = mongoose.model('User', new mongoose.Schema({
//     name: String, 
//     username: String,
//     email: String,
//     password: String
// }));

import bcrypt from 'bcryptjs';
const SALT_FACTOR = 8;

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

Schema.pre("save", function (next) {
    const user = this

    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(SALT_FACTOR, function (saltError, salt) {
            if (saltError) {
                return next(saltError)
            } else {
                bcrypt.hash(user.password, salt, function (hashError, hash) {
                    if (hashError) {
                        return next(hashError)
                    }

                    user.password = hash
                    next()
                })
            }
        })
    } else {
        return next()
    }
})

Schema.methods.comparePassword = async function (password) {
    const valid = await bcrypt.compare(password, this.password)
    return valid;
}

export const UsersModel = mongoose.model("users", Schema);