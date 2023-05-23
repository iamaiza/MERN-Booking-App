const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req.cookies.token

    if(!token) res.json("Invalid Token")

    jwt.verify(token, process.env.JWT_SECRET, {}, (err, decoded) => {
        if(err) throw err;

        req.userData = decoded;
        next();
    })
}

module.exports = verifyUser