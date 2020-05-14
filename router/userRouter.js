const router = require('express').Router();
const db = require('../helpers/dbModel');
const variables = require('../helpers/variables');
const { validateBody } = require('../helpers/middleware');

router.post('/diary', validateBody, async(req, res) => {
    try {
        const newPost = await db.addDiaryText({ ...req.body, userId: req.decodedToken.subject });
        res.status(201).json({ message: variables.newEntry, newPost })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.post('/gallery', validateBody, async(req, res) => {
    try {
        const newPicture = await db.addPicture({ ...req.body, userId: req.decodedToken.subject });
        res.status(201).json({ message: variables.newEntry, newPicture })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.post('/gallery', validateBody, async(req, res) => {
    try {
        const newPicture = await db.addPicture({ ...req.body, userId: req.decodedToken.subject });
        res.status(201).json({ message: variables.newEntry, newPicture })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})