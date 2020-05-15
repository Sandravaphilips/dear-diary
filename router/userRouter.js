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

router.get('/gallery', async(req, res) => {
    try {
        const picture = await db.findPictureBy({userId: req.decodedToken.subject });
        res.status(201).json({ picture })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.get('/diary/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const diary = await db.findTextBy({ id });
        res.status(201).json({ diary })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.put('/diary/:id', validateBody, async(req, res) => {
    try {
        const id = req.params.id;
        const updatedDiary = await db.updateDiaryText(id, req.body);
        res.status(200).json({ message: variables.updatedEntry, updatedDiary });
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.delete('/gallery/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await db.removePicture(id);
        res.status(200).json({ message: variables.pictureRemoved('Picture') });
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

module.exports = router;