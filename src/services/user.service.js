const User = require('../database/models/user.model');
const bcrypt = require('bcrypt');
const login = async (newUser) => {
    console.log(newUser);
    const { user, password } = newUser;
    try {
        const userFound = await User.findOne().where({ username: user });
        if (userFound == null) {
            return null;
        }
        const isPassword = await bcrypt.compare(password, userFound.password);
        console.log(isPassword);
        console.log(userFound);
        if (!isPassword) {
            return false;
        }
        return {
            flag: true,
            user: userFound,
        };
    } catch (error) {
        return error;
    }
}

const createUser = async (newUser) => {
    const { password, username } = newUser;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        password: passwordHash,
    });
    try {
        await user.save();
        return true;
    } catch (error) {
        return error;
    }
}
const getUserById = async (id) => {
    const user = User.findById(id);
    return user;
}


module.exports = {
    login,
    createUser,
    getUserById
}