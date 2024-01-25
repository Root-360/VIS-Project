const { country } = require('../controller');
const { authJWT } = require('../middleware/auth');
const { fileUploader } = require('../middleware/fileUpload');

var router = require('express').Router();

module.exports = app => {

    router.post('/country',fileUploader,authJWT, country.create)
    router.get('/country', country.find)
    router.get('/country/:id', country.findOne)

    router.put('/country/:id',fileUploader, country.update)
    router.delete('/country/:id', country.delete)


    app.use('/api', router);
}