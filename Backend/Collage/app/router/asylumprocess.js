const { asylumprocess } = require('../controller');
const { authJWT } = require('../middleware/auth');
const { fileUploader } = require('../middleware/fileUpload');

var router = require('express').Router();

module.exports = app => {

    router.post('/asylumprocess', fileUploader, authJWT, asylumprocess.create)
    router.get('/asylumprocess', asylumprocess.find)
    router.get('/asylumprocess/:id', asylumprocess.findOne)

    router.put('/asylumprocess/:id',fileUploader, asylumprocess.update)
    router.delete('/asylumprocess/:id', asylumprocess.delete)


    app.use('/api', router);
}