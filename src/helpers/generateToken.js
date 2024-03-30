const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSign = async (usuario)=>{
    const {username} = usuario;
    return jwt.sign(
        {
            username
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"6h"
        }
    );
}

module.exports = {
    tokenSign
}