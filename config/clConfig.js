const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const cloudinaryUploader = (file, folder) => {
    return new Promise(async resolve => {
        cloudinary.uploader.upload(file, {upload_preset: 'dear_diary'}, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                resolve(
                    {
                        url:result.url,
                        id: result.public_id,
                        date: result.created_at
                    },
                    {
                        resource_type: 'auto',
                        folder: folder
                    }
                )
            }
        })
    })
}

module.exports = cloudinaryUploader;