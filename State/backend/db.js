import express from 'express'
import cors from 'cors'
import Frase from 'frase.json'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
    res.send('aoba')
})

app.post('/frase', (req, res) => {
    const { frase } = req.body
    frase = Frase
    console.log(Frase)
    res.json({ok: true})
})

app.listen(port, () => {
    console.log('rodando ao vivo e em cores')
})
