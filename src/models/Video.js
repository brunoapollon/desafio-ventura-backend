const uuid = require('uuid');
const mongoose = require('../database');

const VideoSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: uuid.v4(),
  },
  title: {
    type: String,
    requiered: true,
  },
  description: {
    type: String,
    requiered: true,
  },
  url: {
    type: String,
    default: '',
  },
  urlThumbnail: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
