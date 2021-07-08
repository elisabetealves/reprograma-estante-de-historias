const mongoose = require('mongoose')

const livroSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    titulo: {
        type: String,
        required: true
    },
    sinopse: {
        type: String,
        required: true
    },
    autor:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'autor'
    },
    genero: {
        type: String,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    idioma: {
        type: String,
        required: true
    },
    exibicao: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('livro', livroSchema )