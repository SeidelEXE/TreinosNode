import postgres from postgres
import 'dotenv/config'

const sql = postgres({
    host: process.env.DB_HOST
})