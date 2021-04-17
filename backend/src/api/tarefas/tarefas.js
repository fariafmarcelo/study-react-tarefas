// importa biblioteca node-restful
const restful = require('node-restful')
// api restful vai trabalhar em cima do banco de dados mongodb
const mongoose = restful.mongoose

// define o esquema do banco de dados para operar as opções de get, post, put e delete
const tarefaSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    realizada: {type: Boolean, required: true, default: false},
    criadaEm: {type: Date, default: Date.now},
    quem: {type: String, required: true},
    onde: {type: String, required: true},
    prioridade: {type: Number, required: true}
})

// exportando
module.exports = restful.model('EsquemaTarefa', tarefaSchema)