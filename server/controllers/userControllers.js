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

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const pass = bcrypt.compareSync(password, user.password);

    if (user) {
        if (pass) {
            jwt.sign(
                { email: user.email, id: user._id },
                process.env.JWT_SECRET,
                {},
                (err, token) => {
                    if (err) throw err;
                    res.cookie("token", token).json(user);
                }
            );
        } else {
            res.json("Entered password is wrong!");
        }
    } else {
        res.json("not found");
    }
};


module.exports = { resgisterUser, loginUser }