// cria uma variável para definir a porta do servidor
const port = 3003

// importa a biblioteca body-parser
const bodyParser = require('body-parser')

// importa a biblioteca express
const express = require('express')

// cria um objeto de express e então temos o servidor
const server = express()

// faremos o servidor oferecer suporte a body-parser
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

// coloca o servidor para ficar ouvindo .....
server.listen(port, function() {
    console.log(`🚀 Backend is running on port ${port}`)
})

module.exports = server