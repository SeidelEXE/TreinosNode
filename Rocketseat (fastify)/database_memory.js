import { randomUUID } from "node:crypto" //UUID -> unique universal id


//query parameters, são os tipos de requisições de busca, filtragem, um tratamento mais grosso do que o banco de dados pode devolver ao cliente


export class DatabaseMemory{
     #videos = new Map()  //chave privada #

     //set, map -> estruturas úteis para esses casos
     //set -> tipo um array com dados únicos, tem como parametro de envio set(key, value)
     //map -> tipo um objeto com uma api bem mais completa

     list(search) {
        return Array.from(this.#videos.entries())
        .map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
               id,
               ...data
            }
        }) //função que converte o valor puro em array
        .filter(video => {
         if (search){
            return video.title.includes(search)
         }

         return true
        })
     } 

     create(video) {
        const videoID = randomUUID()

        this.#videos.set(videoID, video) //este vídeo com esse id, representa o vídeo em si(citado em cima, na parte do create)
     }

     update(id, video) {
        this.#videos.set(id, video)
     }

     delete(id) {
        this.#videos.delete(id)
     }
}