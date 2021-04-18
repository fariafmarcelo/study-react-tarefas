// vamos definir as operações que a api vai realizar
// importa o esquema da tarefa
const EsquemaCliente = require('./clientes')

// define os métodos ou serviços
EsquemaCliente.methods(['get', 'post', 'put', 'delete'])

// defube as opções quando faz update
EsquemaCliente.updateOptions({new: true, runValidators: true})

// exporta para ser usada em outro arquivo
module.exports = EsquemaCliente