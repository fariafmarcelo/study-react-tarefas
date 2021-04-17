// vamos definir as operações que a api vai realizar

// importa o esquema da tarefa
const Tarefa = require('./tarefas')

// define os métodos ou serviços
Tarefa.methods(['get', 'post', 'put', 'delete'])

// defube as opções quando faz update
Tarefa.updateOptions({new: true, runValidators: true})

// exporta para ser usada em outro arquivo
module.exports = Tarefa