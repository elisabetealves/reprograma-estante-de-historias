const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma - Estante de Histórias - Projeto Final",
        version: "1.0.0",
        mensagem: "Seja bem-vindo(a)"
    })
})

module.exports = router