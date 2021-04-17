// importa biblioteca node-restful
const restful = require('node-restful')
const mongoose = restful.mongoose

const tarefaSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    realizada: {type: Boolean, required: true, default: true},
    criadaEm: {type: Date, default: Date.now}
})

// exportando
module.exports = restful.model('EsquemaTarefa', tarefaSchema)