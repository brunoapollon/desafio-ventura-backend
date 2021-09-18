const { Router } = require('express');

const videoController = require('../controllers/VideoController');

const videoRouter = Router();

videoRouter.post('/', videoController.store);

module.exports = videoRouter;
