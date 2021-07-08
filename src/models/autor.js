const mongoose = require('mongoose')

const autorSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    biografia: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required:true,
        lowercase: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('autor', autorSchema )