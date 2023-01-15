const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get("/pessoas", PessoaController.pegaTodaAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.post("/pessoas", PessoaController.criarPessoa);
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.delete("/pessoas/:id", PessoaController.apagarPessoa);

module.exports = router;