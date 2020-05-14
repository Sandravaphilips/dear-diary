const jwt = require('jsonwebtoken');

module.exports = {
    secret : 'hjvf61098IHIH980',

    getToken: function (user) {
        const payload = {
            subject: user.id,
            username: user.username
        };
        const options = {
            expiresIn: '5h'
        };
        return jwt.sign(payload, this.secret, options)
    }
}