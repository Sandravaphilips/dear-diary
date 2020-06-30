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

    validatePicture: function (req, res, next) {
        if (req.files !== undefined) {
            next();
        } else {
            res.status(400).json({ message: variables.choosePhoto });
        }
    },

    validateEmail: function (req, res, next) {
        const { emailAddress } = req.body;
        if (variables.mailRegex.test(emailAddress)) {
            next();
        } else {
            res.status(400).json({ message: variables.invalidEmail });
        }
    },

    validateUser: async function (req, res, next) {
        const { username, emailAddress, password } = req.body;
        const user = emailAddress !== undefined ? await Users.findUserBy({ emailAddress }).first() : undefined;
        if (username && emailAddress && password && req.path === "/register") {
            (user === undefined) ? next() : res.status(403).json({ message: variables.alreadyInUse });
        } else if (emailAddress && password && req.path === "/login") {
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
    },

    requestHeaders: function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', '*');
        if(req.method === 'OPTIONS'){
            res.headers('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
            return res.status(200).json({})
        }
        next()
    }
}