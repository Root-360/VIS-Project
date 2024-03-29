const { offers } = require('../controller');
const { authJWT } = require('../middleware/auth');
const { fileUploader } = require('../middleware/fileUpload');

var router = require('express').Router();

module.exports = app => {

    router.post('/offers', fileUploader, authJWT, offers.create)
    router.get('/offers', offers.find)
    router.get('/offers/:id', offers.findOne)

    router.put('/offers/:id',fileUploader, offers.update)
    router.delete('/offers/:id', offers.delete)


    app.use('/api', router);
}