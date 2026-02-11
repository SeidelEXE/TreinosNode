import sql from "./db.js";

try{
    const result = await sql`SELECT 1`
    console.log('deu certo papito', result)
} catch (err){
    console.error('erro de conexão', err)
} finally{
    await sql.end()
}