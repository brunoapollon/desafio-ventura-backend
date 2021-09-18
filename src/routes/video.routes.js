const { Router } = require('express');

const multer = require('multer');
const uploadConfig = require('../configs/uploadConfig');
const videoController = require('../controllers/VideoController');
const UpdateThumbnailController = require('../controllers/UpdateThumbnailController');

const videoRouter = Router();

videoRouter.post('/', videoController.store);
videoRouter.patch(
  '/update_thumbnail/:video_id',
  multer(uploadConfig).single('thumbnail'),
  UpdateThumbnailController.update,
);

module.exports = videoRouter;
