const { Publicauthorities } = require('../controller');
const { authJWT } = require('../middleware/auth');
const { fileUploader } = require('../middleware/fileUpload');

var router = require('express').Router();

module.exports = app => {

    router.post('/Publicauthorities', fileUploader, authJWT, Publicauthorities.create)
    router.get('/Publicauthorities', Publicauthorities.find)
    router.get('/Publicauthorities/:id', Publicauthorities.findOne)

    router.put('/Publicauthorities/:id', fileUploader, Publicauthorities.update)
    router.delete('/Publicauthorities/:id', Publicauthorities.delete)



    app.use('/api', router);
}