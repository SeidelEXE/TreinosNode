import postgres from 'postgres';
import 'dotenv/config'

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}`

const sql = postgres()

export default sql