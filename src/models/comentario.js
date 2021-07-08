const mongoose = require('mongoose')

const comentarioSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'livro'
    }, 
    comentario: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('comentario', comentarioSchema )