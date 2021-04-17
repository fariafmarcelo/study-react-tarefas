// importa a biblioteca mongoose
const mongoose = require('mongoose')
// configuração do mongoDB para a requisição/resposta Promise
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/tarefas')