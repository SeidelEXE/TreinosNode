import express from 'express'
import cors from 'cors'
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
app.req('/login', (req, res) => {
  let user = req.body
  let password = req.body

  return console.log(user, password)
})