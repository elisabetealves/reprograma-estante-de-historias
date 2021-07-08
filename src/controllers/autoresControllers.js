//const mongoose = require('mongoose')
const Autores = require('../models/autor')


const cadastrarAutor = async (req, res) => {
    try {
        const autor = await Autores.create(req.body)
        return res.status(201).json({
            message: "Autor cadastrado com sucesso!",
            autor
        })
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}


const getAll = async (req, res) => {
    try {
        const autores = await Autores.find()
        return res.status(200).json(autores)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}



const getById = async (req, res) => {
    try {
        const { id } = req.params
        const autor = await Autores.findById(id)

        if (autor == undefined || id == " ") {
            return res.status(404).json({
                message: "Id inválido!"
            })
        }
        return res.status(200).json(autor)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getByName = async (req, res) => {
    const nome = req.query.nome;
	await Autores.find({ nome: nome })

    return res.status(200).send(Autores)
}



const atualizarAutor = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = { new: true }

        const autor = await Autores.findByIdAndUpdate(id, body, update)
        return res.status(200).send(autor)
    } catch (error) {
        return res.status(404).send({ message: 'Autor não encontrado' })
    }
}


const deleteAutor = async (req, res) => {
    try {
        const autor = await Autores.findById(req.params.id)

        if (autor == null) {
            return res.status(404).json({ message: 'Autor não encontrado'})
        }

        await autor.remove()
        return res.status(200).json({ message: 'Autor deletado com sucesso!' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAll,
    getById,
    getByName,
    cadastrarAutor,
    atualizarAutor,
    deleteAutor 
}