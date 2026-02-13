import express from 'express'
import cors from 'cors'
import Frase from 'frase.json'

export const app = express()
const port = 3333
const Frase = app.use(express.json(req.body))

app.use(express.json())
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5173'
  ],
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}))

app.post('/', (req, res) => {
    res.send('aoba')
})

app.get('/frase', (req, res) => {
    Frase = app.use(express.json())
    res.send(Frase)
    res.json({ok: true})
})

app.listen(port, () => {
    console.log('rodando ao vivo e em cores')
})
