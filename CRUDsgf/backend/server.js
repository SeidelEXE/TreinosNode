import express from 'express'
import cors from 'cors'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import 'dotenv/config'

//Execução na porta 3334
export const app = express()
const port = 3334
app.listen(port, () => {
    console.log(`backend rodando na porta: ${port}`)
})

//CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5173'
  ],
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
})) 


app.use(express.json())

/*app.post('/login', async (req, res) => {
  let user = await readFile(req.body);
  let pass = await readFile(req.body);

  console.log(`seu usuário é ${user} , sua senha: ${pass}`)
})*/

app.post('/login', async (req, res) => {
  const { user, pass } = req.body

  if(!user || !pass){
    return res.status(400).json({status: 'login ou senha incorretos!'})
  }

  const row = await db.query(
    'SELECT user, pass FROM funcionarios where user = ? LIMIT 1',
    [user]
  )
})

app.post('/form', async (req, res) => {
  const { user, pass } = req.body;
  return res.json(`user: ${user}, password: ${pass}`)
})