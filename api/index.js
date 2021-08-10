const express = require('express')
const servidor = express()

servidor.get(
    '/', (req, res, next) => {
        return res.send({
            "mensagem": "Bem-vindo(a) ao servidor",
            "cidade": "Itapeva",
            "UF": "SP"
        })
    }
)

servidor.listen(3000, () => {
    console.log('Servidor funcionando!')
})