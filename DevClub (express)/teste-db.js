import sql from "./db.js";

try{
    const result = await sql`SELECT 1`
    console.log('deu certo man', result)
} catch (err){
    console.log('erro de conexão', err)
} finally {
    await sql.end()
}