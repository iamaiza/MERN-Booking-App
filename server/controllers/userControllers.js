const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const resgisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, 10),
        });
        res.json(user);
    } catch (error) {
        res.status(422).json(error);
    }
};

module.exports = { resgisterUser }