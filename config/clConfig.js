const cloudinary =  require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'hmvhobezm',
    api_key: '783757666958785',
    api_secret: 'gqyAAprCpK_c5aFlatRMx-omi5M'
})

const cloudinaryUploader = file => {
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
                        folder: 'Images'
                    }
                )
            }
        })
    })
}

module.exports = cloudinaryUploader;