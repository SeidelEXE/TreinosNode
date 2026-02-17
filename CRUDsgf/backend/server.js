import express from 'express'
import cors from 'cors'
import 'dotenc/config'

export const app = express()
const port = 3333
app.listen(process.env.port, () => {
    console.log(`backend rodando na porta: , ${port}`)
})

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5173'
  ],
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}))