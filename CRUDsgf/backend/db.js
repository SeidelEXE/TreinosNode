import postgres from "postgres"
import dotenv from 'dotenv'
dotenv.config({ path: "../../.env" });


/*
const sql = postgres({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_US
    password: process.env.DB_PASSWORD
})*/

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_DATABASE}`
const sql = postgres(URL)

export default sql;