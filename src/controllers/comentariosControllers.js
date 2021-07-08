const Comentarios = require('../models/comentario')

const getAll = async(req, res) => {
    const { livro } = req

    const comentario = await Comentarios.find({livro}).populate('livro')
    return res.status(200).send(comentario)
}

const getById = async (req, res) => {
    try {
        const { livro } = req
        const _id = req.params.id

        const comentario = await Comentarios.findOne({_id, livro})

        return res.status(200).send(comentario)
    } catch (error) {
        return res.status(404).send({ message: 'Comentário não encontrado' })
    }
}

const criarComentario = async (req, res) => {
    try {
        const { livro } = req
        
        const body = req.body
        body.livro = livro

        const comentario = await Comentarios.create(body)
        return res.status(201).send(comentario)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

const atualizarComentario = async (req, res) => {
    try {
        const { id } = req.params
        
        const body = req.body
        const update = {new: true}

        const comentario = await Comentarios.findByIdAndUpdate(id, body, update)
        return res.status(200).send(comentario)
    } catch (error) {
        return res.status(404).send({message: 'Comentário não encontrado'})
    }
}

const deletarComentario = async (req, res) => {
    try {
        const { id } = req.params

        await Comentarios.findByIdAndDelete(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(404).send({ message: 'Comentário não encontrado' })
    }
}

module.exports = {
    getAll,
    getById,
    criarComentario,
    atualizarComentario,
    deletarComentario,
}