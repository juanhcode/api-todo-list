const userService = require('../services/user.service');
const generateToken = require('../helpers/generateToken');
const login = async (req, res) => {
    const { user, password } = req.body;
    const isUser = {
        user,
        password
    }
    const isLoggedIn = await userService.login(isUser);
    if (isLoggedIn == null) {
        res.status(401).send({
            message: "Datos incorrectos"
        });
    } else {
        if (isLoggedIn.flag) {
            const token = await generateToken.tokenSign(isLoggedIn?.user);
            res.status(200).send({
                token,
            });
            return;
        }else{
            res.status(401).send({
                message: "Datos incorrectos"
            });
        }
    }
}

const register = (req, res) => {
    const { password, username } = req.body;
    const user = {
        username,
        password
    }
    const response = userService.createUser(user);
    if (response) {
        res.status(201).send({
            message: "Usuario Registrado",
        })
    } else {
        res.send(response);
    }
}

module.exports = {
    register,
    login
}