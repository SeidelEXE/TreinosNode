import express from 'express'



const app = express()
const port = 3334

app.post('/', (req, res) =>{
    res.send('Hello seidel')
})

app.get('/', (req, res) =>{
    res.send('Hello seidel')
})

app.put('/', (req, res) =>{
    res.send('Hello seidel')
})

app.delete('/', (req, res) =>{
    res.send('Hello seidel')
})


app.listen(port, () =>{
    console.log("aplicação subiu!")
})  