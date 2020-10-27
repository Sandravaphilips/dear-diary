const multer = require('multer');

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/
    const mimetype = fileTypes.test(file.mimetype);

    if(mimetype) {
        cb(null, true)
    } else cb(null, false)
}

const upload = multer({
    storage: imageStorage, 
    limits: {fileSize: 1024*1024*5}, 
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb)
    }
});

module.exports = upload;