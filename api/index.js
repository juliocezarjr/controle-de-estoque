const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routers')

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

module.exports = app;