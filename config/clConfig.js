const cloudinary =  require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'hmvhobezm',
    api_key: '783757666958785',
    api_secret: 'gqyAAprCpK_c5aFlatRMx-omi5M'
})

module.exports = cloudinary;