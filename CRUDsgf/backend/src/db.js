import postgres from postgres
import 'dotenv/config'

const sql = postgres({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    pguser: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})