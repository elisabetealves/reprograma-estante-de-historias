const express = require("express")
const router = express.Router()
const controller = require('../controllers/autoresControllers')

router.get('/', controller.getAll)
router.get('/nome', controller.getByName)
router.get('/:id', controller.getById)

router.post('/cadastrar', controller.cadastrarAutor)

router.put('/:id', controller.atualizarAutor)

router.delete('/:id', controller.deleteAutor)

module.exports = router