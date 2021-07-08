const express = require('express')
const app = express()
const cors = require('cors')
const index = require('./routes/index')
const autores = require('./routes/autores.routes')
const livros = require('./routes/livros.routes')
const comentario = require('./routes/comentarios.routes')
const  swaggerUi  =  require('swagger-ui-express')  
const  swaggerDocument  =  require('./swagger.json')

const db = require('./data/database')
db.connect()

app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument) ) ;

app.use('/', index)
app.use('/autores', autores)
app.use('/livros', livros)
app.use('/comentario', comentario)

app.get('/terms', (req, res) => {
    return res.json({message : 'Termo de Serviços'})
})

app.get('/', (req, res) => {
    res.send('Eu estou no heroku!')
})

module.exports = app