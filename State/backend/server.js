import express from 'express'

const app = express()
const port = 3333

app.listen(3333)


app.get('/', (req, res)=>{
    res.send('Hello Seidel')
})

app.post('/', (req ,res)=>{
    res.send('Hello Postman')
})

