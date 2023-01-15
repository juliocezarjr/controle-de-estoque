const database = require('../models')

class PessoaController {

    static async pegaTodaAsPessoas(req, res) {
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa (req, res) {
        const {id} = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async criarPessoa (req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarPessoa (req, res) {
        const {id} = req.params;
        const novaInfo = req.body;
        try {
            await database.Pessoas.update(novaInfo, {where: {id: Number(id)}})
            const PessoaAtualizada = await database.Pessoas.findOne( {
                where: {id: Number(id)}
            })

            return res.status(200).json(PessoaAtualizada);
        } catch(error) {
            return res.status(500).json(`Não foi possível atualizar esse registro. Erro -> ${error.message}`)
        }
    }

    static async apagarPessoa (req, res) {
        const {id} = req.params;
        try{
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json(`Registro ${id} apagado com sucesso.`)
        } catch (error) {
            return res.status(500).json(`Não foi possível apagar esse registro. Erro -> ${error.message}`)
        }
    }

}

module.exports = PessoaController
