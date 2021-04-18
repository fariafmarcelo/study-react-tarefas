// importa o express pois as rotas são definidas no servidor web
const express = require('express')

// programação funcional

module.exports = function(server) { //o parametro representa o servidor
    //cria um objeto de roteamento de rotas
    const router = express.Router()

    server.use('/api', router) // o servidor web via rotear a partir da rota /api

    // rota especifica para a tarefa
    const tarefaService = require('../api/tarefas/tarefasService')

     // rota especifica para o cliente
     const clienteService = require('../api/clientes/clientesService')

    // registra a rota de tarefas
    tarefaService.register(router, '/tarefas')

    // registra a rota de clientes
    clienteService.register(router, '/clientes')
}