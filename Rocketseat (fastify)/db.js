import postgres from "postgres";
import 'dotenv/config' //importa o env e lê tudo que tem dentro do arquivo, armazenando automaticamente na variável global do node -> process.env
/*
const sql = postgres({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    database: process.env.DB_NAME || 'rocketseat',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'teta8979',

})
*/
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}`;

const sql = postgres(URL);

export default sql 