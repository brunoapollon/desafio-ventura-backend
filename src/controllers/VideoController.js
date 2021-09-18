const Video = require('../models/Video');

module.exports = {
  async store(request, response) {
    const { title, description } = request.body;

    if (!title || !description) throw new Error('Validation failed');

    try {
      const video = await Video.create({ title, description });

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
