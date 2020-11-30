const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

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
        if (req.files && req.files.photo !== null) {
            next();
        } else {
            res.status(400).json({ message: variables.choosePhoto });
        }
    },

    validatePictureFormat: function(req, res, next) {
        const filetypes = /png|jpeg|jpg|gif/;
        
        if(filetypes.test(path.extname(req.files.photo.name))) {
            next();
        } else {            
            res.status(400).json({message: variables.notAccepted})
        }
    },

    validateImageSize: function(req, res, next) {
        const imageLimit = 1024*1024;
        if(req.files.photo.size <= imageLimit) {
            next()
        } else {
            res.status(400).json({message: variables.invalidSize})
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
    }
}