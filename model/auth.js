const mongoose = require("mongoose");


const Auth = mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
)

const AuthModel = mongoose.model('Auth',Auth)
module.exports = AuthModel