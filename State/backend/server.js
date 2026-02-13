/*import express from 'express'
import cors from 'cors'
import Frase from 'frase.json'

const app = express()
const port = 3333
const Frase = app.use(express.json(req.body))

app.use(express.json())
app.use(cors({
  origin: [
    'http://localhost:3333',
    'http://localhost:5173'
  ],
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}))

app.get('/frase', (req, res) => {
    Frase = app.use(express.json())
    res.send(Frase)
    res.json({ok: true})
})


app.listen(port)


app.get('/', (req, res)=>{
    res.send('Hello Seidel')
})

app.post('/', (req ,res)=>{
    res.send('Hello Postman')
})



################################################################################################################################################################################################
import express from 'express'
import cors from 'cors'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

const dataPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'frase.json'
)

app.get('/frase', async (req, res) => {
  try {
    const raw = await readFile(dataPath, 'utf-8')
    res.type('json').send(raw)
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Falha ao ler frase.json' })
  }
})

app.post('/frase', async (req, res) => {
  const { frase } = req.body ?? {}

  if (typeof frase !== 'string') {
    return res.status(400).json({ ok: false, error: 'frase deve ser string' })
  }

  const payload = { Frase: frase }

  try {
    await writeFile(dataPath, JSON.stringify(payload, null, 2))
    res.json({ ok: true, data: payload })
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Falha ao salvar frase.json' })
  }
})

app.listen(port, () => {
  console.log(`rodando na porta ${port}`)
})



*/

import express from 'express'
import cors from 'cors'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

const dataPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'frase.json'
)

app.get('/frase', async (req, res) => {
  const raw = await readFile(dataPath, 'utf-8')
  res.type('json').send(raw)
})

app.post('/frase', async (req, res) => {
  const payload = { Frase: req.body.frase }
  await writeFile(dataPath, JSON.stringify(payload, null, 2))
  res.json(payload)
})

app.listen(port, () => {
  console.log(`rodando na porta ${port}`)
})
