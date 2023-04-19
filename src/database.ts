import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST } =
  process.env;

const client = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB   
})

export default client;