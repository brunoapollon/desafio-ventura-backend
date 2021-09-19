const { Router } = require('express');

const multer = require('multer');
const uploadConfig = require('../configs/uploadConfig');
const videoController = require('../controllers/VideoController');
const UpdateThumbnailController = require('../controllers/UpdateThumbnailController');
const UpdateVideoController = require('../controllers/UpdateVideoController');

const videoRouter = Router();

/**
 * as rotas foram divididas em pasta
 * como foi pedido que fosse tratado como um projeto real
 * caso haja muitas rotas, costumo utilizar separação das rotas por arquivos
 * e deixar um arquivo index responsavel por gerenciar todas as rotas
 */

videoRouter.post('/', videoController.store);

videoRouter.get('/', videoController.index);

videoRouter.patch(
  '/update_thumbnail/:video_id',
  multer(uploadConfig).single('thumbnail'),
  UpdateThumbnailController.update,
);
videoRouter.patch(
  '/update_video/:video_id',
  multer(uploadConfig).single('video'),
  UpdateVideoController.update,
);

module.exports = videoRouter;
