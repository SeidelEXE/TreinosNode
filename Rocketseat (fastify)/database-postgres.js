import { randomUUID } from "node:crypto" //UUID -> unique universal id
import sql from "./db.js"

//query parameters, são os tipos de requisições de busca, filtragem, um tratamento mais grosso do que o banco de dados pode devolver ao cliente


export class DatabasePostgres{
     async list(search) {
        let videos 

        if (search) {
            videos = await sql`select * from videos where title ilike ${'%' + search + '%'}` //ilike descarta case sensitive e %% procura a palavra chave em qualquer posição
        } else {
            videos = await sql`select * from videos`
        }

        return videos
     } 

     async create(video) {
        const videoID = randomUUID()
        const { title, description, duration } = video

        await sql`
            insert into videos (id, title, description, duration) VALUES (
            ${videoID}, ${title}, ${description}, ${duration}
            )

        `
     }

     async update(id, video) {
        const { title, description, duration } = video

        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
     }

     async delete(id) {
        await sql`delete from videos WHERE id = ${id}`
     }
}