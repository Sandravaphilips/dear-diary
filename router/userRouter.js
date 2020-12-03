const router = require('express').Router();
const fileUpload = require('express-fileupload');
const db = require('../helpers/dbModel');
const variables = require('../helpers/variables');
const { validateBody, validatePicture, validatePictureFormat, validateImageSize } = require('../helpers/middleware');
const cloudinaryUploader = require('../config/clConfig');

router.use(fileUpload({
    useTempFiles: true
}))

router.post('/diary', validateBody, async(req, res) => {
    try {
        const newPost = await db.addDiaryText({ ...req.body, userId: req.decodedToken.subject });

        res.status(201).json({ message: variables.newEntry, newPost })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.post('/gallery', validatePicture, validatePictureFormat, validateImageSize, async(req, res) => {
    try {
        const file = req.files.photo;
        const date = req.body.date;
        const image = await cloudinaryUploader(file.tempFilePath, "Images");
        const newPicture = await db.addPicture({date: date, picture: image.url, userId: req.decodedToken.subject });

        res.status(201).json({ message: variables.pictureAdded, newPicture })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.get('/gallery/:date', async(req, res) => {
    try {
        const date = req.params.date;
        const pictures = await db.findPictureBy({userId: req.decodedToken.subject, date });

        res.status(200).json({ pictures })
    }
    catch (error) {
        res.status(500).json({ message: variables.errorMessage, error: error.message })
    }
})

router.get('/diary/:date', async(req, res) => {
    try {
        const date = req.params.date;
        const diary = await db.findTextBy({ userId: req.decodedToken.subject, date });

        res.status(200).json({ diary })
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