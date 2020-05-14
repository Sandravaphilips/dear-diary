const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { secret } = require('./getToken');
const variables = require('./variables');
const Users = require('../helpers/dbModel');

module.exports = {
    validateBody: function (req, res, next) {
        if (Object.keys(req.body).length !== 0 && req.body.constructor === Object) {
            next();
        } else {
            res.status(400).json({ message: variables.noBodyData });
        }
    },

    validateEmail: function (req, res, next) {
        const { email } = req.body;
        if (variables.mailRegex.test(email)) {
            next();
        } else {
            res.status(400).json({ message: variables.invalidEmail });
        }
    },

    validateUser: async function (req, res, next) {
        const { username, email, password } = req.body;
        const user = email !== undefined ? await Users.findUserBy({ email }).first() : undefined;
        if (username && email && password && req.path === "/register") {
            (user === undefined) ? next() : res.status(403).json({ message: variables.alreadyInUse });
        } else if (email && password && req.path === "/login") {
            req.user = user;
            (user && bcrypt.compareSync(password, user.password)) ? next() : res.status(401).json({ message: variables.invalid });
        } else {
            res.status(400).json({ message: variables.missingFields });
        }
    },

    restricted: function (req, res, next) {
        const token = req.headers.authorization;
        if (token) {
            jwt.verify(token, secret, (err, decodedToken) => {
                if (err) {
                    res.status(401).json({ message: variables.tokenInvalid });
                } else {
                    req.decodedToken = decodedToken;
                    next();
                }
            })
        } else {
            res.status(400).json({ message: variables.supplyToken });
        }
    }
}