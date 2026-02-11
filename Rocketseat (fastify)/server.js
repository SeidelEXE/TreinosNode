/*import { createServer } from 'node:http' 
//manipulação de arquivos é com 'node:fs'
'node:crypto' -> criptografia, hash

const server = createServer((request, response) => { //request puxa os dados do tipo de requisição enviada ao meu servidor http, enquanto response, envia a resposta referente a requisição solicitada
    response.write('hello word')
    
    return response.end() //endpoint mais básico possível, independente de método ou rota, recebendo qualquer tipo de requisição, é depois daqui que o cliente finalmente recebe a resposta da requisição
})

server.listen(3333) //porta que a aplicação vai executar*/

import { fastify } from 'fastify'
import sql from './db.js'
import { DatabasePostgres } from './database-postgres.js'   

const server = fastify()
const database = new DatabasePostgres()


//teste


// GET(busca, listagem, puxa dados no geral), POST(cria um registro), PUT(altera dados), DELETE(deleta né obviamente), PATCH(altera apenas alguma informação em específico), HEAD(retorna apenas o cabeçalho das informações solicitada e não um corpo inteiro de dados como o get{json}), OPTIONS(retorna quais os tipos de métodos possíveis para um endpoint, muito usado em APIS públicas), CONNECT(cria um túnel tcp direto entre cliente e servidor, depois disso o tráfego é criptografado e o proxy só repassa dados), TRACE(ecoa exatamente a requisição recebida pelo servidor, serve para debug)
//Route Parameter 


//Request body ->usados apenas no post e put, não utilizável no get



// POST https://localhost:3333/videos 
server.post('/videos' , async (request, reply) => {
    const { title, description, duration } = request.body



    await database.create({
        title,
        description, //short sintax do js
        duration,

        /*        
        title: title,
        description: description,
        duration: duration,*/ 
    })

    return reply.status(201).send() //status code http 201 significa que algo foi criado
})
 
//podemos ter rotas de mesmo nome com tipos diferentes de requisições para diferentes funções
server.get('/videos' , async (request) => {
    const search = request.query.search

    const videos = await database.list(search) 

    console.log(videos)

    return videos
})

//sempre que um único vídeo é atualizado, isso ocorre por meio do id daquele vídeo em específico, gerado pelo Route Parameter
// PUT https://localhost:3333/videos/id 
server.put('/videos/:id' , async (request, reply) => { //assim é identificado o route parameter no fastify
    const videoID = request.params.id
    const { title, description, duration } = request.body

    await database.update(videoID, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id' , async (request, reply) => { //mesma coisa para o put porque vai deletar um vídeo em específico
    const videoID = request.params.id

    await database.delete(videoID)

    reply.status(204).send()
})


server.listen({
    port: 3333,
})