const express = require("express")
const router = express.Router()
const controller = require('../controllers/comentariosControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/criar', controller.criarComentario)
router.put('/:id', controller.atualizarComentario)
router.delete('/:id', controller.deletarComentario)

module.exports = router