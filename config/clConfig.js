const cloudinary =  require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dy5jgdrwl',
    api_key: '865224866348467',
    api_secret: 'AihsXWBGvRfEer2iVI7Z3H6Bunc'
})

module.exports = cloudinary;