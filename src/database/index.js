const mongoose = require('mongoose');

mongoose.connect(process.env.URL_MONGO_DARABASE);

mongoose.Promise = global.Promise;

module.exports = mongoose;
