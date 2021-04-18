// importa biblioteca node-restful
const restful = require('node-restful')
// api restful vai trabalhar em cima do banco de dados mongodb
const mongoose = restful.mongoose

// define o esquema do banco de dados para operar as opções de get, post, put e delete
const clienteSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    nome: {type: String, required: true},
    cpf: {type: String, required: true},
    endereco: {type: String, required: true}
})

// exportando
module.exports = restful.model('EsquemaCliente', clienteSchema)