require('dotenv/config');
const express = require('express');
const handleErros = require('./middlewares/handleErros');

const uploadConfig = require('./configs/uploadConfig');
const routes = require('./index.routes');

const app = express();

app.use(express.json());
app.use(handleErros);
app.use('/files', express.static(uploadConfig.dest));
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running on port 3333!');
});
