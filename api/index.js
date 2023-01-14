const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (req, res) => {
    res.status(200).send({mensagem: 'A API está funcionando bem.'})

})

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))