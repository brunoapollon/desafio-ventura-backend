const { Router } = require('express');

const videoRouter = require('./routes/video.routes');

const routes = Router();

routes.use('/video', videoRouter);

module.exports = routes;
