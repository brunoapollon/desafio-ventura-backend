const Video = require('../models/Video');

/**
 * controller de video com dois endpoints
 * o store tem verificação dos atributos requeridos no schema
 * caso falte algum uma exceção é lançada
 */

module.exports = {
  async store(request, response) {
    const { title, description, duration } = request.body;

    if (!title || !description || !duration) {
      throw new Error('Validation failed');
    }

    try {
      const video = await Video.create({ title, description, duration });

      return response.status(200).json(video);
    } catch (err) {
      throw new Error('error creating video');
    }
  },
  async index(request, response) {
    try {
      const findFiles = await Video.find();

      return response.status(200).json(findFiles);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
