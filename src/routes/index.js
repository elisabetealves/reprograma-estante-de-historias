const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma - Estante de Histórias - Projeto Final",
        version: "1.0.0",
        mensagem: "Seja bem-vindo(a) a Estante de Histórias uma API completa para escritores independentes"
    })
})

module.exports = router
