const fs = require('fs');
const path = require('path');

const Video = require('../models/Video');
const uploadConfig = require('../configs/uploadConfig');

/**
 * o controller pra atualizar a url do video cadastrado
 * como no insomnia não é possivel enviar tudo de uma vez
 * esse controller é responsavel pelo redirecionamento do arquivo para a pasta
 * uploads e atualizar a url no banco
 */

module.exports = {
  async update(request, response) {
    const { video_id } = request.params;
    const { file } = request;

    if (!video_id || !file) throw new Error('Validation failed');

    const findVideo = await Video.findOne({ id: video_id });

    if (findVideo.url) {
      const splitUrlThumbnil = findVideo.urlThumbnail.split('/');
      const fileNameDelete = splitUrlThumbnil[splitUrlThumbnil.length - 1];

      fs.promises.unlink(path.resolve(uploadConfig.dest, fileNameDelete));
    }

    const url = `${process.env.URL_LOCALHOST}/files/${file.filename}`;

    try {
      await Video.findOneAndUpdate({ id: video_id }, { url });

      return response.status(200).json({ message: 'update successfully' });
    } catch (err) {
      throw new Error('update falied');
    }
  },
};
