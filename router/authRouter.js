const router = require('express').Router();
const bcrypt = require('bcryptjs');

const db = require('../helpers/dbModel');
const { regWelcome, errorMessage, loginWelcome } = require('../helpers/variables');
const { getToken } = require('../helpers/getToken');

router.post('/register', async (req, res) => {
    const { password } = req.body;
    const hash = bcrypt.hashSync(password, 15);
    req.body.password = hash;
    try {
        const user = await db.addUser(req.body);
        const token = await getToken(user);
        delete user.password;
        res.status(201).json({ message: regWelcome(user.firstName), token, user })
    }
    catch (error) {
        res.status(500).json({ message: errorMessage, error: error.message });
    }
});

router.post('/login', (req, res) => {
    try {
        const token = getToken(req.user);
        const user = req.user;
        delete user.password;
        res.status(200).json({ message: loginWelcome(user.firstName), token, user })
    }
    catch (error) {
        res.status(500).json({ message: errorMessage, error: error.message });
    }
})

module.exports = router;