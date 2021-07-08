const Livros = require('../models/livro')


const cadastrarLivro = async (req, res) => {
    try {
        const livro = await Livros.create(req.body)

        //Não permite criar um livro que ja existe
        const livroJaExiste = await Livros.findOne({ titulo: req.body.titulo })
        if (livroJaExiste) {
            return res.status(409).json({ error: "livro já cadastrado!" })
        }

        return res.status(201).json({
            message: "Livro cadastrado com sucesso!",
            livro
        })
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}


const getAll = async (req, res) => {
    try {
        const livro = await Livros.find().populate('autor')
        return res.status(200).json(livro)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}



const getById = async (req, res) => {
    try {
        const { id } = req.params
        const livro = await Livros.findById(id).populate('autor')

        if (livro == undefined || id == " ") {
            return res.status(404).json({
                message: "Invalid id!"
            })
        }
        return res.status(200).json(livro)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getByGenre = async (req, res) => {
    const { genero } = req.query

    const filtro = {}

    if (genero) {
        filtro.genero = genero
    }

    const livro = await Livros.find(filtro)
    return res.status(200).send(livro)
}


const atualizarLivro = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = { new: true }

        const livro = await Livros.findByIdAndUpdate(id, body, update)
        return res.status(200).send(livro)
    } catch (error) {
        return res.status(404).send({ message: 'Livro não encontrado!!!' })
    }
}


//MÉTODO PATCH atualização de qualquer parte da tarefa separadamente
const updateAnything = async (req, res) => {

    const livro = await Livro.findById(req.params.id)
    const body = req.body

    if (livro == null) res.status(404).json({ message: 'Livro não encontrado!' })

    Object.keys(body).forEach(key => {
        livro[key] = body[key]
    })

    try {
        const livroUpdated = await livro.save()
        return res.status(200).json({
            message: "Livro atualizado com sucesso!",
            livroUpdated
        })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deleteAutor = async (req, res) => {
    try {
        const livro = await Livros.findById(req.params.id)

        if (livro == null) {
            return res.status(404).json({ message: " Livro não encontrado!" })
        }

        await livro.remove()
        return res.status(200).json({ message: "Livro deletado com sucesso!" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


const like = async (req, res) => {
    try {
        const { id } = req.params
        livro = await Livros.findById(id)

        livro.likes += 1

        await Livros.updateOne(livro)
        return res.status(200).send(livro)
    } catch (error) {
        return res.status(404).send({ message: 'Livro não encontrado' })
    }
}


const dislike = async (req, res) => {
    try {
        const { id } = req.params
        livro = await Livros.findById(id)

        livro.likes -= 1

        await Livros.updateOne(livro)
        return res.status(200).send(livro)
    } catch (error) {
        return res.status(404).send({ message: 'Livro não encontrado' })
    }
}


module.exports = {
    getAll,
    getById,
    getByGenre,
    cadastrarLivro,
    atualizarLivro,
    updateAnything,
    deleteAutor,
    like,
    dislike
}