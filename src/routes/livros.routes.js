const express = require("express")
const router = express.Router()
const controller = require('../controllers/livrosControllers')

router.get('/', controller.getAll)
router.get('/genero', controller.getByGenre)
router.get('/:id', controller.getById)

router.post('/cadastrar', controller.cadastrarLivro)

router.put('/:id', controller.atualizarLivro)

router.patch('/:id', controller.updateAnything)

router.delete('/:id', controller.deleteAutor)

router.post('/:id/like', controller.like)
router.post('/:id/dislike', controller.dislike)

module.exports = router