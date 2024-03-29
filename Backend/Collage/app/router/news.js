const { news } = require('../controller');
const { authJWT } = require('../middleware/auth');
const { fileUploader } = require('../middleware/fileUpload');

var router = require('express').Router();

module.exports = app => {

    router.post('/news',fileUploader,authJWT, news.create)
    router.get('/news', news.find)
    router.get('/news/:id', news.findOne)
    router.put('/news/:id',fileUploader, news.update)

    router.delete('/news/:id', news.delete)



    app.use('/api', router);
}